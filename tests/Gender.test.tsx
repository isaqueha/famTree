import { expect } from "chai";
import Gender from "../src/components/Gender";

describe("Gender", () => {
  it("contains the required properties", () => {
    var gender = new Gender();
    expect(gender.type).to.be.instanceOf(String);
  });
});
