import * as React from "react";
import Person from "./Person";
import PhotoElement from "./PhotoElement";

interface Props {
}

export default class Family extends PhotoElement {
  _isHouse: Boolean = false;
  _people: Array<Person> = new Array<Person>();
  
  constructor(props: Props) {
    super(props);
  }

  get isHouse(): Boolean {
    return this._isHouse;
  }
  set isHouse(newIsHouse:Boolean) {
    this._isHouse = newIsHouse;
  }

  get people(): Array<Person> {
    return this._people;
  }
  set people(newPeople:Array<Person>) {
    this._people = newPeople;
  }

  render() {
    return (
      <g className="family">
      </g>
    );
  }
}
