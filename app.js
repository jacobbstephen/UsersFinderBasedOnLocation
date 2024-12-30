const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const connectToDB = require('./config/db');
connectToDB();

const addUsers = require('./location/addUsers');

// addUsers('Reshma', 8.472365, 76.980104);
// addUsers('Jacob', 8.4728505, 76.9804056);
// addUsers('Alen', 8.4660529, 76.9881380);
// addUsers('Kannuz',8.402326935034985, 77.08651524869462)

const getUsers = require('./location/getUsers');
getUsers();

app.listen(3000, () => {
    console.log('Server running on Port 3000');
})