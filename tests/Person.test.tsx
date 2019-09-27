import { expect } from "chai";
import Person from "../src/components/Person";
import Gender from "../src/components/Gender";

describe("Person", () => {
  it("contains the required properties", () => {
    var person = new Person({});
    expect(person.gender).to.be.instanceOf(Gender);
    expect(person.lastName).to.be.instanceOf(String);
    expect(person.fullName).to.be.instanceOf(String);
    expect(person.parents).to.be.instanceOf(Array);
    expect(person.children).to.be.instanceOf(Array);
    expect(person.deceased).to.be.equal(false);
  });
});
