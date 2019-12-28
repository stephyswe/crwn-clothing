import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
