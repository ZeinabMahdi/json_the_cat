// const request = require('request');

// let breed = process.argv[2];


// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) =>  {
//   const data = JSON.parse(body);
//   console.log(data);
//   console.log(typeof data);
// });

const request = require('request');

const { fetchBreedDescription } = require('./breedFetcher');


let breeds = process.argv.slice(2);
const breed = breeds[0];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});