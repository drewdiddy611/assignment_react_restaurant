import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Jumbotron from './lib/jumbotron';
import NavBar from './lib/navbar';
import ReservationForm from './lib/reservation-form';
import ContactForm from './lib/contact-form';
import MenuDisplay from './lib/menu';
import GoogleMap from './lib/google-map';

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
		return (
			<div className="container">
				<Header />
				<hr />
				<ReservationForm />
				<hr className="heart-divider" />
				<MenuDisplay />
				<hr className="heart-divider" />
				<ContactForm />
				<hr className="heart-divider" />
				<GoogleMap />
			</div>
		);
	}
}

export default App;
