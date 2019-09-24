import * as React from "react";
import Element from "./Element";
import Family from "./Family";

export default class Tree extends Element {
	families: Family[];

	render() {
		return (
			<g className="tree">
			</g>
		);
	}
}
