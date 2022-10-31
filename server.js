/*
The first concept is that of routing.At the heart of Express is a router, which essentially 
takes a client request,
matches it against any routes that are present, and executes the handler function that is associated with that 
route.The handler function is expected to generate the appropriate response.
A route specification consists of an HTTP method(GET, POST, etc.), a path specification that matches 
the request URI, and the route handler.The handler is passed in a request object and a response object.The 
request object can be inspected to get the various details of the request, and the response object’s methods 
can be used to send the response to the client. All this may seem a little overwhelming, so let’s just start with 
a simple example and explore the details.
We already have an Express application in the which we created using the express() function. We also 
installed a middleware for handling static files.A middleware function deals with any request matching the 
path specification, regardless of the HTTP method.In contrast, a route can match a request with a specific 
http method
*/


// Import dependencies
const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const taskRoute = require("./routes/taskRoute")

// Initialize Express
const app = express();

// Routes
// app.get('/hello-world', (req, res, next) => {
//     res.send('Task Manager CRUD API');
// })

app.use('/api/tasks', taskRoute);


// Port configuration
const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Our Server is Up on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();

//Endpoints

// app.get('/api/tasks'); = get all tasks stored
// app.post ('/api/tasks'); = create a new task
// app.get('/api/tasks/:id'); = get a single task
// app.patch('/api/tasks/:id'); = update a task
// app.delete('/api/ttaks/:id'); = delete task




/*
Controller -
user.controller.js

routes -
authPage
loginPage
forgotPage

model -
is used to create database schemas

middleware
is a function that will have all access for reuesting objects and responding to objects

*/
