// testing code goes here

'use strict'

var chai = require('chai');
var should = chai.should();
var app = require("../getPrimes/getPrime.js");



describe("Test for Invalid Input", function() {

    it("should return 'Invalid Input' for 'string'", function() {
      app.getPrimes('string').should.be.equal('Invalid Input');
    });

    it("should return 'Invalid Input' for float 10.7", function() {
      app.getPrimes(10.7).should.be.equal('Invalid Input');
    });

});


describe("Test for Integer", function() {

    it("should return 10 for [2,3,5,7]", function() {
      app.getPrimes(10).should.be.equal([2,3,5,7]);
    });

    it("should return 50 for [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]", function() {
      app.getPrimes(50).should.be.equal([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
    });



});

describe("Test for negative number or zero", function() {

    it("should return 'negative number or zero' for 0", function() {
      app.getPrimes(0).should.be.equal('negative number or zero');
    });

    it("should return 'negative number or zero' for -5", function() {
      app.getPrimes(-5).should.be.equal('negative number or zero');
    });

});


