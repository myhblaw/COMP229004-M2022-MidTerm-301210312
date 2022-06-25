/*
    car.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Web App: Used Car Store
    Date: June 24, 2022
*/

// Import
let mongoose = require('mongoose');

// Create a model class for car
let carModel = mongoose.Schema(
    {
        make: String,
        model: String,
        year: Number,
        kilometers: Number,
        doors: Number,
        seats: Number,
        color: String,
        price: Number        
    },
    {
        collection: "cars"
    }
);

module.exports = mongoose.model("Car", carModel);