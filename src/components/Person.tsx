import * as React from "react";
import PhotoElement from "./PhotoElement";
import Gender from "./Gender";

export default class Person extends PhotoElement {
	gender: Gender;
	lastName: String;
	fullName: String;
	parents: Person[];
	children: Person[];
	adoptedChildren: Person[];
	deceased: Boolean;

	render() {
		return (
			<g className="person">
			</g>
		);
	}
}
