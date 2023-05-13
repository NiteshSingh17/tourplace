const axios = require('axios');

const MakeRequest = async ({url, method = 'post', data, cb}) => {
    const response = await axios({
        method: method,
        url: url,
        data: data
      });
      
    const json = await response.json()
    cb(json.url);
}

module.exports = { MakeRequest };