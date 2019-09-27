import * as React from "react";

interface Props {
}

export default class Link extends React.Component<Props, {}> {
  _name: String;

  constructor(props: Props) {
    super(props);
    this._name = new String(""); 
  }

  get name(): String {
    return this._name;
  }
  set name(newName:String) {
    this._name = newName;
  }

  render() {
    return (
      <a className="trees" href="#">Click Here
      </a>
    );
  }
}
