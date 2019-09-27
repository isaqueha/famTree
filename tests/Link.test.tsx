import { expect } from "chai";
import Link from "../src/components/Link";

describe("Link", () => {
  it("contains the required properties", () => {
    var link = new Link({});
    expect(link.name).to.be.instanceOf(String);
  });
});
