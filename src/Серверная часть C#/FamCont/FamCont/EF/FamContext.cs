using FamCont.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace FamCont.EF
{
    public class FamContext: IdentityDbContext<User>
    {
        public FamContext(DbContextOptions<FamContext> options): base(options)
        {
            Database.EnsureCreated();
        }
    }
}
