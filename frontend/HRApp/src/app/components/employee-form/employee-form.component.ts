import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm!: FormGroup;
  employeeID?: number;
  isEditMode = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      jobTitle: ['', [Validators.required, Validators.maxLength(100)]],
      salary: [0, [Validators.required, Validators.min(0)]],
      hireDate: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.employeeID = +idParam;
        this.isEditMode = true;
        this.loadEmployee(this.employeeID);
      }
    });
  }

  loadEmployee(id: number) {
    this.employeeService.getById(id).subscribe({
      next: (employee) => {
        this.employeeForm.patchValue({
          fullName: employee.fullName,
          email: employee.email,
          jobTitle: employee.jobTitle,
          salary: employee.salary,
          hireDate: employee.hireDate.split('T')[0] // Set date input value (yyyy-MM-dd)
        });
      },
      error: () => {
        this.errorMessage = 'Failed to load employee data.';
      }
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      return;
    }

    const employee: Employee = {
      employeeID: this.employeeID || 0,
      fullName: this.employeeForm.value.fullName,
      email: this.employeeForm.value.email,
      jobTitle: this.employeeForm.value.jobTitle,
      salary: this.employeeForm.value.salary,
      hireDate: this.employeeForm.value.hireDate // Format: yyyy-MM-dd
    };

    if (this.isEditMode && this.employeeID) {
      this.employeeService.update(this.employeeID, employee).subscribe({
        next: () => {
          this.successMessage = 'Employee updated successfully.';
          setTimeout(() => this.router.navigate(['/employees']), 1500);
        },
        error: () => {
          this.errorMessage = 'Update failed.';
        }
      });
    } else {
      this.employeeService.create(employee).subscribe({
        next: () => {
          this.successMessage = 'Employee added successfully.';
          setTimeout(() => this.router.navigate(['/employees']), 1500);
        },
        error: () => {
          this.errorMessage = 'Add failed.';
        }
      });
    }
  }
}
