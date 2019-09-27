import { expect } from "chai";
import Element from "../src/components/Element";
import Link from "../src/components/Link";

describe("Element", () => {
  it("contains the required properties", () => {
    var elem = new Element({});
    expect(elem.name).to.be.instanceOf(String);
    expect(elem.description).to.be.instanceOf(String);
    expect(elem.link).to.be.instanceOf(Link);
  });
});
