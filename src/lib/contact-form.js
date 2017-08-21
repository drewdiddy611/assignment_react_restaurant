import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
			message: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const newState = {};
		console.log(e.target.id, e.target.value);
		newState[e.target.id] = e.target.value;
		this.setState(newState);
	}

	render() {
		return (
			<form>
				<FormGroup controlId="name">
					<ControlLabel>Name</ControlLabel>
					<FormControl
						type="text"
						value={this.state.name}
						placeholder="Name"
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup controlId="email">
					<ControlLabel>Email</ControlLabel>
					<FormControl
						type="email"
						value={this.state.email}
						placeholder="yourname@example.com"
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup controlId="phone">
					<ControlLabel>Phone</ControlLabel>
					<FormControl
						type="text"
						value={this.state.phone}
						placeholder="555-555-5555"
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup controlId="message">
					<ControlLabel>Message</ControlLabel>
					<FormControl
						componentClass="textarea"
						placeholder="Your message here..."
						value={this.state.message}
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>

				<Button type="submit">Submit Reservation</Button>
			</form>
		);
	}
}

export default ContactForm;
