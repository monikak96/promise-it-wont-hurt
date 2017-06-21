'use strict'

function parsePromised (json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);//would it print if there is an error??
    }
  });
};

parsePromised(process.argv[2])
.then(console.log,null)
