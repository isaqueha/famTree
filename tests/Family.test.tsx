import { expect } from "chai";
import Family from "../src/components/Family";

describe("Family", () => {
  it("contains the required properties", () => {
    var fam = new Family({});
    expect(fam.isHouse).to.be.equal(false);
    expect(fam.people).to.be.instanceOf(Array);
  });
});
