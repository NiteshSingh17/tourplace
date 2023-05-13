const mongoose = require('mongoose')
const Placeschema = new mongoose.Schema({
    slug: String,
    status: Boolean,
    cover: String,
    type : {type: String, enum:['region', 'country', 'city', 'provide', 'province', 'district']},
    code: String,
    parent: String,
    geo: { X: String, Y: String },
    view: Number,
    name: String,
    desc: String,
    content: String,
    metadata: { "title" : String, "descriptions": String },
    faq: []
});

const Place = mongoose.model('place', Placeschema);

module.exports = { Place };