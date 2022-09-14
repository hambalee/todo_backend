// const express = require("express");
const mongoose = require("mongoose");
// const config = require("./config.js");
const app = require('./api/index')
// require("dotenv").config();

// const app = express();
// const PORT = 8080
// const cors = require('cors')
// const todoRouter = require('./src/api/todo/todo.route.js')

//Middleware
// app.use(cors())
// app.use(express.urlencoded());  
// app.use(express.json()); 

// app.use('/api/todo', todoRouter)




const connect = async () => {
  try {
    await mongoose.connect(config.mongo);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

connect();
