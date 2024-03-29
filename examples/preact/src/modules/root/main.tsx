import "virtual:windi.css";

import { render } from "preact";

import { App } from "./app";

// check if dom is mounted
const targetDiv: Element | Document | ShadowRoot | DocumentFragment | null =
  document.getElementById("app");

if (!targetDiv) throw new Error("The element #app was not found !");

render(<App />, targetDiv);
