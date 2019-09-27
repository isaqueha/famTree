import Element from "./Element";

interface Props {
}

export default class Relationship extends Element {
  _type: String = new String("");
  _ended: Boolean = false;

  constructor(props: Props) {
    super(props);
  }

  get type(): String {
    return this._type;
  }
  set type(newType:String) {
    this._type = newType;
  }

  get ended(): Boolean {
    return this._ended;
  }
  set ended(newEnded:Boolean) {
    this._ended = newEnded;
  }
}
