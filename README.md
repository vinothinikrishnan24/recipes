Recipes App
A Node.js, Express.js, and Mongoose-based CRUD application for managing recipes, following the MVC pattern. The app provides APIs to create, read, update, and delete recipes, with MongoDB as the database and comprehensive API documentation in Postman.
Table of Contents

Features
Technologies
Setup and Installation
API Endpoints
Postman Documentation
Sample Requests and Responses
Error Handling
License

Features

Create, read, update, and delete recipes (CRUD operations).
MVC architecture with separate folders for models, views, and controllers.
MongoDB integration using Mongoose for data persistence.
Input validation and comprehensive error handling.
API documentation with sample requests and responses via Postman.
Hosted API: https://recipes-g3gy.onrender.com/api/recipes

Technologies

Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for building RESTful APIs.
Mongoose: ODM for MongoDB to manage database operations.
MongoDB: NoSQL database for storing recipe data.
Postman: API documentation and testing.
dotenv: Environment variable management.

Setup and Installation

Clone the Repository:
git clone https://github.com/your-username/recipes-app.git
cd recipes-app


Install Dependencies:
npm install


Set Up Environment Variables:Create a .env file in the root directory with the following:
MONGODB_URI=your_mongodb_connection_string
PORT=5000


Run the Application:
npm start

The app will run on http://localhost:5000 (or the specified PORT).

Access the API:

Local: http://localhost:5000/api/recipes
Hosted: https://recipes-g3gy.onrender.com/api/recipes



API Endpoints
All endpoints are prefixed with /api/recipes.



Method
Endpoint
Description



POST
/
Create a new recipe


GET
/
Retrieve all recipes


GET
/:recipes
Retrieve a recipe by recipes


PUT
/:recipes
Update a recipe by recipes


DELETE
/:recipes
Delete a recipe by recipes


Postman Documentation
The API is fully documented in Postman, including sample requests and responses for each endpoint. Access the documentation here:Postman Documentation Link(Replace with the actual Postman documentation link after publishing the collection.)
How to Use Postman

Import the Postman collection from the provided link or JSON file in the docs folder.
Set the base URL to https://recipes-g3gy.onrender.com/api/recipes or http://localhost:5000/api/recipes for local testing.
Use the sample requests to test each endpoint.

Sample Requests and Responses
1. Create a Recipe (POST /api/recipes)
Request:
{
  "title": "Chocolate Cake",
  "ingredients": ["flour", "sugar", "cocoa powder", "eggs"],
  "instructions": "Mix ingredients, bake at 350°F for 30 minutes.",
  "cookingTime": 45
}

Response (201 Created):
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Chocolate Cake",
  "ingredients": ["flour", "sugar", "cocoa powder", "eggs"],
  "instructions": "Mix ingredients, bake at 350°F for 30 minutes.",
  "cookingTime": 45,
  "createdAt": "2025-07-07T20:35:00.000Z",
  "__v": 0
}

2. Get All Recipes (GET /api/recipes)
Response (200 OK):
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Chocolate Cake",
    "ingredients": ["flour", "sugar", "cocoa powder", "eggs"],
    "instructions": "Mix ingredients, bake at 350°F for 30 minutes.",
    "cookingTime": 45,
    "createdAt": "2025-07-07T20:35:00.000Z",
    "__v": 0
  }
]

3. Get Recipe by ID (GET /api/recipes/:id)
Request: GET /api/recipes/507f1f77bcf86cd799439011Response (200 OK):
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Chocolate Cake",
  "ingredients": ["flour", "sugar", "cocoa powder", "eggs"],
  "instructions": "Mix ingredients, bake at 350°F for 30 minutes.",
  "cookingTime": 45,
  "createdAt": "2025-07-07T20:35:00.000Z",
  "__v": 0
}

4. Update Recipe (PUT /api/recipes/:id)
Request: PUT /api/recipes/507f1f77bcf86cd799439011
{
  "title": "Chocolate Fudge Cake",
  "cookingTime": 50
}

Response (200 OK):
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Chocolate Fudge Cake",
  "ingredients": ["flour", "sugar", "cocoa powder", "eggs"],
  "instructions": "Mix ingredients, bake at 350°F for 30 minutes.",
  "cookingTime": 50,
  "createdAt": "2025-07-07T20:35:00.000Z",
  "__v": 0
}

5. Delete Recipe (DELETE /api/recipes/:id)
Request: DELETE /api/recipes/507f1f77bcf86cd799439011Response (200 OK):
{
  "message": "Recipe deleted successfully"
}

Error Handling

400 Bad Request: Invalid input (e.g., missing required fields like title or ingredients).{
  "error": "Title and ingredients are required"
}


404 Not Found: Recipe not found for GET, PUT, or DELETE by ID.{
  "error": "Recipe not found"
}


500 Internal Server Error: Database or server issues.{
  "error": "Internal server error"
}



License
This project is licensed under the MIT License. See the LICENSE file for details.
