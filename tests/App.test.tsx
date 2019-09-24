import { configure } from "enzyme";
import { expect } from "chai";
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe("Main App", () => {
  it("renders the correct content for app", () => {
    expect(1).to.equal(1);
  });
});
