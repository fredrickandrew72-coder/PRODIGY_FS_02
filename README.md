# 👨‍💼 Employee Management System

A full-stack Employee Management System built using React, Node.js, Express.js, and MongoDB. The application enables administrators to securely manage employee records through Create, Read, Update, and Delete (CRUD) operations while implementing authentication and validation mechanisms.

Developed as part of the **Prodigy InfoTech Full Stack Web Development Internship – Task 02**.

---

## 🚀 Features

### 🔐 Authentication & Security
- User Registration
- User Login
- JWT-Based Authentication
- Protected Routes
- Secure Password Hashing with bcrypt

### 👥 Employee Management
- Add New Employees
- View Employee Records
- Update Employee Information
- Delete Employee Records
- Real-Time Database Updates

### ✅ Validation
- Required Field Validation
- Backend Request Validation
- Error Handling & User Feedback

---

## 🛠️ Tech Stack

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
- JWT Authentication
- bcryptjs

### Database
- MongoDB Atlas

---

## 📂 Project Structure

```text
PRODIGY_FS_02
│
├── client
│   ├── public
│   └── src
│       ├── assets
│       ├── pages
│       │   ├── AddEmployee.jsx
│       │   ├── Dashboard.jsx
│       │   ├── EditEmployee.jsx
│       │   ├── EmployeeList.jsx
│       │   ├── Login.jsx
│       │   ├── Profile.jsx
│       │   └── Register.jsx
│       ├── App.jsx
│       └── main.jsx
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   └── server.js
│
└── README.md
```

---

## 🌐 REST API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Employees

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | `/api/employees` | Create employee |
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/fredrickandrew72-coder/PRODIGY_FS_02.git
cd PRODIGY_FS_02
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run the backend server:

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📸 Application Workflow

### Employee Operations

✔ Add Employee

✔ View Employee List

✔ Update Employee Details

✔ Delete Employee

### Authentication

✔ Register User

✔ Login User

✔ Protected Routes

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building Full-Stack Applications
- React Component Architecture
- React Router Navigation
- RESTful API Development
- MongoDB CRUD Operations
- JWT Authentication
- Backend Middleware
- Database Integration
- Client-Server Communication
- Error Handling & Validation

---

## 📋 Internship Task

**Task-02: Employee Management System**

Develop a web application that allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records while ensuring authentication and validation mechanisms are implemented to protect sensitive employee information.

---

## 👨‍💻 Author

**Fredrick Andrew**

Full Stack Web Development Intern

Prodigy InfoTech

---

## ⭐ Repository

If you found this project useful, consider giving it a star on GitHub.
