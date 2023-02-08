namespace WebApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Fourthrun : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "rebate", c => c.Decimal(nullable: false, precision: 4, scale: 2, storeType: "numeric"));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "rebate", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
    }
}
