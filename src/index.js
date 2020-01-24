'use strict';

const fs = require('fs');

async function fileLinesCount(pathToFile) {
  let result = 0;
  for await (const chunk of fs.createReadStream(pathToFile)) {
    let index = -1;
    do {
      index = chunk.indexOf(10, index + 1);
      if (index !== -1) result++;
    } while (index !== -1);
  }
  return result;
}

module.exports = fileLinesCount;
