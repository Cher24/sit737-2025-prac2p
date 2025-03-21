Calculator Microservice
--------------------------------

Project Description : 

This project implements a simple Calculator Microservice using Node.js and Express.js. It provides basic arithmetic operations via a REST API. The microservice supports the following operations:

- Addition (/add)
- Subtraction (/subtract)
- Multiplication (/multiply)
- Division (/divide)

----------------------------------

Installation Steps:

1. Prerequisites

Ensure you have the following installed:
- Node.js: Download Here
- Git: Download Here
- Postman (Optional for API testing): Download Here

2. Clone the Repository

Open a terminal and run:
 " git clone https://github.com/your-username/sit737-2025-prac2p.git
 cd sit737-2025-prac2p "

3. Install Dependencies
 " npm install "

This installs Express and Winston for logging.
----------------------------------

How to Run the Service :

Start the Server

Run the following command:
  " node server.js "

You should see:
  " Calculator Microservice is running on port 3050 "
----------------------------------

API Endpoints :

The microservice supports the following endpoints. You can test them in a browser or Postman.
------------
1. Addition
Request:

GET http://localhost:3050/add?n1=10&n2=5

Response:

{
  "status": 200,
  "result": 15
}
------------
2. Subtraction

Request:

GET http://localhost:3050/subtract?n1=10&n2=5

Response:

{
  "status": 200,
  "result": 5
}
------------
3. Multiplication

Request:

GET http://localhost:3050/multiply?n1=10&n2=5

Response:

{
  "status": 200,
  "result": 50
}
------------
4. Division

Request:

GET http://localhost:3050/divide?n1=10&n2=5

Response:

{
  "status": 200,
  "result": 2
}
----------------------------------

How to Push the Code to GitHub :

1. Initialize Git Repository

 git init

2. Add and Commit Files

 git add .
 git commit -m "Initial commit for calculator microservice"

3. Create and Push to GitHub

 git remote add origin https://github.com/your-username/sit737-2025-prac2p.git
 git branch -M main
 git push -u origin main
----------------------------------

Submission Instructions

Push the code to GitHub and submit the GitHub repository link via OnTrack.

Ensure the repository contains:

- server.js file (microservice implementation)
- package.json (dependencies)
- README.md (this documentation)
- .gitignore (optional to exclude unnecessary files like node_modules)
----------------------------------

Author

Cher Supakovit : SIT323/SIT737 - Cloud Native Application Development

