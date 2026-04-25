# Authenticate

In this project, I built a simple full-stack authentication system using React for the frontend and NestJS for the backend.

# Overview

I wanted to create a clean separation between frontend and backend while keeping the authentication flow simple and functional.

The frontend handles the user interface, while the backend manages authentication logic, validation, and token generation.

# Technologies Used

For this project, I used tools that are widely used in real-world development.

# Frontend

I built the frontend to be simple and responsive.

React
Bootstrap
Axios
React Router
# Backend

I used NestJS to handle all the server-side logic.

NestJS
TypeScript
JWT
REST API
Project Structure

I organized the project into two main parts to keep things clear.

frontend/ → React app
backend/ → NestJS API
Features

# In this project, I implemented the basic authentication features.

User registration
User login
JWT authentication
Form validation
Getting Started

# To run the project locally, I follow these steps:

Backend
cd backend
npm install
npm run start:dev
Frontend
cd frontend
npm install
npm start
Environment Variables

# For the backend, I created a .env file:

PORT=3000
JWT_SECRET=your_secret_key
API Endpoints
POST /auth/register
POST /auth/login
How It Works

The frontend sends user data to the backend, I validate it there, generate a JWT token, and send it back to the client.

# Future Improvements

I can improve this project by adding:

Refresh tokens
Email verification
Better UI
Author

I built this project to practice full-stack development and better understand authentication systems.
