﻿using System;
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
using Microsoft.Data.SqlClient.Server;
using System.Globalization;

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
                    ChairId = x.Chair.Id,
                    RoomId = x.Room.Id,
                    UserId = x.User.Id
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
                ChairId = x.Chair.Id,
                RoomId = x.Room.Id,
                UserId = x.User.Id
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

            if (CorrectParameters(bookingPostDTO, chairs, rooms, bookingsDT))
            {
                _context.Entry(new Booking()
                {
                    Id = id,
                    DateTime = bookingDTO.DateTime,
                    Description = bookingDTO.Description,
                    StartTime = bookingDTO.StartTime,
                    EndTime = bookingDTO.EndTime,
                    Chair = _context.Chairs.FirstOrDefault(x => x.Id == bookingPostDTO.ChairId),
                    Room = _context.Rooms.FirstOrDefault(x => x.Id == bookingDTO.RoomId),
                    User = _context.Users.FirstOrDefault(x => x.Id == bookingDTO.UserId)
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
                var bookingsDT = (from x in bookings
                                  where x.DateTime == booking.DateTime
                                  select x).ToList();

                var chairs = await _context.Chairs.ToListAsync();

                var rooms = await _context.Rooms.ToListAsync();

                // Comprovem que els paràmetres de la reserva sigui correcta
                if (CorrectParameters(booking, chairs, rooms, bookingsDT))
                {
                    var users = await _context.Users.ToListAsync();
                    
                    // Afegim la reserva a la base de dades
                    _context.Bookings.Add(new Booking()
                    {
                        DateTime = booking.DateTime,
                        Description = booking.Description,
                        StartTime = booking.StartTime,
                        EndTime = booking.EndTime,
                        Chair = chairs.FirstOrDefault(x => x.Id == booking.ChairId),
                        Room = rooms.FirstOrDefault(x => x.Id == booking.RoomId),
                        User = users.FirstOrDefault(x => x.Id == booking.UserId)
                    });

                    await _context.SaveChangesAsync();
                    return Ok("Booking Created");
                }
            }
            
            return BadRequest();

            // return CreatedAtAction("GetBooking", booking);
        }

        private static bool CorrectParameters(BookingPostDTO booking, List<Chair> chairs, List<Room> rooms, List<Booking> bookingsDT)
        {
            bool isCorrect = false;
            bool chairIsSet = booking.ChairId != null;
            bool roomIsSet = booking.RoomId != null;
            bool dateTimeCorrect = booking.DateTime != null && booking.DateTime.Date >= DateTime.Now.Date &&
                                   booking.StartTime.ToString().Substring(0, 10) == booking.EndTime.ToString().Substring(0, 10) &&
                                   booking.StartTime < booking.EndTime;

            if (chairIsSet && roomIsSet && dateTimeCorrect)
            {
                if (chairs.Any(x => x.Id == booking.ChairId && x.Available == true) &&
                    rooms.Any(x => x.Id == booking.RoomId && x.Available == true) &&
                    chairs.Any(x => x.Id == booking.ChairId) && rooms.Any(x => x.Id == booking.RoomId) &&
                    booking.StartTime != null && booking.EndTime != null && TimeZoneAvailable(booking, bookingsDT))
                {
                    isCorrect = true;
                }
            }
            else if (chairs.Any(x => x.Id == booking.ChairId && x.Available == true) &&
                    dateTimeCorrect && chairIsSet && !chairs.Any(x => x.Id == booking.ChairId) &&
                    booking.StartTime == null && booking.EndTime == null) // Cadira indicada, no pot tenir StartTime ni EndTime
            {
                isCorrect = true;
            }
            else if (rooms.Any(x => x.Id == booking.RoomId && x.Available == true) &&
                    dateTimeCorrect && roomIsSet && !rooms.Any(x => x.Id == booking.RoomId) && TimeZoneAvailable(booking, bookingsDT) &&
                    booking.StartTime != null && booking.EndTime != null) // Sala indicada
            {
                isCorrect = true;
            }

            return isCorrect;
        }

        private static bool TimeZoneAvailable(BookingPostDTO booking, List<Booking> bookingsDT)
        {
            bool timeZoneAvailable = true;

            if (bookingsDT.Any(x => x.StartTime >= booking.StartTime && x.StartTime <= booking.EndTime ||
                            x.EndTime >= booking.StartTime && x.EndTime <= booking.EndTime))
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
