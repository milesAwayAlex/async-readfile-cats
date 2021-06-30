// asyncBreeds.js
import {readFile} from 'fs';

const breedDetailsFromFile = function(breed, cb) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  readFile(`./data/${breed.toLowerCase()}`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    if (error) cb(undefined);
    if (!error) cb(data);
  });
};

// const callback = data => console.log('Return Value:', data);

// breedDetailsFromFile('Bombay', callback);
export {breedDetailsFromFile as asyncRead};
