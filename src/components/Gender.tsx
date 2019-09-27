export default class Gender {
  _type: String = new String("Undefined");

  get type(): String {
    return this._type;
  }
  set type(newType:String) {
    this._type = newType;
  }
}
