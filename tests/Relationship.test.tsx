import { expect } from "chai";
import Relationship from "../src/components/Relationship";

describe("Relationship", () => {
  it("contains the required properties", () => {
    var relationship = new Relationship({});
    expect(relationship.type).to.be.instanceOf(String);
    expect(relationship.ended).to.be.equal(false);
  });
});
