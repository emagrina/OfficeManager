using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
    public class ChairsController : ControllerBase
    {
        private readonly OfficeDBContext _context;

        public ChairsController(OfficeDBContext context)
        {
            _context = context;
        }

        // GET: api/Chairs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Chair>>> GetChairs()
        {
            for (int i = 0; i < 77; i++)
            {
                Chair chair = new Chair();
                chair.Zone = 1;
                _context.Chairs.Add(chair);
            }
            await _context.SaveChangesAsync();
            return await _context.Chairs.ToListAsync();
        }

        // GET: api/Chairs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Chair>> GetChair(int id)
        {
            var chair = await _context.Chairs.FindAsync(id);

            if (chair == null)
            {
                return NotFound();
            }

            return chair;
        }

        // PUT: api/Chairs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChair(int id, Chair chair)
        {
            if (id != chair.Id)
            {
                return BadRequest();
            }

            _context.Entry(chair).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChairExists(id))
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

        // POST: api/Chairs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Chair>> PostChair(Chair chair)
        {
            _context.Chairs.Add(chair);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChair", new { id = chair.Id }, chair);
        }

        // DELETE: api/Chairs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChair(int id)
        {
            var chair = await _context.Chairs.FindAsync(id);
            if (chair == null)
            {
                return NotFound();
            }

            _context.Chairs.Remove(chair);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ChairExists(int id)
        {
            return _context.Chairs.Any(e => e.Id == id);
        }
    }
}
