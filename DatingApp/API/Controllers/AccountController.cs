using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;

        public AccountController(DataContext context, ITokenService tokenService)
        {
            this._tokenService = tokenService;
            _context = context;

        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto) // (string username, string password)
        {
            if (await UserExists(registerDto.Username)) // van-e ilyen felhasználó
            {
                return BadRequest("username is taken"); // az ActionResult segítségével különböző HTTP státuszkódokat tudunk visszaadni, ilyen a BadRequest is
            }

            // a using egy metódust hív meg, ha rákatintunk az egérrel, F12 megnyomásával látjuk, hogy honan jön
            using var hmac = new HMACSHA512(); // titkosítás

            var user = new AppUser
            {
                UserName = registerDto.Username.ToLower(), //username,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)), // password helyett
                PasswordSalt = hmac.Key

            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync(); // adatbázisba meni a usert

            // return user;
            return new UserDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            // a SingleOrDefaultAsync már több elemet is megtalál
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);

            if (user == null) // ha nincs
            {
                return Unauthorized("invalid username");
            }
            // jelszó bonyolultabb, mert titkosítva van, vissza kell fejtenünk

            // kiválasztani a 2 paraméterből a másodikat, utána enter!!!
            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            // a jelszó egy bájttömb, a karakterenkén megnézzük
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                {
                    return Unauthorized("invalid password");
                }
            }

            // return user;
            // nem ilyen, hanem UserDto típussal térünk vissza
            return new UserDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };




        }

        // van-e már azonos nevű felhasználó
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

    }
}