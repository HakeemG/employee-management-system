import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  loading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.loading = true;
    this.employeeService.getAll().subscribe({
      next: data => {
        this.employees = data;
        this.loading = false;
      },
      error: err => {
        this.errorMessage = 'Failed to load employees.';
        this.loading = false;
      }
    });
  }

  addEmployee() {
    this.router.navigate(['/employees/form']);
  }

  editEmployee(id: number) {
    this.router.navigate(['/employees/form', id]);
  }

  deleteEmployee(id: number) {
    if(confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.delete(id).subscribe({
        next: () => this.loadEmployees(),
        error: () => alert('Delete failed.')
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }

}
