using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Brand
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nhập Hãng!")]
        public string brandname { get; set; } 
        [Required(ErrorMessage = "Nhập Tên chương trình!")]
        public string program { get; set; } 
        [Required(ErrorMessage = "Nhập thiếu kìa fen.")]
        public string currency { get; set; } 
        public string note { get; set; } 
        [Required(ErrorMessage = "Nhập thiếu kìa fen.")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime timestart { get; set; }
        [Required(ErrorMessage = "Nhập thiếu kìa fen.")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime timeend { get; set; }

        public List<Product> Products { get; set; } = new List<Product>();
    }
}