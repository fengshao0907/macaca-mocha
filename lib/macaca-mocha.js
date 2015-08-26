/* ================================================================
 * macaca-mocha by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Aug 26 2015 11:55:14 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var path = require('path');
var util = require('util');
var main = require.resolve('mocha');
var child_process = require('child_process');
var EventEmitter = require('events').EventEmitter;

var defaultOpt = {
  cwd: process.cwd()
};

function Mocha(options) {
  EventEmitter.call(this);
  this.options = options;
  this.result = [];
  this.init();
}

util.inherits(Mocha, EventEmitter);

Mocha.prototype.init = function() {
  this.bin = path.join(main, '..', '..', '.bin', 'mocha');

  if (process.platform === 'win32') {
    this.bin += '.cmd';
  }

  this.mocha = child_process.spawn(this.bin, ['.', '--require', 'should'], {
    cwd: cwd
  });

  this.bind();
};

Mocha.prototype.bind = function() {
  var that = this;

  this.mocha.stdout.on('data', function(data) {
    that.result.push(data.toString().trim());
    that.emit('data', data.toString().trim());
  });

  this.mocha.stderr.on('data', function(data) {
    that.result.push(data.toString().trim());
    that.emit('error', data.toString().trim());
  });

  this.mocha.stdout.on('close', function() {
    that.emit('close', that.result.join(EOL));
  });
};

module.exports = Mocha;
