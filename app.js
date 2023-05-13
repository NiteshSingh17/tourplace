const express = require('express')
const app = express()
const port = 3000;
const mongodb = require('./database/mongodb');
const { placesRoute } = require('./routes/places');
var bodyParser = require('body-parser');
const { tourRoute } = require('./routes/tour');
const { importCities } = require('./uploadToDatabase/importPlaces');

mongodb.connectDatabase();

//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/place', placesRoute)
app.use('/tour', tourRoute)
app.get('/import/cities', importCities);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
