import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const ReservationForm = React.createClass({
  getInitialState() {
    return {
      reservationState: {
        name: "",
        date: "",
        time: "",
        guests: 1
      }
    };
  },

  handleChange(e) {
    const newState = {reservationState: {}};
    newState.reservationState[e.target.name] = e.target.value
    this.setState(newState);
  },

  render() {
    return (
      <form>
        <FormGroup controlId="name">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.reservationState.name}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="date">
          <ControlLabel>Date</ControlLabel>
          <FormControl
            type="date"
            value={this.state.reservationState.date}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="time">
          <ControlLabel>Time</ControlLabel>
          <FormControl
            type="text"
            value={this.state.reservationState.time}
            placeholder="Time"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="guests">
          <ControlLabel>Guests</ControlLabel>
          <FormControl
            type="number"
            min=1
            max=10
            value={this.state.reservationState.guests}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
});

const NavLink = props => {
  let { href, text } = props;
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        {text}
      </a>
    </li>
  );
};

// <nav class="navbar navbar-default">
//   <div class="container-fluid">
//     <div class="navbar-header">
//
//     </div>
//   </div>
// </nav>
const Nav = () => {
  const links = [
    { key: 0, text: "Welcome", href: "/" },
    { key: 1, text: "Reservations", href: "/reservations" },
    { key: 2, text: "Menu", href: "/menu" },
    { key: 3, text: "Contact Us", href: "/contact" }
  ];
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              {links.map(link =>
                <NavLink key={link.key} href={link.href} text={link.text} />
              )}
            </ul>
          </div>
        </div>
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
      <h1>
        <small>We make the best chicken sandwiches</small>
      </h1>
    </div>
  );
};

// name, date, time, # of people

const ReservationForm = () => {};

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
      </div>
    );
  }
}

export default App;
