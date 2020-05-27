using FamCont.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace FamCont.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController: ControllerBase
    {
        UserManager<User> UserManager { get; set; }

        public UserController(UserManager<User> userManager)
        {
            UserManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync(User user)
        {
            await UserManager.CreateAsync(user, user.Password);
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllAsync()
        {
            return await UserManager.Users.ToListAsync();
        }
           
    }
}
