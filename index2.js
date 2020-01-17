const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((flyOver) => {
    printTimes(flyOver);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });