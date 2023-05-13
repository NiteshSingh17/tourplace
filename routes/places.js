const { Place } = require('../schema/place.schema');
const { uploadMulter } = require('../storage/multerStorage');
var placesRoute = require('express').Router();



placesRoute.post('/', uploadMulter.single("cover"), async (req,res) => {
    const placesData = {
        slug: req.body.slug,
        status: req.body.status,
        cover: req.file?.path || null,
        type : req.body.type,
        code:  req.body.code,
        parent: req.body.parent,
        geo:  req.body.geo,
        view:  req.body.view,
        name:  req.body.name,
        desc:  req.body.desc,
        content:  req.body.content,
        metadata:  req.body.metadata,
        faq:  req.body.faq
    }
    try{
        const newPlace = new Place(placesData);
        await newPlace.save();
        res.send({data: newPlace});
    }catch(err){
        res.send({ error: 'failed to create resource' });
    }
})


placesRoute.get('/:id',async (req,res) => {
    const placeData = await Place.find({ _id: req.params.id });
    if(placeData){
      return res.send({ data : placeData });
    }
    else res.send({ data: 'place not found' });
})


placesRoute.patch('/', uploadMulter.single("cover"), async (req,res) => {
    const placesData = {
        slug: req.body.slug,
        status: req.body.status,
        cover: req.file?.path || null,
        type : req.body.type,
        code:  req.body.code,
        parent: req.body.parent,
        geo:  req.body.geo,
        view:  req.body.view,
        name:  req.body.name,
        desc:  req.body.desc,
        content:  req.body.content,
        metadata:  req.body.metadata,
        faq:  req.body.faq,
    }
    try{
        const newPlace = await Place.findOneAndUpdate({ _id: req.body.id },{ $set: placesData }, { upsert: false });
        res.send({data: newPlace });
    }catch(err){
        res.send({ error: 'failed to update resource' });
    }
})


placesRoute.delete('/:id',async (req,res) => {
    const placeData = await Place.deleteOne({ _id: req.params.id });
    if(placeData){
      return res.send({ data : 'Place Delted Success fully' });
    }
    else res.send({ data: 'place not found' });
})


module.exports = { placesRoute };