// var calculator = require('../calculator');
var calculator = require("jasmine");
var { add } = require('../calculator');

describe("Simple calculator to add two numbers", function () {
    it("Should be able to add two numbers", function () {
        expect(add(0,0)).toEqual(0);
    });

    it("Should be able to add two numbers", function () {
        expect(add(-1,-1)).toEqual(-2);
    });

    it("Should be able to add two numbers", function () {
        expect(add(4,5)).toEqual(9);
    });
});