# 🧑‍💼 Employee Management System

A full-stack web application for managing employee records, built with **Angular 13**, **.NET Core Web API**, and **SQL Server 2022**. This app enables creating, viewing, updating, and deleting employee information in an intuitive interface.

---

## 🧰 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | Angular 13 (TypeScript)  |
| Backend     | .NET Core Web API (C#)   |
| Database    | SQL Server 2022 (T-SQL)  |

---

## ⚙️ Prerequisites (macOS)

Please make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Angular CLI](https://angular.io/cli) (13)
- [.NET 6 SDK or later](https://dotnet.microsoft.com/en-us/download)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Azure Data Studio](https://learn.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio) (for managing SQL Server on macOS)

Install Angular CLI globally:

```bash
npm install -g @angular/cli@13.3.11
```

---

## 🐳 Setting Up SQL Server on macOS Using Docker

Run the following command in your terminal:

```bash
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=YourStrong!Pass123' \
   -p 1433:1433 --name sqlserver \
   -d mcr.microsoft.com/mssql/server:2022-latest
```

> Replace `YourStrong!Pass123` with a password of your choice that meets SQL Server’s complexity requirements.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HakeemG/employee-management-system.git
cd employee-management-system
```

---

### 2. Set Up the Database

1. Open **Azure Data Studio** and connect to your Docker SQL Server:
   - **Server name**: `localhost`
   - **Port**: `1433`
   - **Username**: `sa`
   - **Password**: `YourStrong!Pass123`

2. Run the SQL scripts from the `/database` folder:
   - `init.sql` – to steup your database
---

### 3. Run the Backend (.NET Core API)

```bash
cd backend/MyEMSApi
dotnet restore
dotnet build
dotnet run
```

- API runs on: `http://localhost:5210` or might run on another localhost port
- Make sure to update `appsettings.json` with your correct SQL connection string if needed, as follows:
```json
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=HRDB;User Id=sa;Password=YourStrong!Pass123;TrustServerCertificate=True;"
  },
```

---

### 4. Run the Frontend (Angular App)

```bash
cd ../frontend/HRApp
npm install
ng serve
```

- App runs on: `http://localhost:4200`

> Make sure the frontend is configured to communicate with the backend API via the correct URL in `environment.ts`.
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5210/api'
};
```
---

## 📂 Project Structure

```
employee-management-system/
├── frontend/MyEMSApi     # Angular 13 project
├── backend/HRApp     # .NET Core Web API
└── database/     # SQL scripts (init)
```

---

## ✅ Features

- View all employees
- Add a new employee
- Edit existing employee
- Delete employee

---

## 💡 Tips

- Use **Postman** or **curl** to test backend API endpoints.
- Frontend and backend must be running simultaneously for full functionality.
- For persistent Docker SQL data, consider adding a volume.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Questions?

Feel free to open an issue or reach out via pull request.
