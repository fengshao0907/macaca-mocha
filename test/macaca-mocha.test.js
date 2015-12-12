/* ================================================================
 * macaca-mocha by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Aug 26 2015 11:55:14 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2013 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var Mocha = require('..');
var path = require('path');

describe('./lib/macaca-mocha.js', function() {
  describe('constructor', function() {
    it('should be a normal usage', function(done) {

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
        done();
      });
    });
  });
});
