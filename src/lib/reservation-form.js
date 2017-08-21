import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class ReservationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			date: '',
			time: '',
			guests: 1
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

				<FormGroup controlId="date">
					<ControlLabel>Date</ControlLabel>
					<FormControl
						type="date"
						value={this.state.date}
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup controlId="time">
					<ControlLabel>Time</ControlLabel>
					<FormControl
						type="text"
						value={this.state.time}
						placeholder="Time"
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup controlId="guests">
					<ControlLabel>Guests</ControlLabel>
					<FormControl
						type="number"
						min="1"
						max="10"
						value={this.state.guests}
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>
			</form>
		);
	}
}

export default ReservationForm;
