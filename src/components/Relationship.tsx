import * as React from "react";
import Element from "./Element";

export default class Relationship extends Element {
	type: String;
	ended: Boolean;

	render() {
		return (
			<g className="relationship">
			</g>
		);
	}
}
