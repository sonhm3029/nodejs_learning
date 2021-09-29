//import mongoose
const mongoose = require('mongoose');

async function connect() {
    
    try {
        await mongoose.connect('mongodb://localhost:27017/demo_database');
        console.log("Connected");        
    } catch (error) {
        console.log("Connection Failed !!!");
    }

}

module.exports = { connect }
