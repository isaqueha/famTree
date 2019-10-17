import * as React from "react";
import Person from "./Person";
import PhotoElement from "./PhotoElement";

interface Props {
}

export default class Family extends PhotoElement {
  _isHouse: Boolean = false;
  _people: Array<Person>;
  
  constructor(props: Props) {
    super(props);
    this._people = new Array<Person>();
    this._people.push(new Person({}));
    this._people.push(new Person({}));
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
    const people = this._people.map((person) => {
      return <Person />;
    });
    console.log(people);

    return (
      <div className="family">
        {people}
      </div>
    );
  }
}
