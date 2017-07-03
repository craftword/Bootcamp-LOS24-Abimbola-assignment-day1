var jasmine = require("jasmine")
var app = require("../getPrimes/getPrime.js");


describe("Prime Number tests ", function() {


  describe("Test for Invalid Input", function() {

    it("should return 'Invalid Input' for 'string'", function() {
      expect(app.getPrimes('string')).toEqual('Invalid Input');
    });

    it("should return 'Invalid Input' for float 10.7", function() {
      expect(app.getPrimes(10.7)).toEqual('Invalid Input');
    });

  });


  describe("Test for Integer", function() {

    it("should return 10 for [2,3,5,7]", function() {
      expect(app.getPrimes(10)).toEqual([2,3,5,7]);
    });

    it("should return 50 for [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]", function() {
      expect(app.getPrimes(50)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
    });



  });

  describe("Test for negative number or zero", function() {

    it("should return 'negative number or zero' for 0", function() {
      expect(app.getPrimes(0)).toEqual('negative number or zero');
    });

    it("should return 'negative number or zero' for -5", function() {
      expect(app.getPrimes(-5)).toEqual('negative number or zero');
    });

  });















});

