const mongoose = require('mongoose')
const defaultPlaces = new mongoose.Schema({
    "country": String,
    "name": String,
    "lat": String,
    "lng": String
});

const DefaultPlace = mongoose.model('defaultPlace', defaultPlaces);

module.exports = { DefaultPlace };