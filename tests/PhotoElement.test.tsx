import { expect } from "chai";
import PhotoElement from "../src/components/PhotoElement";

describe("PhotoElement", () => {
  it("contains the required properties", () => {
    var photoElem = new PhotoElement({});
    expect(photoElem.src).to.be.instanceOf(String);
  });
});
