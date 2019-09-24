import * as React from "react";
import Element from "./Element";
import Person from "./Person";

export default class Family extends Element {
	photo: ImageBitmap;
	isHouse: Boolean;
	people: Person[];

	render() {
		return (
			<g className="family">
			</g>
		);
	}
}
