const axios = require('axios');
const TOKEN = require('./config.js');

const config = {
  headers: {
    'x-api-key': TOKEN
  }
};

const dogBreedAPI = (breed, callback) => {
  axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`, config)
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      callback(err);
    })
};

module.exports = dogBreedAPI;