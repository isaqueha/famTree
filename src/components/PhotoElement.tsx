import * as React from "react";
import Element from "./Element";

export default class PhotoElement extends Element {
	photo: ImageBitmap;
	
	render() {
		return (
			<g className="photoElement">
			</g>
		);
	}
}
