import { expect } from "chai";
import Tree from "../src/components/Tree";

describe("Tree", () => {
  it("contains the required properties", () => {
    var tree = new Tree({});
    expect(tree.families).to.be.instanceOf(Array);
  });
});
