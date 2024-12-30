const mongoose = require('mongoose')

const userModel = require('../models/user.model.js');

const addUsers = async (name, latitude, longitude) => {
    try{

        const newUser = new userModel({
            name,
            location: {
                type: 'Point',
                coordinates: [longitude, latitude],
            },
        });

        await newUser.save();

        console.log('User added Successfully')

    }catch(err){
        console.log("Error adding User: ", err);
    }
}

module.exports = addUsers;