using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OfficeManagerAPI.DBAccess;
using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChairBookings1Controller : ControllerBase
    {
        private readonly OfficeDBContext _context;

        public ChairBookings1Controller(OfficeDBContext context)
        {
            _context = context;
        }

        // GET: api/ChairBookings1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChairBooking>>> GetChairBookings()
        {
            return await _context.ChairBookings.ToListAsync();
        }

        // GET: api/ChairBookings1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChairBooking>> GetChairBooking(int id)
        {
            var chairBooking = await _context.ChairBookings.FindAsync(id);

            if (chairBooking == null)
            {
                return NotFound();
            }

            return chairBooking;
        }

        // PUT: api/ChairBookings1/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChairBooking(int id, ChairBooking chairBooking)
        {
            if (id != chairBooking.Id)
            {
                return BadRequest();
            }

            _context.Entry(chairBooking).State = EntityState.Modified;

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

            return NoContent();
        }

        // POST: api/ChairBookings1
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ChairBooking>> PostChairBooking(ChairBooking chairBooking)
        {
            _context.ChairBookings.Add(chairBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChairBooking", new { id = chairBooking.Id }, chairBooking);
        }

        // DELETE: api/ChairBookings1/5
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

        private bool ChairBookingExists(int id)
        {
            return _context.ChairBookings.Any(e => e.Id == id);
        }
    }
}
