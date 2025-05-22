# My All Trails

This repository aims to replicate the well known All Trails application

## Features

- **Explore Trails**: Browse a comprehensive database of trails, complete with maps, distances, and difficulty ratings.
- **User Reviews and Ratings**: Read and contribute reviews to help fellow hikers find the best trails.
- **GPS Tracking**: Track your hikes in real-time and navigate easily with integrated maps.
- **Search and Filter**: Easily find trails based on criteria such as location, length, and user ratings.

## Tech Stack

- **Frontend**: React, React Query, TypeScript, Axios, Zustand, Tailwind
- **Backend**: Nest.js, TypeScript, PostgreSQL, Jest

## Getting Started

To get started with TrailExplorer, clone the repository, install the dependencies, and run the application locally. Detailed instructions can be found in the [Installation](#installation) section below.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HolloJozsef/my-all-trails.git

2. Start the Docker containers:
   ```bash
   docker-compose up --build

3. Seed the database: Open a new terminal window and access the backend container:
   ```bash
   docker-compose exec backend sh
   npm run seed
   ```

4. Start the server
   ```bash
   cd server
   npm run start:dev
   ```

5. Start the client
   ```bash
   cd client
   npm start
   ```

6. Access the application:
   Frontend: Open http://localhost:3000 in your browser.
   Swagger: http://localhost:8080/api/docs.
   Docker Posgres: http://localhost:5050/

7. Stopping the Containers:
   ```bash
   docker-compose down


