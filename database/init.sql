-- Create the database
CREATE DATABASE HRDB;
GO

USE HRDB;
GO

-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    JobTitle NVARCHAR(100) NOT NULL,
    Salary DECIMAL(10,2) NOT NULL,
    HireDate DATE NOT NULL
);
GO

-- Insert sample data
INSERT INTO Employees (FullName, Email, JobTitle, Salary, HireDate)
VALUES 
('John Doe', 'john.doe@example.com', 'Software Engineer', 70000, '2021-06-01'),
('Jane Smith', 'jane.smith@example.com', 'Project Manager', 85000, '2020-01-15'),
('Ali Hassan', 'ali.hassan@example.com', 'HR Specialist', 60000, '2019-11-20');
GO
