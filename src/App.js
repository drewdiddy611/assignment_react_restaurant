import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <a>
            <li>Welcome</li>
          </a>
          <a>
            <li>Reservations</li>
          </a>
          <a>
            <li>Menu</li>
          </a>
          <a>
            <li>Contact Us</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <Jumbotron />
      <Nav />
    </div>
  );
};

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1>Our Restaurant</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
