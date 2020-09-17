import React from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import DarkModeToggle from "./components/DarkMode";
import { ReactComponent as Logo } from "./images/airbnb-logo.svg";
const sugesstions = [
  "An Giang",
  "Ha Noi",
  "Hai Phong",
  "Ho Chi Minh",
  "Hai Duong",
  "Bien Hoa",
  "Da Nang",
  "Can Tho",
  "Thua Thien Hue",
  "Quang Nam",
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <a href="/" className="logo">
          <Logo />
        </a>

        <div className="header-support">
          <DarkModeToggle />
          <div className="header-sub-menu">
            <a href="#" title="">
              Become a host
            </a>
            <a href="#" title="">
              Help
            </a>
            <a href="#" title="">
              Sign up
            </a>
            <a href="#" title="">
              Login
            </a>
          </div>
        </div>
      </div>

      <Autocomplete suggestions={sugesstions} />
    </div>
  );
}

export default App;
