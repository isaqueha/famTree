"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
require("should");
const HelloWorld_1 = require("../src/HelloWorld");
describe("HelloWorld", () => {
    let tested;
    beforeEach(() => tested = new HelloWorld_1.HelloWorld());
    describe("Say hi", () => {
        it("should say Hi, somkiat", () => {
            const result = tested.sayHi("somkiat");
            const expected = "Hi, somkiat";
            result.should.be.equal(expected);
        });
        it("should say Hi, somkiat2", () => {
            const result = tested.sayHi("somkiat2");
            const expected = "Hi, somkiat2";
            result.should.be.equal(expected);
        });
    });
});
//# sourceMappingURL=HelloWorldTest.js.map