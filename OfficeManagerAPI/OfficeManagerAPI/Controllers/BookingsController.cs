using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.VisualBasic.Syntax;
using Microsoft.EntityFrameworkCore;
using OfficeManagerAPI.DBAccess;
using OfficeManagerAPI.Migrations;
using OfficeManagerAPI.Models.DataModels;
using OfficeManagerAPI.Data;

namespace OfficeManagerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly OfficeDBContext _context;

        public BookingsController(OfficeDBContext context)
        {
            _context = context;
        }

        // GET: api/Bookings
        // GET: api/Bookings?dateTime=
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBookings([FromQuery] DateTime? dateTime)
        {
            if (dateTime.HasValue)
            {
                var bookingsDT = _context.Bookings.Where(x => x.DateTime == dateTime).Include("Chair").Include("Room").Include("User").Select(x => new BookingDTO()
                {
                    Id = x.Id,
                    DateTime = x.DateTime,
                    Description = x.Description,
                    StartTime = x.StartTime,
                    EndTime = x.EndTime,
                    ChairId = x.ChairId,
                    RoomId = x.RoomId,
                    UserId = x.UserId
                });
                return Ok(bookingsDT);
            }

            return Ok(_context.Bookings.Include("Chair").Include("Room").Include("User").Select(x => new BookingDTO()
            {
                Id = x.Id,
                DateTime = x.DateTime,
                Description = x.Description,
                StartTime = x.StartTime,
                EndTime = x.EndTime,
                ChairId = x.ChairId,
                RoomId = x.RoomId,
                UserId = x.UserId
            }));
        }

        // GET: api/Bookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Booking>> GetBooking(int id)
        {
            var booking = _context.Bookings.Where(x => x.Id == id).Include("Chair").Include("Room").Include("User").Select(x => new BookingDTO()
            {
                Id = x.Id,
                DateTime = x.DateTime,
                Description = x.Description,
                StartTime = x.StartTime,
                EndTime = x.EndTime,
                ChairId = x.Chair.Id,
                RoomId = x.Room.Id,
                UserId = x.User.Id
            });

            if (booking == null)
            {
                return NotFound();
            }

            return Ok(booking);
        }

        // PUT: api/Bookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooking(int id, BookingDTO bookingDTO)
        {
            if (id != bookingDTO.Id)
            {
                return BadRequest();
            }

            var bookingsDT = (from x in _context.Bookings
                              where x.DateTime == bookingDTO.DateTime
                              select x).ToList();

            var chairs = await _context.Chairs.ToListAsync();

            var rooms = await _context.Rooms.ToListAsync();

            var bookingPostDTO = new BookingPostDTO()
            {

            };

            if (CheckParameters(bookingPostDTO, chairs, rooms, bookingsDT))
            {
                _context.Entry(new Booking()
                {
                    Id = id,
                    DateTime = bookingDTO.DateTime,
                    Description = bookingDTO.Description,
                    StartTime = bookingDTO.StartTime,
                    EndTime = bookingDTO.EndTime,
                    Chair = _context.Chairs.FirstOrDefault(x => x.Id == id),
                    Room = _context.Rooms.FirstOrDefault(x => x.Id == bookingDTO.Id),
                    User = _context.Users.FirstOrDefault(x => x.Id == bookingDTO.Id)
                }).State = EntityState.Modified;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ActionName(nameof(PostBooking))]
        public async Task<ActionResult<Booking>> PostBooking(BookingPostDTO booking)
        {
            var bookings = await _context.Bookings.ToListAsync();

            if (booking.DateTime.Date > DateTime.Now.Date)
            {
                var bookingsToday = (from x in bookings
                                  where x.DateTime == booking.DateTime
                                  select x).ToList();

                var chairs = await _context.Chairs.ToListAsync();

                var rooms = await _context.Rooms.ToListAsync();

                // Comprovem que els paràmetres de la reserva sigui correcta
                if (CheckParameters(booking, chairs, rooms, bookingsToday))
                {
                    var users = await _context.Users.ToListAsync();
                    
                    // Afegim la reserva a la base de dades
                    _context.Bookings.Add(new Booking()
                    {
                        DateTime = booking.DateTime.Date,
                        Description = booking.Description,
                        StartTime = booking.StartTime,
                        EndTime = booking.EndTime,
                        Chair = chairs.FirstOrDefault(x => x.Id == booking.ChairId),
                        Room = rooms.FirstOrDefault(x => x.Id == booking.RoomId),
                        User = users.FirstOrDefault(x => x.Id == booking.UserId)
                    });

                    await _context.SaveChangesAsync();
                    return Ok("Created Booking");
                }

            }
            
            return BadRequest();

            // return CreatedAtAction("GetBooking", booking);
        }

        private static bool CheckParameters(BookingPostDTO booking, List<Chair> chairs, List<Room> rooms, List<Booking> bookingsToday)
        {
            bool isCorrect = false;
            bool chairIsSet = booking.ChairId != null;
            bool roomIsSet = booking.RoomId != null;
            bool dateTimeCorrect = CheckBookingDateTimes(booking, bookingsToday);
            var a = bookingsToday.Any(x => x.Chair.Id == booking.ChairId);
            var b = bookingsToday.Any(x => x.Room.Id == booking.RoomId);

            if (chairIsSet && roomIsSet && dateTimeCorrect &&
                chairs.Any(x => x.Id == booking.ChairId && x.Available == true) &&
                rooms.Any(x => x.Id == booking.RoomId && x.Available == true) &&
                !bookingsToday.Any(x => x.Chair.Id == booking.ChairId) &&
                !bookingsToday.Any(x => x.Room.Id == booking.RoomId) && TimeZoneAvailable(booking, bookingsToday))
            {
                isCorrect = true;
            }
            else if (chairIsSet && dateTimeCorrect &&
                    chairs.Any(x => x.Id == booking.ChairId && x.Available == true) &&
                    !bookingsToday.Any(x => x.Chair.Id == booking.ChairId) &&
                    booking.StartTime == null && booking.EndTime == null)
            {
                isCorrect = true;
            }
            else if (roomIsSet && dateTimeCorrect &&
                    rooms.Any(x => x.Id == booking.RoomId && x.Available == true) &&
                    !bookingsToday.Any(x => x.Room.Id == booking.RoomId) && TimeZoneAvailable(booking, bookingsToday) &&
                    booking.StartTime != null && booking.EndTime != null)
            {
                isCorrect = true;
            }

            return isCorrect;
        }

        private static bool CheckBookingDateTimes(BookingPostDTO booking, List<Booking> bookingsToday)
        {
            bool correctDateTime = false;

            if (booking.DateTime != null && booking.DateTime > DateTime.Now)
            {
                if (booking.ChairId != null && booking.RoomId != null &&
                    booking.DateTime.ToString().Substring(0, 10).Equals(booking.StartTime.ToString().Substring(0, 10)) &&
                    booking.DateTime.ToString().Substring(0, 10).Equals(booking.EndTime.ToString().Substring(0, 10)) &&
                    booking.StartTime < booking.EndTime)
                {
                    correctDateTime = true;
                }
                else if (booking.ChairId != null)
                {
                    correctDateTime = true;
                }
                else if (booking.RoomId != null &&
                        booking.StartTime != null && booking.EndTime != null &&
                        booking.DateTime.ToString().Substring(0, 10).Equals(booking.StartTime.ToString().Substring(0, 10)) &&
                        booking.DateTime.ToString().Substring(0, 10).Equals(booking.EndTime.ToString().Substring(0, 10)) &&
                        booking.StartTime < booking.EndTime)
                {
                    correctDateTime = true;
                }
            }

            return correctDateTime;
        }

        private static bool TimeZoneAvailable(BookingPostDTO booking, List<Booking> bookingsToday)
        {
            return !(bookingsToday.Any(x => x.StartTime >= booking.StartTime && x.StartTime <= booking.EndTime ||
                            x.EndTime >= booking.StartTime && x.EndTime <= booking.EndTime));
        }

        // DELETE: api/Bookings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return NotFound();
            }

            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookingExists(int id)
        {
            return _context.Bookings.Any(e => e.Id == id);
        }
    }
}
