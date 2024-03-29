﻿using System;
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
    public class RoomBookingsController : ControllerBase
    {
        private readonly OfficeDBContext _context;

        public RoomBookingsController(OfficeDBContext context)
        {
            _context = context;
        }

        // GET: api/RoomBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomBookingGetDTO>>> GetRoomBookings([FromQuery] string? date)
        {
            if (!string.IsNullOrEmpty(date))
            {
                var bookingsDT = _context.RoomBookings.Where(x => x.StartTime.Date == ToMinDateTime(date))
                     .Include("Room").Include("User").Select(x => new RoomBookingGetDTO()
                     {
                         Id = x.Id,
                         StartTime = x.StartTime.ToString("G"),
                         EndTime = x.EndTime.ToString("G"),
                         Description = x.Description,
                         RoomId = x.RoomId,
                         UserId = x.UserId
                     });
                return Ok(bookingsDT);
            }

            return await _context.RoomBookings.Include("Room").Include("User").Select(x => new RoomBookingGetDTO()
            {
                Id = x.Id,
                StartTime = x.StartTime.ToString("G"),
                EndTime = x.EndTime.ToString("G"),
                Description = x.Description,
                RoomId = x.RoomId,
                UserId = x.UserId
            }).ToListAsync();
        }

        // GET: api/RoomBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoomBookingDTO>> GetRoomBooking(int id)
        {
            var roomBooking = await _context.RoomBookings.FindAsync(id);

            if (roomBooking == null)
            {
                return NotFound();
            }

            return Ok(new RoomBookingGetDTO()
            {
                Id = roomBooking.Id,
                StartTime = roomBooking.StartTime.ToString("G"),
                EndTime = roomBooking.EndTime.ToString("G"),
                Description = roomBooking.Description,
                RoomId = roomBooking.RoomId,
                UserId = roomBooking.UserId
            });
        }

        // PUT: api/RoomBookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoomBooking(int id, RoomBookingDTO roomBookingDTO)
        {
            if (!RoomBookingExists(id))
            {
                return BadRequest();
            }

            var roomBookingsOnSelectedDayForSelectedRoom = await (from x in _context.RoomBookings
                                                           where x.StartTime.Date.Equals(roomBookingDTO.StartTime.Date) &&
                                                           x.Id != id
                                                           select x).ToListAsync();

            var rooms = await _context.Rooms.ToListAsync();

            if (CheckRoomBookingParameters(roomBookingDTO, rooms, roomBookingsOnSelectedDayForSelectedRoom))
            {
                _context.Entry(new RoomBooking()
                {
                    Id = id,
                    StartTime = roomBookingDTO.StartTime,
                    EndTime= roomBookingDTO.EndTime,
                    Description= roomBookingDTO.Description,
                    RoomId= roomBookingDTO.RoomId,
                    UserId= roomBookingDTO.UserId
                }).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RoomBookingExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return NoContent();
        }

        // POST: api/RoomBookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RoomBookingDTO>> PostRoomBooking(RoomBookingDTO roomBookingDTO)
        {
            var roomBookingsOnSelectedDayForSelectedRoom = await (from x in _context.RoomBookings
                                                                  where x.StartTime.Date.Equals(roomBookingDTO.StartTime.Date) &&
                                                                  x.RoomId == roomBookingDTO.RoomId
                                                                  select x).ToListAsync();

            var rooms = await _context.Rooms.ToListAsync();

            if (CheckRoomBookingParameters(roomBookingDTO, rooms, roomBookingsOnSelectedDayForSelectedRoom))
            {
                var users = await _context.Users.ToListAsync();

                _context.RoomBookings.Add(new RoomBooking()
                {
                    StartTime = roomBookingDTO.StartTime,
                    EndTime = roomBookingDTO.EndTime,
                    Description = roomBookingDTO.Description,
                    RoomId = roomBookingDTO.RoomId,
                    UserId = roomBookingDTO.UserId
                });

                await _context.SaveChangesAsync();
                return CreatedAtAction("PostRoomBooking", roomBookingDTO);
            }

            return BadRequest();
        }

        // DELETE: api/RoomBookings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoomBooking(int id)
        {
            var roomBooking = await _context.RoomBookings.FindAsync(id);
            if (roomBooking == null)
            {
                return NotFound();
            }

            _context.RoomBookings.Remove(roomBooking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CheckRoomBookingParameters(RoomBookingDTO roomBookingDTO, List<Room> rooms, List<RoomBooking> roomBookingsOnSelectedDayForSelectedRoom)
        {
            bool isVald = false;
            var a = rooms.Any(x => x.Id == roomBookingDTO.RoomId && x.Available == true);

            var b = roomBookingDTO.StartTime.Date.Equals(roomBookingDTO.EndTime.Date);

            var c = CheckRoomBookingTimeZone(roomBookingDTO, roomBookingsOnSelectedDayForSelectedRoom);

            var d = _context.Users.Any(x => x.Id == roomBookingDTO.UserId);

            if (roomBookingDTO.RoomId != null &&
                rooms.Any(x => x.Id == roomBookingDTO.RoomId && x.Available == true) &&
                roomBookingDTO.StartTime.Date.Equals(roomBookingDTO.EndTime.Date) &&
                roomBookingDTO.StartTime >= DateTime.Now &&
                CheckRoomBookingTimeZone(roomBookingDTO, roomBookingsOnSelectedDayForSelectedRoom) &&
                _context.Users.Any(x => x.Id == roomBookingDTO.UserId))
            {
                isVald = true;
            }

            return isVald;
        }

        private DateTime ToMinDateTime(string date)
        {
            return DateTime.Parse(date + " " + TimeOnly.MinValue);
        }

        private bool CheckRoomBookingTimeZone(RoomBookingDTO roomBookingDTO, List<RoomBooking> roomBookingsOnSelectedDayForSelectedRoom)
        {
            return !roomBookingsOnSelectedDayForSelectedRoom.Any(x => x.StartTime > roomBookingDTO.StartTime && x.StartTime < roomBookingDTO.EndTime ||
                x.EndTime >= roomBookingDTO.StartTime && x.EndTime <= roomBookingDTO.EndTime);
        }

        private bool RoomBookingExists(int id)
        {
            return _context.RoomBookings.Any(e => e.Id == id);
        }
    }
}
