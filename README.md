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
2. Install dependencies using `npm install`.
3. Start Docker using `docker-compose up`.
4. Launch the local server using `npm run start:dev`.
