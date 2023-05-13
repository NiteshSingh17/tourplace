var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const TourSchema = new mongoose.Schema({
    slug: String,
    place: [{ type: Schema.Types.ObjectId, ref: 'place' }],
    price: Number, 
    images: [String],
    languages: [{ type: String, enum: ['english', 'vietnamese'] }],
    cover_image: String,
    duration: Number,
    sku: String,
    name: String,
    content: String,
    description: String,
    metadata : [{ title: String , description : String}],
    itinerary: [{ title : String, content: String }] 
});

const Tour = mongoose.model('tour', TourSchema);

module.exports = { Tour };