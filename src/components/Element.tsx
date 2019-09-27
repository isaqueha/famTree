import Link from "./Link";
import * as React from "react";

interface Props {
}

export default class Element extends React.Component<Props, {}> {
  private _name: String = new String("");
  private _description: String = new String("");
  private _link: Link = new Link({});

  constructor(props: Props) {
    super(props);
  }

  get name(): String {
    return this._name;
  }
  set name(newName:String) {
    this._name = newName;
  }

  get description(): String {
    return this._description;
  }
  set description(newDescription:String) {
    this._description = newDescription;
  }

  get link(): Link {
    return this._link;
  }
  set link(newLink:Link) {
    this._link = newLink;
  }
}
