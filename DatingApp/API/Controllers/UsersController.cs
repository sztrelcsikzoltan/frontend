using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // az elérési utat lehetővé teszi a controller neve alatt
    public class UsersController : ControllerBase
    {
        // depencency injection
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
          
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        // public ActionResult<IEnumerable<AppUser>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            //var users = _context.Users.ToList();

            return users;
        }

        [HttpGet("{id}")]
        public ActionResult<AppUser> GetUsers(int id)
        {
            var user = _context.Users.Find(id); // sync

            return user;
        }
    }
}