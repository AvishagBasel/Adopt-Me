import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Engi",
      animal: "Dog",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Stich",
      animal: "Dog",
      breed: "Pincher",
    }),
    React.createElement(Pet, {
      name: "Loei",
      animal: "Dog",
      breed: "Aski",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
