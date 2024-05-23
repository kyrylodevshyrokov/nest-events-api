# Events API

## About

This API is designed for user registration and authentication, allowing users to create, update, delete, and view their events.

## Features

- User authentication and registration using JWT strategy and local strategy, with user-specific data retrieval.
- Full CRUD operations on events managed by users (creation, deletion, modification, and retrieval).
- Get information about event participants through separate functionality, both for all participants and for specific ones.

## Technologies

- **Nest.js:** a framework for building efficient, scalable Node.js web applications.
- **TypeORM:** an Object-Relational Mapping (ORM) library for TypeScript and JavaScript that simplifies database interaction by allowing to work with relational databases using object-oriented paradigms.
- **MySQL:** a popular open-source relational database management system.
- **GraphQL:** an open-source data query and manipulation language for APIs and a query runtime engine.
- **Apollo:** a comprehensive platform that provides tools and services for building, deploying, and scaling GraphQL APIs and client-side applications, facilitating efficient data management and real-time updates.
- **Jest:** a popular JavaScript testing framework, designed to make testing easy, fast, and enjoyable by providing a simple and intuitive API for writing unit tests, as well as built-in support for features like mocking, snapshot testing, and code coverage analysis.
- **Docker:** a platform that enables developers to package applications and their dependencies into lightweight containers, providing consistency and portability across different environments.

## Getting Started

1. Clone the repository to your local machine.
   
2. Install dependencies using
```bash
npm install
```
   
3. Host MySQL for local development using Docker:
```bash
docker-compose up
```

4. Fill `dev.env` file. Here is an example:
```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=example
DB_NAME=nest-events
DB_DROP_SCHEMA=0
APP_PORT=3000
AUTH_SECRET=secret
JWT_EXPIRATION_TIME=60m
```
   
5. Launch the local server using
```bash
npm run start:dev
```

## Test the App

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## API Endpoints
Here are the routes that can be used for routing in the app.

### _Auth And Users_

### Register

- Method: **POST**
- URL: {{URL}}/users
- Data:
```bash
{
    "username": "Jonny",
    "password": "password",
    "retypedPassword": "password",
    "firstName": "Jonny",
    "lastName": "Doe",
    "email": "john@gmail.com"
}
```
- Requires Auth: **NO**
- Description: This endpoint enables users to register by sending a POST request containing their chosen username, password, first name, last name, and email.

### Authenticate

- Method: **POST**
- URL: {{URL}}/auth/login
- Data:
```bash
{
    "username": "Jonny",
    "password": "password"
}
```
- Requires Auth: **NO**
- Description: This endpoint enables users authenticate by sending a POST request with their username and password; upon successful authentication, the server returns a JSON object containing an access token.

### Get Current User Profile

- Method: **GET**
- URL: {{URL}}/auth/profile
- Requires Auth: **YES**
- Description: This endpoint retrieves the profile information of the currently authenticated user. 

### _Events_

### Create Event

- Method: **POST**
- URL: {{URL}}/events
- Data:
```bash
{
    "name": "Interesting Party",
    "description": "That is a crazy event, must go there!",
    "address": "Local St 101",
    "when": "2023-08-16 21:00:00"
}
```
- Requires Auth: **YES**
- Description: This endpoint allows authenticated users to create a new event with filled following fields: name, description, address, and when.

### Get All Events

- Method: **GET**
- URL: {{URL}}/events
- Requires Auth: **NO**
- Description: This endpoint allows for both authenticated and unauthenticated users to retrieve all events.

### Get Single Event

- Method: **GET**
- URL: {{URL}}/events/:id
- Requires Auth: **NO**
- Description: This endpoint allows users to retrieve information about a specific event with ID.

### Delete Event

- Method: **DELETE**
- URL: {{URL}}/events/:id
- Requires Auth: **YES**
- Description: This endpoint allows authenticated users to delete an event with ID.

### Get Events Organized By User

- Method: **GET**
- URL: {{URL}}/events-organized-by-user/:id
- Requires Auth: **NO**
- Description: This endpoint allows users to retrieve a list of events organized by the user with ID.

### _Event Attendance_

### Get Event Attendees

### Attend Event

### Get Specific Event Attendance By Current User

### Get All Events Attendance By Current User
