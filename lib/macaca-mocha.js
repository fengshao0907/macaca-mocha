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

var _ = require('lodash');
var path = require('path');
var util = require('util');
var EOL = require('os').EOL;
var main = require.resolve('mocha');
var child_process = require('child_process');
var EventEmitter = require('events').EventEmitter;

var defaultOpt = {
  cwd: process.cwd()
};

function Mocha(options) {
  EventEmitter.call(this);
  this.options = _.merge(defaultOpt, options || {});
  this.result = [];
  this.init();
}

util.inherits(Mocha, EventEmitter);

Mocha.prototype.init = function() {
  this.bin = path.join(main, '..', '..', '.bin', 'mocha');

  if (process.platform === 'win32') {
    this.bin += '.cmd';
  }

  this.mocha = child_process.spawn(this.bin, ['--require', 'should'], {
    cwd: path.resolve(this.options.cwd)
  });

  this.bind();
};

Mocha.prototype.bind = function() {
  this.mocha.stdout.on('data', function(data) {
    this.result.push(data.toString().trim());
    this.emit('data', data.toString().trim());
  }.bind(this));

  this.mocha.stderr.on('data', function(data) {
    this.result.push(data.toString().trim());
    this.emit('error', data.toString().trim());
  }.bind(this));

  this.mocha.stdout.on('close', function() {
    this.emit('close', this.result.join(EOL));
  }.bind(this));
};

module.exports = Mocha;
