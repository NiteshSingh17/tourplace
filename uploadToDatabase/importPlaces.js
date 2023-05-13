const { MakeRequest } = require("../utils/makeRequest")
const { DefaultPlace } = require('../schema/defaultPlaces.schema')
const API_URL = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'

const importCities = async (req,res) => {
   const data = await MakeRequest({url: API_URL});
   const uploadData = await DefaultPlace.insertMany(data);
   res.send({ data: "data uploade successfully" });
}

module.exports = { importCities };