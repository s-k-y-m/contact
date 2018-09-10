const mongoose = require('mongoose');
var fakeData = require('./fakeData/fakeRestaurants.js');

mongoose.connect('mongodb://127.0.0.1:27017/zagat');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var RestaurantSchema = new Schema({
  id: ObjectId,
  name: String,
  address: String,
  phoneNumber: String,
  websiteURL: String,
  getDirectionsURL: String,
  streetViewLink: String,
  openNow: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  },
  reviews: []
});

// Create Model
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

var fakeRestaurants = fakeData.restaurants;

// Insert everything to data
Restaurant.insertMany(fakeRestaurants);

module.exports.Restaurant = Restaurant;
