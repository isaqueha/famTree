"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./components/App");
require("./styles/index.css");
const data_1 = require("./data");
ReactDOM.render(React.createElement(App_1.default, { width: window.screen.availWidth, height: window.screen.availHeight, graph: data_1.default }), document.getElementById('root'));
//# sourceMappingURL=index.js.map