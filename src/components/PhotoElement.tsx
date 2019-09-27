import Element from "./Element";

interface Props {
}

export default class PhotoElement extends Element {
  _src: String = new String("");

  constructor(props: Props) {
    super(props);
  }

  get src(): String {
    return this._src;
  }
  set src(newSrc:String) {
    this._src = newSrc;
  }
}
