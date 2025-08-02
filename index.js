// const express = require('express')  // old way 
import express from 'express'
const app = express()
// const mongoose = require('mongoose')  //we can use mongoose to use ExpressJS with MongoDB as a database 

// import the mongoose file from another folder name contacts_models

import ContactRoutes from "./Routes/Contact.Routes.js"

// Database connection is made 
import { connectDB } from "./config/Database.js"

connectDB()
const PORT = process.env.PORT
// Middleware
app.set('view engine', 'ejs') //this says we r using EJS template
app.use(express.urlencoded({ extended: false }))  //it can accept form data as a request
app.use(express.static('public')) // it can accept static files like CSS file 

// Routes
app.use("/", ContactRoutes);  // we can add 1st parameter also 

// ExpressJS connection Established 
app.listen(PORT, () => {
    console.log(`Server started successfully on port Number ${PORT}.`)
})


