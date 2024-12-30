const mongoose = require('mongoose')

const userModel = require('../models/user.model')

const getUsers = async () => {
    try{

        const referenceLocation = [76.9881380,8.4660529];

        const nearbyUsers = await userModel.find({
            location: {
                $near: {
                    $geometry: {type: 'Point', coordinates: referenceLocation},
                    $maxDistance: 5000, // Distance in meters
                },
            },
        });

        console.log("Nearby Users: ", nearbyUsers)




    }catch(err){
        console.log("Error: ", err);
    }
}

module.exports = getUsers;