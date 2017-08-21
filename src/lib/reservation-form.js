import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
			<div className="row reservation-row">
				<div className="col-md-6">
					<a className="thumbnail reserve-image">
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

						<Button type="submit">Submit Reservation</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default ReservationForm;
