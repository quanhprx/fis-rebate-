using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.Data;
using WebApplication2.Models;
using System.Data.Entity;
using System.Data;
using System.Data.Entity.Validation;

namespace WebApplication2.Controllers
{
    public class ApplicationController : Controller
    {
        ApplicationDbContext _context = new ApplicationDbContext();
        
        public ActionResult Index()
        {
            List<Brand> brands;
            brands = _context.Brands.ToList();

            return View(brands); 
        }

        public ActionResult Details(int ID)
        {
            Brand brand = _context.Brands
               .Include(e => e.Products)
               .Where(a => a.Id == ID).FirstOrDefault();

            return View(brand);
        }

        [HttpGet]
        public ActionResult Create()
        {
            Brand brand = new Brand();
            brand.Products.Add(new Product() { product_id = 1 });


            return View(brand);
        }

        // POST: Application/Create
        [HttpPost]
        public ActionResult Create(Brand brand)         
        {
            //var programs = _context.Brands;
            //var Programs =
            //(
            //    from x in _context.Brands
            //    where x.program == programs
            //    select x).ToList();)
            //if (ModelState.IsValid)
            //{
            //    if ()

            //}
            _context.Brands.Add(brand);
            _context.SaveChanges();
            //ViewBag.SuccessMsg = "Đã lưu thành công";
            //ViewBag.Notice = "Save successful";

            return RedirectToAction("Index");

        }

        [HttpGet]
        public ActionResult Edit(int ID)
        {
            Brand brand = _context.Brands
                .Include(e => e.Products)
                .Where(a => a.Id == ID).FirstOrDefault();
            return View(brand);
        }

        [HttpPost]
        public ActionResult Edit(Brand brand)
        {
            List<Product> proDetails = _context.Products.Where(d => d.brand_id == brand.Id).ToList();
            _context.Products.RemoveRange(proDetails);
            _context.SaveChanges();

            _context.Brands.Attach(brand);
            _context.Entry(brand).State = EntityState.Modified;
            _context.Products.AddRange(brand.Products);

            //_context.SaveChanges(SaveOptions.AcceptAllChangesAfterSave);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }


        [HttpGet]
        public ActionResult Delete(int ID)
        {
            Brand brand = _context.Brands
                .Include(e => e.Products)
                .Where(a => a.Id == ID).FirstOrDefault();

            return View(brand);
        }

        [HttpPost]
        public ActionResult Delete(Brand brand)
        {
            _context.Brands.Attach(brand);

            //_context.Entry(brand).State = System.Data.Entity.EntityState.Modified;
            //_context.Investments.Remove(brand);
            _context.Products.RemoveRange(brand.Products);
            _context.Entry(brand).State = EntityState.Deleted;

            _context.SaveChanges();


            return RedirectToAction("Index");
        }
    }
}
