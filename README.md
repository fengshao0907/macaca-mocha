macaca-mocha
====

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/macaca-mocha.svg?style=flat-square
[npm-url]: https://npmjs.org/package/macaca-mocha
[travis-image]: https://img.shields.io/travis/macacajs/macaca-mocha.svg?style=flat-square
[travis-url]: https://travis-ci.org/xumacacajsdafeng/macaca-mocha
[coveralls-image]: https://img.shields.io/coveralls/macacajs/macaca-mocha.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/macacajs/macaca-mocha?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/macaca-mocha.svg?style=flat-square
[download-url]: https://npmjs.org/package/macaca-mocha

> macaca-mocha

## Installment

```bash
$ npm i macaca-mocha --save
```

## Usage

```javascript
var mocha = new Mocha({
  cwd: path.resolve(__dirname, '..')
});

mocha.on('data', function(data) {
  console.log('data: ', data);
});

mocha.on('error', function(data) {
  console.log('error: ', data);
});

mocha.on('close', function(data) {
  console.log('total: ', data);
});
```

## License

The MIT License (MIT)
