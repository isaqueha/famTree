import PhotoElement from "./PhotoElement";
import Gender from "./Gender";

interface Props {
}

export default class Person extends PhotoElement {
  _gender: Gender = new Gender();
  _lastName: String = new String("");
  _fullName: String = new String("");
  _parents: Array<Person> = new Array<Person>();
  _children: Array<Person> = new Array<Person>();
  _deceased: Boolean = false;

  constructor(props: Props) {
    super(props);
  }

  get gender(): Gender {
    return this._gender;
  }
  set gender(newGender:Gender) {
    this._gender = newGender;
  }
  
  get lastName(): String {
    return this._lastName;
  }
  set lastName(newLastName:String) {
    this._lastName = newLastName;
  }

  get fullName(): String {
    return this._fullName;
  }
  set fullName(newFullName:String) {
    this._fullName = newFullName;
  }

  get parents(): Array<Person> {
    return this._parents;
  }
  set parents(newParents:Array<Person>) {
    this._parents = newParents;
  }

  get children(): Array<Person> {
    return this._children;
  }
  set children(newPerson:Array<Person>) {
    this._children = newPerson;
  }

  get deceased(): Boolean {
    return this._deceased;
  }
  set deceased(newDeceased:Boolean) {
    this._deceased = newDeceased;
  }
}
