# file-lines-count

[![Build Status](https://travis-ci.org/bakoushin/file-lines-count.svg?branch=master)](https://travis-ci.org/bakoushin/file-lines-count)

Count number of lines in a file in a fast asynchronous fashion.

## Install

```
npm install file-lines-count
```

## Usage

```javascript
const linesCount = require('file-lines-count');
const lines = await linesCount('myfile.txt');
console.log(`File has ${lines} lines`);
```

## Author

Alex Bakoushin

## License

MIT
