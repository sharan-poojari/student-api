# Student Management System — Backend API

# 

# A secure and scalable RESTful backend API for a Student Management System, built with Node.js, Express.js, MongoDB, and Mongoose.

# 

# The API provides user authentication, JWT-based authorization, role-based access control, and complete student management functionality.

# 

# 🚀 Live API

# 

# Backend API:

# https://student-api-9haq.onrender.com

# 

# ✨ Features

# 

# Authentication \& Authorization

# 

# User signup and login

# 

# Password hashing using bcrypt

# 

# JWT-based authentication

# 

# Protected API routes

# 

# Role-based authorization

# 

# Admin and User roles

# 

# Current-user profile endpoint

# 

# Admin-only user management

# 

# Admin-only role updates

# 

# Student Management

# 

# Create students

# 

# Get all students

# 

# Get a student by ID

# 

# Update student details

# 

# Delete students

# 

# User-specific student management

# 

# Protected student routes

# 

# Security

# 

# Passwords are never returned in user-management responses

# 

# JWT token verification middleware

# 

# Admin authorization middleware

# 

# Environment variables for sensitive configuration

# 

# CORS configuration for frontend access

# 

# 🛠️ Tech Stack

# 

# Node.js — JavaScript runtime

# 

# Express.js — REST API framework

# 

# MongoDB — NoSQL database

# 

# Mongoose — MongoDB ODM

# 

# JWT — Authentication and authorization

# 

# bcrypt — Password hashing

# 

# dotenv — Environment variable management

# 

# CORS — Cross-origin request handling

# 

# 🏗️ Architecture

# 

# The backend follows an MVC-style architecture:

# 

# student-api/

# │

# ├── controllers/

# │   ├── authController.js

# │   └── studentController.js

# │

# ├── middleware/

# │   ├── authMiddleware.js

# │   └── adminMiddleware.js

# │

# ├── models/

# │   ├── User.js

# │   └── Student.js

# │

# ├── routes/

# │   ├── authRoutes.js

# │   └── studentRoutes.js

# │

# ├── .env.example

# ├── .gitignore

# ├── package.json

# ├── server.js

# └── README.md

# 

# 🔐 Authentication Flow

# 

# User Signup

# &#x20;    ↓

# Password hashed with bcrypt

# &#x20;    ↓

# User stored in MongoDB

# &#x20;    ↓

# User Login

# &#x20;    ↓

# JWT token generated

# &#x20;    ↓

# Token sent with protected requests

# &#x20;    ↓

# Authentication Middleware

# &#x20;    ↓

# Role checked when required

# &#x20;    ↓

# Protected API access

# 

# 📡 API Endpoints

# 

# Authentication

# 

# Method

# 

# Endpoint

# 

# Access

# 

# Description

# 

# POST

# 

# /api/auth/signup

# 

# Public

# 

# Create a new user

# 

# POST

# 

# /api/auth/login

# 

# Public

# 

# Login and receive JWT

# 

# GET

# 

# /api/auth/me

# 

# Authenticated

# 

# Get current user

# 

# GET

# 

# /api/auth/users

# 

# Admin

# 

# Get all users

# 

# PUT

# 

# /api/auth/users/:id/role

# 

# Admin

# 

# Update user role

# 

# Students

# 

# Method

# 

# Endpoint

# 

# Access

# 

# Description

# 

# GET

# 

# /api/students

# 

# Authenticated

# 

# Get user's students

# 

# GET

# 

# /api/students/:id

# 

# Authenticated

# 

# Get student by ID

# 

# POST

# 

# /api/students

# 

# Authenticated

# 

# Create a student

# 

# PUT

# 

# /api/students/:id

# 

# Authenticated

# 

# Update a student

# 

# DELETE

# 

# /api/students/:id

# 

# Admin

# 

# Delete a student

# 

# ⚙️ Local Installation

# 

# 1\. Clone the repository

# 

# git clone https://github.com/sharan-poojari/student-api.git

# cd student-api

# 

# 2\. Install dependencies

# 

# npm install

# 

# 3\. Configure environment variables

# 

# Create a .env file in the project root:

# 

# MONGODB\_URI=your\_mongodb\_connection\_string

# JWT\_SECRET=your\_jwt\_secret

# CLIENT\_URL=http://localhost:5173

# 

# Never commit your .env file or expose your database credentials and JWT secret.

# 

# 4\. Start the server

# 

# node server.js

# 

# The API will run locally at:

# 

# http://localhost:3000

# 

# 🧪 API Testing

# 

# The API can be tested using Postman.

# 

# Recommended testing flow:

# 

# Signup

# &#x20; ↓

# Login

# &#x20; ↓

# Copy JWT token

# &#x20; ↓

# Use Bearer Token

# &#x20; ↓

# Test Student CRUD

# &#x20; ↓

# Test Admin-only operations

# 

# 🌐 Deployment

# 

# The backend is deployed using Render and the database is hosted on MongoDB Atlas.

# 

# Live Backend:

# https://student-api-9haq.onrender.com

# 

# 🔗 Frontend

# 

# The React frontend is deployed separately on Vercel.

# 

# Live Application:

# https://student-frontend-liard.vercel.app/

# 

# 👨‍💻 Author

# 

# Sharan Poojari

# 

# BSc.IT Graduate | Junior Full-Stack / MERN Developer

# 

# GitHub

# 

# https://github.com/sharan-poojari

