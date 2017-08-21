import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Jumbotron from "./lib/jumbotron";
import NavBar from "./lib/navbar";
import ReservationForm from "./lib/reservation-form";
import ContactForm from "./lib/contact-form";
import MenuItem from "./lib/menu-item";

const Header = () => {
  return (
    <div>
      <Jumbotron />
      <NavBar />
    </div>
  );
};

// name, date, time, # of people
class App extends Component {
  render() {
    const menuItems = [
      {
        name: "Finest Pizza",
        imageSrc:
          "https://jimsplacepizza.com/wp-content/uploads/2014/05/image.jpeg",
        desc: "Amazing, yummy pizza",
        price: 5000.0
      },
      {
        name: "Finest Lasagna",
        imageSrc:
          "http://1.bp.blogspot.com/-AHLy82PR_5g/Tz_Pxyw4ueI/AAAAAAAAAn0/K4d24Mba3mE/s1600/raw_lasagna.jpg",
        desc: "Decadent, illustrious lasagna",
        price: 10000.0
      },
      {
        name: "Finest Alfredo",
        imageSrc:
          "http://www.cupcakediariesblog.com/wp-content/uploads/2016/02/shrimp-fettuccine-alfredo-2.jpg",
        desc: "Smooth, creamy Alfredo",
        price: 15000.0
      },
      {
        name: "Finest Shrimp",
        imageSrc:
          "http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2007/08/fine-dining-restaurants-kw.gif",
        desc: "Fresh, delicious shrimp",
        price: 100000.0
      }
    ];
    return (
      <div className="container">
        <Header />
        <hr />
        <div className="row">
          <div className="col-md-6">
            <a href="/" className="thumbnail reserve-image">
              <img
                src="http://www.topoftheworldlv.com/images/steak_plate_TOW.png"
                alt="mmmmm, food"
              />
            </a>
          </div>
          <div className="col-md-6" id="reservations">
            <div className="page-header">
              <h2>Reserve your table today!</h2>
            </div>
            <ReservationForm />
          </div>
        </div>
        <div className="page-header">
          <h1 className="text-center" id="menu">
            Our Menu
          </h1>
        </div>
        {menuItems.map(item =>
          <div className="row" key={item.name}>
            <div className="col-md-10 col-md-offset-1">
              <MenuItem
                imageSrc={item.imageSrc}
                name={item.name}
                price={item.price}
                desc={item.desc}
              />
            </div>
          </div>
        )}
        <div className="page-header contact-us" id="contact">
          <h2 className="text-center">Contact Us!</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
