import "mocha";
import "should";

import { HelloWorld } from "../src/HelloWorld";

describe("HelloWorld", () => {

    let tested: HelloWorld;

    beforeEach(() => tested = new HelloWorld());

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