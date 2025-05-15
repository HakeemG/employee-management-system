using Microsoft.EntityFrameworkCore;
using MyEMSApi.Models;

namespace MyEMSApi.Data
{
    public class HRDbContext : DbContext
    {
        public HRDbContext(DbContextOptions<HRDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
    }
}
