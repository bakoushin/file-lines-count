# file-lines-count

![NPM](https://img.shields.io/npm/v/file-lines-counter)
![Travis](https://img.shields.io/travis/bakoushin/file-lines-count)
![Codecov](https://img.shields.io/codecov/c/github/bakoushin/file-lines-count)

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

## Contributing

[Code of conduct](https://github.com/bakoushin/file-lines-count/blob/master/CODE_OF_CONDUCT.md)

## Author

Alex Bakoushin

## License

MIT
