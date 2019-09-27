import Element from "./Element";
import Family from "./Family";

interface Props {
}

export default class Tree extends Element {
  _families: Array<Family> = new Array<Family>();

  constructor(props: Props) {
    super(props);
  }

  get families(): Array<Family> {
    return this._families;
  }
  set families(newFamilies:Array<Family>) {
    this._families = newFamilies;
  }
}
