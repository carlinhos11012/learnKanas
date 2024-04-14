import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hiragana from "./Kanas/Hiragana";
import Katanana from "./Kanas/Katakana";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Hiragana /> */}
    <Katanana />
  </React.StrictMode>
);
