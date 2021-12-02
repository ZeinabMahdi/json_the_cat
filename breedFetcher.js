const request = require('request');

// let breed = process.argv[2];

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(`We couldn't find any details on ${error}`);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        error = "We couldn't find that breed :/";
        callback(null, error);
      } else {
        callback(error, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };