# Events API

## About

This API is designed for user registration and authentication, allowing users to create, update, delete, and view their events.

## Features

- User authentication and registration using JWT strategy and local strategy, with user-specific data retrieval.
- Full CRUD operations on events managed by users (creation, deletion, modification, and retrieval).
- Get information about event participants through separate functionality, both for all participants and for specific ones.

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start Docker using `docker-compose up`.
4. Launch the local server using `npm run start:dev`.

## Technologies

- Nest.js
- TypeORM
- MySQL
- GraphQL
- Apollo
- JWT
- Jest
- Docker
