using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialsLib
{
    public class MaterialsLibDbContext : DbContext
    {
        public DbSet<Material> Materials { get; set; }

        public MaterialsLibDbContext()
        {

        }
        public MaterialsLibDbContext(DbContextOptions<MaterialsLibDbContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured) // If no options provided by DimselabDbContext constructor, use this:
            {
                //options.UseSqlServer(@"Data Source = (localdb)\MSSQLLocalDB; Initial Catalog = DimseLabTest; Integrated Security = True; Connect Timeout = 30; Encrypt = False; TrustServerCertificate = False; ApplicationIntent = ReadWrite; MultiSubnetFailover = False");
            }
        }


    }
}
