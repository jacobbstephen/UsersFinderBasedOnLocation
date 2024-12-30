const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
    location:{
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },

        coordinates: {
            type: [Number],
            required: true
        },
    }
})



// Create a geospatial index on location field

userSchema.index({ location: '2dsphere' });

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;



/* HOW DATA IS GOING TO BE STORED
    {
  "name": "User1",
  "location": {
    "type": "Point",
    "coordinates": [77.5946, 12.9716]
  }
}
*/