using API.Interfaces;
using API.Entities;
using System;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Collections.Generic;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace API.Services
{
    public class TokenService : ITokenService
    {
        // JWT szimmetrikus kulccsal dolgozik
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }

        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            // token leírás
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(9), // rövidebb időt szoktak adni, néhány órát
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler(); // handler létrehozása

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token); // token átadódk annak, aki kéri
        }
        

    }
}