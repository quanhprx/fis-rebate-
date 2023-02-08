namespace WebApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Firstrun : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Brands",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        brandname = c.String(nullable: false),
                        program = c.String(nullable: false),
                        currency = c.String(nullable: false),
                        note = c.String(),
                        timestart = c.DateTime(nullable: false),
                        timeend = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        product_id = c.Int(nullable: false, identity: true),
                        brand_id = c.Int(nullable: false),
                        productname = c.String(nullable: false),
                        condition = c.String(nullable: false),
                        rebate = c.Decimal(nullable: false, precision: 4, scale: 2, storeType: "numeric"),
                        note = c.String(),
                    })
                .PrimaryKey(t => t.product_id)
                .ForeignKey("dbo.Brands", t => t.brand_id, cascadeDelete: true)
                .Index(t => t.brand_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Products", "brand_id", "dbo.Brands");
            DropIndex("dbo.Products", new[] { "brand_id" });
            DropTable("dbo.Products");
            DropTable("dbo.Brands");
        }
    }
}
