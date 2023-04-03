using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace config_service.Models
{
    public class ApplicationDbCotntext:IdentityDbContext<IdentityUser>
    {
        public ApplicationDbCotntext(DbContextOptions<ApplicationDbCotntext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }

    }
}
