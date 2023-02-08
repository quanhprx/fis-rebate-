using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Product
    {

        [Key]
        public int product_id { get; set; }
        [ForeignKey("Brand")]
        public int brand_id { get; set; }
        public virtual Brand Brand { get; private set; }
        [Required/*(ErrorMessage = "Nhập thiếu kìa fen.")*/]
        public string productname { get; set; }
        [Required/*(ErrorMessage = "Nhập thiếu kìa fen.")*/]
        public string condition { get; set; }
        [Required/*(ErrorMessage = "Nhập thiếu kìa fen.")*/]
        [Column(TypeName = "numeric")]
        [Range(0.00,9999.99)]
        public  decimal rebate { get; set; } 
        public string note { get; set; } 
        //[NotMapped]
        //public bool IsDeleted { get; set; } = false;
    }
}