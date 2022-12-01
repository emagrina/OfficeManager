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
    public class UsersController : ControllerBase
    {
        private readonly OfficeDBContext _context;

        public UsersController(OfficeDBContext context)
        {
            _context = context;
        }

        // GET: api/Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserGetDTO>>> GetUsers()
        {
            return await _context.Users.Include("ChairBooking").Include("RoomBooking").Select(x => new UserGetDTO()
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName,
                IsAdmin = x.IsAdmin,
                Email = x.Email,
                Passw = x.Passw
            }).ToListAsync();
        }

        // GET: api/Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserGetDTO>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return new UserGetDTO()
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                IsAdmin = user.IsAdmin,
                Email = user.Email,
                Passw = user.Passw
            };
        }

        // PUT: api/Admin/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, UserDTO userDTO)
        {
            if (!UserExists(id))
            {
                return NotFound();
            }

            if (repeatedEmail(userDTO))
            {
                BadRequest();
            }
            else
            {
                _context.Entry(new User()
                {
                    Id = id,
                    FirstName = userDTO.FirstName,
                    LastName = userDTO.LastName,
                    IsAdmin = userDTO.IsAdmin,
                    Email = userDTO.Email,
                    Passw = userDTO.Passw
                }).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Admin
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserDTO>> PostUser(UserDTO userDTO)
        {
            if (repeatedEmail(userDTO))
            {
                return BadRequest();
            }
            else
            {
                _context.Users.Add(new User()
                {
                    FirstName = userDTO.FirstName,
                    LastName = userDTO.LastName,
                    IsAdmin = userDTO.IsAdmin,
                    Email = userDTO.Email,
                    Passw = userDTO.Passw,
                    CreatedBy = userDTO.CreatedBy,
                    CreatedAt = userDTO.CreatedAt,
                    UpdatedBy = userDTO.UpdatedBy,
                    UpdatedAt = userDTO.UpdatedAt,
                    DelatedBy = userDTO.DelatedBy,
                    DelatedAt = userDTO.DelatedAt,
                    IsDeleted = userDTO.IsDeleted
                });

                await _context.SaveChangesAsync();
                return Ok("Created User");
            }
        }

        // DELETE: api/Admin/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool repeatedEmail(UserDTO userDTO)
        {
            return _context.Users.Any(x => x.Email.Equals(userDTO.Email));
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
