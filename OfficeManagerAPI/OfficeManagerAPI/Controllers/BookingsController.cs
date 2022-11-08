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
                //return await from x in _context.Bookings
                //             where x.DateTime == dateTime
                //             select new BookingDTO()
                //             {
                //                 Id = x.Id,
                //                 DateTime = x.DateTime,
                //                 Description = x.Description,
                //                 StartTime = x.,
                //                 EndTime = x.EndTime,
                //                 ChairId = x.Chair.Id,
                //                 RoomId = x.Room.Id,
                //                 UserId = x.User.Id
                //             };
            }
            return await _context.Bookings.ToListAsync();
        }

        // GET: api/Bookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Booking>> GetBooking(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);

            if (booking == null)
            {
                return NotFound();
            }

            return booking;
        }

        // PUT: api/Bookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooking(int id, Booking booking)
        {
            if (id != booking.Id)
            {
                return BadRequest();
            }

            _context.Entry(booking).State = EntityState.Modified;

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
        public async Task<ActionResult<Booking>> PostBooking(Booking booking)
        {
            var bookings = await _context.Bookings.ToListAsync();

            if (/*booking.DateTime != null &&*/ booking.DateTime > DateTime.Now)
            {
                var bookingsDT = (from x in bookings
                                  where x.DateTime == booking.DateTime
                                  select x).ToList();

                var chairs = await _context.Chairs.ToListAsync();

                var rooms = await _context.Rooms.ToListAsync();

                // Comprovem que els paràmetres de la reserva sigui correcta
                if (CorrectParameters(booking, chairs, rooms, bookings))
                {
                    // Afegim la reserva a la base de dades
                    _context.Bookings.Add(booking);
                }
            }
            else
            {
                BadRequest();
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBooking", new { id = booking.Id }, booking);
        }

        private static bool CorrectParameters(Booking booking, List<Chair> chairs, List<Room> rooms, List<Booking> bookings)
        {
            bool isCorrect = false;
            bool chairIsSet = booking.Chair != null;
            bool roomIsSet = booking.Room != null;
            bool dateTimeCorrect = booking.DateTime != null && booking.DateTime >= DateTime.Now;

            if (chairIsSet && roomIsSet) // Cadira i sala indicades
            {
                if (chairs.Any(x => x.Id == booking.Chair.Id) && rooms.Any(x => x.Id == booking.Room.Id) && dateTimeCorrect &&
                    booking.StartTime != null && booking.EndTime != null && TimeZoneAvailable(booking, bookings))
                {
                    isCorrect = true;
                }
            }
            else if (dateTimeCorrect && chairIsSet && chairs.Any(x => x.Id == booking.Chair.Id)) // Cadira indicada
            {
                isCorrect = true;
            }
            else if (dateTimeCorrect && roomIsSet && rooms.Any(x => x.Id == booking.Room.Id) && TimeZoneAvailable(booking, bookings)) // Sala indicada
            {
                isCorrect = true;
            }

            return isCorrect;
        }

        private static bool TimeZoneAvailable(Booking booking, List<Booking> bookings)
        {
            bool timeZoneAvailable = true;

            if (bookings.Any(x => x.StartTime > booking.StartTime && x.StartTime < booking.EndTime ||
                            x.EndTime > booking.StartTime && x.EndTime < booking.EndTime))
            {
                timeZoneAvailable = false;
            }

            return timeZoneAvailable;
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
