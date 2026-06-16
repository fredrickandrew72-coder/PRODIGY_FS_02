# Employee Management System

A full-stack Employee Management System developed as part of the Prodigy InfoTech Full Stack Web Development Internship.

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Employee Management
- Add Employee
- View Employee List
- Edit Employee Details
- Delete Employee Records

### Validation & Security
- Input Validation
- Authentication Middleware
- Protected API Endpoints
- Secure MongoDB Integration

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Project Structure

PRODIGY_FS_02
│
├── client/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── AddEmployee.jsx
│ │ │ ├── EditEmployee.jsx
│ │ │ ├── EmployeeList.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── Profile.jsx
│ │
│ └── App.jsx
│
├── server/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js
│
└── README.md


## API Endpoints

### Employee Routes

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /api/employees | Create Employee |
| GET | /api/employees | Get All Employees |
| GET | /api/employees/:id | Get Employee By ID |
| PUT | /api/employees/:id | Update Employee |
| DELETE | /api/employees/:id | Delete Employee |

### Authentication Routes

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

## Installation

### Clone Repository

```bash
git clone https://github.com/fredrickandrew72-coder/PRODIGY_FS_02.git
