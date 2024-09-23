# Queuing System in JS

## Description

This project implements a queuing system in JavaScript, focusing on the use of Redis, Node.js, Express.js, and Kue. It covers various aspects of working with a Redis server, performing basic to advanced operations, and building a job queue system.

## Learning Objectives

By the end of this project, you should be able to:

- Run a Redis server on your machine
- Perform simple operations with the Redis client
- Use a Redis client with Node.js for basic operations
- Store hash values in Redis
- Deal with async operations with Redis
- Use Kue as a queue system
- Build a basic Express app interacting with a Redis server
- Build a basic Express app interacting with a Redis server and queue

## Requirements

- All code will be compiled/interpreted on Ubuntu 18.04, Node 12.x, and Redis 5.0.7
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension

## Installation

1. Install Node.js and npm
2. Install Redis
3. Clone this repository
4. Run `npm install` to install dependencies

## Tasks

0. Install a redis instance
1. Node Redis Client
2. Node Redis client and basic operations
3. Node Redis client and async operations
4. Node Redis client and advanced operations
5. Node Redis client publisher and subscriber
6. Create the Job creator
7. Create the Job processor
8. Track progress and errors with Kue: Create the Job creator
9. Track progress and errors with Kue: Create the Job processor
10. Writing the job creation function
11. Writing the test for job creation
12. In stock?

## Usage

Each task has its own file. To run a specific task, use:

```
npm run dev <filename>
```

For example:

```
npm run dev 0-redis_client.js
```

## Testing

To run tests:

```
npm test
```

## Author

Edwin Orioki Kenyansa

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
