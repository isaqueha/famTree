import * as React from "react";
import Link from "./Link";

export default class Element {
	name: String;
	description: String;
	link: Link;

	render() {
		return (
			<g className="element">
			</g>
		);
	}
}
