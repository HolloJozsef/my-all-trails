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


This project uses a PostgreSQL database and TypeORM to manage the database schema.

2.  Configure Environment Variables

    Before running the application, you need to create a `.env` file in the project root to store your database connection details. You can copy the `.env.example` if it exists, or create a new one.

    ```env
    # .env file
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=your_password
    DB_NAME=myappdb
    ```

3.  Run Database Migrations

    Once your `.env` file is configured, run the following command to apply all pending migrations and bring your database schema up to date. This must be done before starting the application for the first time.

    ```bash
    # Run all pending migrations
    $ npm run migration:run
    ```

### Working With Migrations

When you make changes to a database entity (e.g., add a column), you will need to generate a new migration.

```bash
# Generate a new migration file
# Replace 'YourMigrationName' with a descriptive name for your change
$ npm run migration:generate -- src/migration/YourMigrationName
```


4. Start the Docker containers:
   ```bash
   docker-compose up --build

5. Seed the database: Open a new terminal window and access the backend container:
   ```bash
   docker-compose exec backend sh
   npm run seed
   ```

6. Start the server
   ```bash
   cd server
   npm run start:dev
   ```

7. Start the client
   ```bash
   cd client
   npm start
   ```

8. Access the application:
   Frontend: Open http://localhost:3000 in your browser.
   Swagger: http://localhost:8080/api/docs.
   Docker Posgres: http://localhost:5050/

9. Stopping the Containers:
   ```bash
   docker-compose down


