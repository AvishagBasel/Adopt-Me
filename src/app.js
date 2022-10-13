import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

//import Pet from "./pet";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

// const App = () => {
//   return (
//     <div>
//       <h1>Adopt Me!</h1>
//       <Pet name="Luna" animal="dog" breed="Havanese" />
//       <Pet name="Pepper" animal="bird" breed="Cockatiel" />
//       <Pet name="Doink" animal="cat" breed="Mix" />
//     </div>
//   );
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Engi",
//       animal: "Dog",
//       breed: "Mix",
//     }),
//     React.createElement(Pet, {
//       name: "Stich",
//       animal: "Dog",
//       breed: "Pincher",
//     }),
//     React.createElement(Pet, {
//       name: "Loei",
//       animal: "Dog",
//       breed: "Aski",
//     }),
//   ]);
// };

// render(React.createElement(App), document.getElementById("root"));
