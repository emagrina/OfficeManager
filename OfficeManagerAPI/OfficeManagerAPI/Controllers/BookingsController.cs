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
            if(dateTime.HasValue) return await _context.Bookings.Where(x => x.DateTime == dateTime).ToListAsync();
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

            if (booking.DateTime != null && booking.DateTime > DateTime.Now)
            {
                var bookingsDT = (from x in bookings
                                  where x.DateTime == booking.DateTime
                                  select x).ToList();

                var chairs = await _context.Chairs.ToListAsync();

                var rooms = await _context.Rooms.ToListAsync();

                // Comprovem que la reserva sigui correcta
                if (booking.Chair != null && chairs.Any(x => x.Id == booking.Chair.Id) ||
                    booking.Room != null && rooms.Any(x => x.Id == booking.Room.Id) && booking.StartTime != null && booking.EndTime != null &&
                    booking.StartTime < booking.EndTime)
                {
                    // Comprovem que la cadira no estigui reservada o que la sala no estigui reservada en la franja horaria desitjada
                    if (booking.Chair != null && booking.Room != null) // Reserva de cadira i sala
                    {
                        if (!bookingsDT.Any(x => x.Chair.Id == booking.Chair.Id) &&
                            !bookingsDT.Any(x => x.Room.Id == booking.Room.Id) &&
                            !_context.Bookings.Any(x => x.StartTime > booking.StartTime && x.StartTime < booking.EndTime) &&
                            !_context.Bookings.Any(x => x.EndTime > booking.StartTime && x.EndTime < booking.EndTime))
                        {
                            _context.Bookings.Add(booking);
                        }
                    }
                    else if (booking.Chair != null && booking.Room == null) // Reserva de cadira
                    {
                        if (!bookingsDT.Any(x => x.Chair.Id == booking.Chair.Id))
                        {
                            _context.Bookings.Add(booking);
                        }
                    }
                    else if (booking.Chair == null && booking.Room != null) // Reserva de sala
                    {
                        if (!bookingsDT.Any(x => x.Room.Id == booking.Room.Id) &&
                            !_context.Bookings.Any(x => x.StartTime > booking.StartTime && x.StartTime < booking.EndTime) &&
                            !_context.Bookings.Any(x => x.EndTime > booking.StartTime && x.EndTime < booking.EndTime))
                        {
                            _context.Bookings.Add(booking);
                        }
                    }
                    else
                    {
                        BadRequest();
                    }
                }
            }
            else
            {
                BadRequest();
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBooking", new { id = booking.Id }, booking);
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
