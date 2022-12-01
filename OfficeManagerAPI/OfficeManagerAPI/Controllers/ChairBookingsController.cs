using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OfficeManagerAPI.Data;
using OfficeManagerAPI.DBAccess;
using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChairBookingsController : ControllerBase
    {
        private readonly OfficeDBContext _context;

        public ChairBookingsController(OfficeDBContext context)
        {
            _context = context;
        }

        // GET: api/ChairBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChairBookingGetDTO>>> GetChairBooking([FromQuery] string? date)
        {
            if (!String.IsNullOrEmpty(date))
            {
                var bookingsDT = _context.ChairBookings.Where(x => x.DateTime.Date == ToMinDateTime(date))
                     .Include("Chair").Include("User").Select(x => new ChairBookingGetDTO()
                     {
                         Id = x.Id,
                         DateTime = x.DateTime.Date.ToString(),
                         ChairId = x.ChairId,
                         UserId = x.UserId
                     });
                return Ok(bookingsDT);
            }

            return await _context.ChairBookings.Include("Chair").Include("User").Select(x => new ChairBookingGetDTO()
            {
                Id = x.Id,
                DateTime = x.DateTime.Date.ToString(),
                ChairId = x.ChairId,
                UserId = x.UserId
            }).ToListAsync();
        }

        // GET: api/ChairBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChairBookingGetDTO>> GetChairBooking(int id)
        {
            var chairBooking = await _context.ChairBookings.FindAsync(id);

            if (chairBooking == null)
            {
                return NotFound();
            }

            return Ok(new ChairBookingDTO()
            {
                Date = chairBooking.DateTime.Date.ToString("d"),
                ChairId = chairBooking.Id,
                UserId = chairBooking.UserId

            });
        }

        // PUT: api/ChairBookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChairBooking(int id, ChairBookingDTO chairBookingDTO)
         {
            if (!ChairBookingExists(id))
            {
                return BadRequest();
            }

            var chairBookingsOnSelectedDay = await (from x in _context.ChairBookings
                                        where x.DateTime == ToMinDateTime(chairBookingDTO.Date) && x.Id != id
                                        select x).ToListAsync();

            var chairs = await _context.Chairs.ToListAsync();

            if (CheckChairBookingParameters(chairBookingDTO, chairs, chairBookingsOnSelectedDay))
            {
                _context.Entry(new ChairBooking()
                {
                    Id = id,
                    DateTime = ToMinDateTime(chairBookingDTO.Date),
                    ChairId = chairBookingDTO.ChairId,
                    UserId = chairBookingDTO.UserId
                }).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ChairBookingExists(id))
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

        // POST: api/ChairBookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ChairBookingDTO>> PostChairBooking(ChairBookingDTO chairBookingDTO)
        {
            var chairBookingsOnSelectedDay = await _context.ChairBookings
                .Where(x => x.DateTime == ToMinDateTime(chairBookingDTO.Date)).ToListAsync();

            var chairs = await _context.Chairs.ToListAsync();

            if (CheckChairBookingParameters(chairBookingDTO, chairs, chairBookingsOnSelectedDay))
            {
                var users = await _context.Users.ToListAsync();

                _context.ChairBookings.Add(new ChairBooking()
                {
                    DateTime = ToMinDateTime(chairBookingDTO.Date),
                    ChairId = chairBookingDTO.ChairId,
                    UserId = chairBookingDTO.UserId
                });

                await _context.SaveChangesAsync();
                return CreatedAtAction("GetChairBooking", chairBookingDTO);
            }

            return BadRequest();
        }

        // DELETE: api/ChairBookings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChairBooking(int id)
        {
            var chairBooking = await _context.ChairBookings.FindAsync(id);
            if (chairBooking == null)
            {
                return NotFound();
            }

            _context.ChairBookings.Remove(chairBooking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CheckChairBookingParameters(ChairBookingDTO chairBookingDTO, List<Chair> chairs, List<ChairBooking> chairBookingsOnSelectedDay)
        {
            bool isValid = false;

            bool a = chairs.Any(x => x.Id == chairBookingDTO.ChairId && x.Available == true);
            bool b = ToMinDateTime(chairBookingDTO.Date) >= DateTime.Now.Date;
            bool c = !chairBookingsOnSelectedDay.Any(x => x.ChairId == chairBookingDTO.ChairId);
            bool d = _context.Users.Any(x => x.Id == chairBookingDTO.UserId);

            if (chairBookingDTO.ChairId != null &&
                chairs.Any(x => x.Id == chairBookingDTO.ChairId && x.Available == true) &&
                ToMinDateTime(chairBookingDTO.Date) >= DateTime.Now.Date &&
                !chairBookingsOnSelectedDay.Any(x => x.ChairId == chairBookingDTO.ChairId) &&
                _context.Users.Any(x => x.Id == chairBookingDTO.UserId))
            {
                isValid = true;
            }

            return isValid;
        }

        private DateTime ToMinDateTime(string date)
        {
            // TODO: Controll if the given string length is < 10
            return DateTime.Parse(date + " " + TimeOnly.MinValue);
        }

        private bool ChairBookingExists(int id)
        {
            return _context.ChairBookings.Any(e => e.Id == id);
        }
    }
}
