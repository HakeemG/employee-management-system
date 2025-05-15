using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyEMSApi.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }

        [Required]
        [StringLength(100)]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }

        [StringLength(100)]
        public string JobTitle { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        [Range(0, double.MaxValue)]
        public decimal Salary { get; set; }

        public DateTime HireDate { get; set; }
    }
}
