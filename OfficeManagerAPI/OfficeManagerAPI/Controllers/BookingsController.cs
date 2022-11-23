using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.VisualBasic.Syntax;
using Microsoft.EntityFrameworkCore;
using OfficeManagerAPI.DBAccess;
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
                var bookingsDT = _context.Bookings.Where(x => x.DateTime == dateTime)
                    .Include("Chair").Include("Room").Include("User")
                    .Select(x => new BookingDTO()
                    {
                        Id = x.Id,
                        Date = x.DateTime.Date.ToString(),
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
                Date = x.DateTime.Date.ToString(),
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
                Date = x.DateTime.Date.ToString(),
                Description = x.Description,
                StartTime = x.StartTime,
                EndTime = x.EndTime,
                ChairId = x.ChairId,
                RoomId = x.RoomId,
                UserId = x.UserId
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
        public async Task<IActionResult> PutBooking(int id, BookingPostDTO bookingPostDTO)
        {
            if (!BookingExists(id))
            {
                return BadRequest();
            }

            if (bookingPostDTO.Date == null && (bookingPostDTO.StartTime == null || bookingPostDTO.EndTime == null))
            {
                return BadRequest();
            }

            List<Booking> bookingsOnSelectedDays = null;

            if (bookingPostDTO.Date != null && bookingPostDTO.StartTime != null && bookingPostDTO != null)
            {
                bookingsOnSelectedDays = (from x in _context.Bookings
                                         where x.DateTime == DateTime.Parse(bookingPostDTO.Date) && x.Id != id ||
                                         x.DateTime == DateTime.Parse(bookingPostDTO.StartTime.ToString().Substring(0, 10)) && x.Id != id
                                         select x).ToList();
            }
            else if (bookingPostDTO.Date != null && bookingPostDTO.StartTime == null && bookingPostDTO.EndTime == null)
            {
                bookingsOnSelectedDays = (from x in _context.Bookings
                                         where x.DateTime == DateTime.Parse(bookingPostDTO.Date) && x.Id != id
                                         select x).ToList();
            }
            else if (bookingPostDTO.Date == null && bookingPostDTO.StartTime != null && bookingPostDTO.EndTime != null)
            {
                bookingsOnSelectedDays = (from x in _context.Bookings
                                         where x.DateTime == DateTime.Parse(bookingPostDTO.StartTime.ToString().Substring(0, 10))
                                            && x.Id != id
                                         select x).ToList();
            }
            else
            {
                return BadRequest();
            }
            

            var chairs = await _context.Chairs.ToListAsync();

            var rooms = await _context.Rooms.ToListAsync();

            if (CheckParametersPut(new BookingPostDTO()
            {
                Date = bookingPostDTO.Date,
                Description = bookingPostDTO.Description,
                StartTime = bookingPostDTO.StartTime.GetValueOrDefault(),
                EndTime = bookingPostDTO.EndTime.GetValueOrDefault(),
                ChairId = chairs.FirstOrDefault(x => x.Id == id, null).Id,
                RoomId = rooms.FirstOrDefault(x => x.Id == bookingPostDTO.RoomId, null).Id,
                UserId = _context.Users.FirstOrDefault(x => x.Id == bookingPostDTO.UserId).Id
            }, chairs, rooms, bookingsOnSelectedDays))
            {
                _context.Entry(new Booking()
                {
                    Id = id,
                    DateTime = DateTime.Parse(bookingPostDTO.Date),
                    Description = bookingPostDTO.Description,
                    StartTime = bookingPostDTO.StartTime.GetValueOrDefault(),
                    EndTime = bookingPostDTO.EndTime.GetValueOrDefault(),
                    ChairId = chairs.FirstOrDefault(x => x.Id == id, null).Id,
                    RoomId = rooms.FirstOrDefault(x => x.Id == bookingPostDTO.RoomId, null).Id,
                    UserId = _context.Users.FirstOrDefault(x => x.Id == bookingPostDTO.UserId).Id
                }).State = EntityState.Modified;

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
            }
            else
            {
                return BadRequest();
            }

            return NoContent();
        }

        // POST: api/Bookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Booking>> PostBooking(BookingPostDTO bookingPostDTO)
        {
            var bookings = await _context.Bookings.ToListAsync();

            if (DateTime.Parse(bookingPostDTO.Date).Date >= DateTime.Now.Date)
            {
                var bookingsToday = (from x in bookings
                                     where x.DateTime.Date == DateTime.Parse(bookingPostDTO.Date)
                                     select x).ToList();

                var chairs = await _context.Chairs.ToListAsync();

                var rooms = await _context.Rooms.ToListAsync();

                // Comprovem que els paràmetres de la reserva sigui correcta
                if (CheckParametersPost(bookingPostDTO, chairs, rooms, bookingsToday))
                {
                    var users = await _context.Users.ToListAsync();

                    // Afegim la reserva a la base de dades
                    _context.Bookings.Add(new Booking()
                    {
                        DateTime = DateTime.Parse(bookingPostDTO.Date),
                        Description = bookingPostDTO.Description,
                        StartTime = bookingPostDTO.StartTime,
                        EndTime = bookingPostDTO.EndTime,
                        ChairId = chairs.FirstOrDefault(x => x.Id == bookingPostDTO.ChairId).Id,
                        Room = rooms.FirstOrDefault(x => x.Id == bookingPostDTO.RoomId),
                        User = users.FirstOrDefault(x => x.Id == bookingPostDTO.UserId)
                    });

                    await _context.SaveChangesAsync();
                    return Ok("Created Booking");
                }

            }

            return BadRequest();

            // return CreatedAtAction("GetBooking", booking);
        }

        private static bool CheckParametersPost(BookingPostDTO bookingPostDTO, List<Chair> chairs, List<Room> rooms, List<Booking> bookingsToday)
        {
            bool isCorrect = false;
            bool chairIsSet = bookingPostDTO.ChairId != null;
            bool roomIsSet = bookingPostDTO.RoomId != null;
            bool startEndIsSet = bookingPostDTO.StartTime != null && bookingPostDTO.EndTime != null;
            bool dateTimesCorrect = CheckBookingDateTimes(bookingPostDTO, bookingsToday);

            // Variables per proves dels condicionals
            var a = bookingsToday.Any(x => x.ChairId == bookingPostDTO.ChairId);
            var b = bookingsToday.Any(x => x.RoomId == bookingPostDTO.RoomId);
            var c = chairs.Any(x => x.Id == bookingPostDTO.ChairId && x.Available == true);
            var d = rooms.Any(x => x.Id == bookingPostDTO.RoomId && x.Available == true);

            if (chairIsSet && roomIsSet && dateTimesCorrect && startEndIsSet &&
                chairs.Any(x => x.Id == bookingPostDTO.ChairId && x.Available == true) &&
                rooms.Any(x => x.Id == bookingPostDTO.RoomId && x.Available == true) &&
                !bookingsToday.Any(x => x.ChairId == bookingPostDTO.ChairId) &&
                !bookingsToday.Any(x => x.RoomId == bookingPostDTO.RoomId))
            {
                isCorrect = true;
            }
            else if (chairIsSet && dateTimesCorrect &&
                    chairs.Any(x => x.Id == bookingPostDTO.ChairId && x.Available == true) &&
                    !bookingsToday.Any(x => x.ChairId == bookingPostDTO.ChairId) &&
                    bookingPostDTO.StartTime == null && bookingPostDTO.EndTime == null)
            {
                isCorrect = true;
            }
            else if (roomIsSet && dateTimesCorrect &&
                    rooms.Any(x => x.Id == bookingPostDTO.RoomId && x.Available == true) &&
                    !bookingsToday.Any(x => x.Room.Id == bookingPostDTO.RoomId) &&
                    bookingPostDTO.StartTime != null && bookingPostDTO.EndTime != null)
            {
                isCorrect = true;
            }

            return isCorrect;
        }
        private static bool CheckParametersPut(BookingPostDTO bookingPostDTO, List<Chair> chairs, List<Room> rooms, List<Booking> bookingsOnSelectedDays)
        {
            bool isCorrect = false;
            bool chairIsSet = bookingPostDTO.ChairId != null;
            bool roomIsSet = bookingPostDTO.RoomId != null;
            bool startEndIsSet = bookingPostDTO.StartTime != null && bookingPostDTO.EndTime != null;
            bool dateTimesCorrect = CheckBookingDateTimes(bookingPostDTO, bookingsOnSelectedDays);

            // Variables per proves dels condicionals
            var a = bookingsOnSelectedDays.Any(x => x.ChairId == bookingPostDTO.ChairId);
            var b = bookingsOnSelectedDays.Any(x => x.RoomId == bookingPostDTO.RoomId);
            var c = chairs.Any(x => x.Id == bookingPostDTO.ChairId && x.Available == true);
            var d = rooms.Any(x => x.Id == bookingPostDTO.RoomId && x.Available == true);

            if (chairIsSet && roomIsSet && dateTimesCorrect && startEndIsSet &&
                chairs.Any(x => x.Id == bookingPostDTO.ChairId && x.Available == true) &&
                rooms.Any(x => x.Id == bookingPostDTO.RoomId && x.Available == true) &&
                !bookingsOnSelectedDays.Any(x => x.ChairId == bookingPostDTO.ChairId) &&
                !bookingsOnSelectedDays.Any(x => x.RoomId == bookingPostDTO.RoomId))
            {
                isCorrect = true;
            }
            else if (chairIsSet && dateTimesCorrect &&
                    chairs.Any(x => x.Id == bookingPostDTO.ChairId && x.Available == true) &&
                    !bookingsOnSelectedDays.Any(x => x.ChairId == bookingPostDTO.ChairId) &&
                    bookingPostDTO.StartTime == null && bookingPostDTO.EndTime == null)
            {
                isCorrect = true;
            }
            else if (roomIsSet && dateTimesCorrect &&
                    rooms.Any(x => x.Id == bookingPostDTO.RoomId && x.Available == true) &&
                    !bookingsOnSelectedDays.Any(x => x.Room.Id == bookingPostDTO.RoomId) &&
                    bookingPostDTO.StartTime != null && bookingPostDTO.EndTime != null)
            {
                isCorrect = true;
            }

            return isCorrect;
        }

        private static bool CheckBookingDateTimes(BookingPostDTO bookingPostDTO, List<Booking> bookingsToday)
        {
            bool validDateTime = false;

            if (bookingPostDTO.ChairId != null && bookingPostDTO.RoomId != null &&
                DateTime.Parse(bookingPostDTO.Date).Date >= DateTime.Now.Date &&
                bookingPostDTO.StartTime.ToString().Substring(0, 10)
                    .Equals(bookingPostDTO.EndTime.ToString().Substring(0, 10)) &&
                bookingPostDTO.StartTime < bookingPostDTO.EndTime
                && TimeZoneAvailable(bookingPostDTO, bookingsToday))
            {
                validDateTime = true;
            }
            else if (bookingPostDTO.ChairId != null &&
                     DateTime.Parse(bookingPostDTO.Date).Date >= DateTime.Now.Date)
            {
                validDateTime = true;
            }
            else if (bookingPostDTO.RoomId != null &&
                    DateOnly.Parse(bookingPostDTO.StartTime.ToString().Substring(0, 10)) >=
                        DateOnly.Parse(DateTime.Now.ToString().Substring(0, 10)) &&
                    bookingPostDTO.StartTime.ToString().Substring(0, 10)
                        .Equals(bookingPostDTO.EndTime.ToString().Substring(0, 10)) &&
                    bookingPostDTO.StartTime != null && bookingPostDTO.EndTime != null &&
                    bookingPostDTO.StartTime < bookingPostDTO.EndTime &&
                    TimeZoneAvailable(bookingPostDTO, bookingsToday))
            {
                validDateTime = true;
            }

            return validDateTime;
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
