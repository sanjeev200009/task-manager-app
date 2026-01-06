# Task Management Application

A simple full-stack task management application built for the Aerix Global (Pvt) Ltd. internship technical assessment.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Code Organization & Architecture](#code-organization--architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Assumptions & Simplifications](#assumptions--simplifications)
- [Key Implementation Highlights](#key-implementation-highlights)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This is a simple task management application that allows users to create, view, and manage tasks. The application consists of a React frontend built with Vite and an Express.js backend API. The focus is on demonstrating fundamental understanding of full-stack development, clean code organization, and basic CRUD operations.

## ✨ Features

- **Add New Tasks**: Create tasks with a title and description
- **View All Tasks**: Display a list of all created tasks
- **Mark as Complete**: Update task status from pending to completed
- **Clean UI**: Simple and intuitive user interface
- **RESTful API**: Well-structured backend API endpoints

## 🛠 Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Styling

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-Origin Resource Sharing middleware
- **In-Memory Storage** - Simple data persistence using JavaScript arrays

## 📁 Project Structure

```
task-management-app/
├── backend/
│   ├── server.js          # Main server file with Express setup
│   ├── routes/            # API route handlers
|   ├── controllers/       # folder which has our controller
|   ├── routes/            # folder to hold our route file
|   ├── data/              # folder to hold our database code file
│   ├── package.json       # Backend dependencies
│   └── .env              # Backend environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx       # Main App component
│   │   ├── App.css       # Application styles
│   │   └── main.jsx      # Entry point
│   ├── .env              # Frontend environment variables
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
│
└── README.md             # Project documentation
```

## 📦 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**
- **Git** (for cloning the repository)

To check if you have Node.js and npm installed:
```bash
node --version
npm --version
```

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd task-management-app
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```bash
touch .env
```

Add the following configuration to the `.env` file:
```env
PORT=5000
NODE_ENV=development
```

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:
```bash
touch .env
```

Add the following configuration to the `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

## ▶️ Running the Application

### Start the Backend Server

Open a terminal and navigate to the backend directory:
```bash
cd backend
npm start
```

The backend server will start on `http://localhost:5000`

**Alternative:** For development with auto-restart:
```bash
npm run dev
```

### Start the Frontend Development Server

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm run dev
```

The frontend application will start on `http://localhost:5173` (default Vite port)

### Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Health check endpoint | None |
| GET | `/api/tasks` | Retrieve all tasks | None |
| POST | `/api/tasks` | Create a new task | `{ "title": "string", "description": "string" }` |
| PATCH | `/api/tasks/:id/complete` | Mark task as completed | None |

### Example API Requests

**Health check:**
```bash
curl http://localhost:5000/
```

**Get all tasks:**
```bash
curl http://localhost:5000/api/tasks
```

**Create a new task:**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Complete assignment", "description": "Finish the React project"}'
```

**Mark task as completed:**
```bash
curl -X PATCH http://localhost:5000/api/tasks/1/complete \
  -H "Content-Type: application/json"
```

## 🌍 Environment Variables

### Backend (.env)
```env
PORT=5000                    # Port number for the backend server
NODE_ENV=development         # Environment mode
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api    # Backend API base URL
```

**Important:** The `VITE_` prefix is required for Vite to expose environment variables to the client-side code.

## 📝 Assumptions & Simplifications

As per the assessment requirements, the following simplifications were made:

1. **In-Memory Storage**: Tasks are stored in a JavaScript array in memory. Data will be lost when the server restarts. No database (MongoDB, PostgreSQL, etc.) was implemented as it was not required for this assessment.

2. **Simple UI**: The user interface is functional and clean but does not include advanced styling, animations, or responsive design features. The focus is on functionality and code clarity.

3. **Task Status**: Tasks have two states: "pending" (default) and "completed". No additional status options were implemented.

4. **No Authentication**: User authentication and authorization were not implemented as they were not part of the requirements.

5. **Basic Validation**: Basic input validation is implemented on both frontend and backend, but comprehensive validation and error handling were kept simple.

6. **No Task Deletion**: The ability to delete tasks was not implemented as it was not mentioned in the requirements.

7. **Auto-incrementing IDs**: Task IDs are generated using a simple counter increment method, which is sufficient for this in-memory implementation.

8. **CORS Configuration**: CORS is configured to allow all origins for development purposes. In production, this should be restricted to specific domains.



## 👨‍💻 Developer

**Sanjeev**  
Technical Assessment - Aerix Global (Pvt) Ltd.
