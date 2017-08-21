import React, { Component } from 'react';

class MenuItem extends Component {
	render() {
		return (
			<div className="thumbnail menu-item">
				<div className="row">
					<div className="col-md-3">
						<img src={this.props.imageSrc} alt="mmmm, FOOOOD!" />
					</div>
					<div className="col-md-6 col-md-offset-2">
						<div className="caption">
							<div className="row">
								<div className="col-md-6">
									<h3>
										{this.props.name}
									</h3>
								</div>
								<div className="col-md-6">
									<h2 className="text-right">
										<strong>
											${this.props.price}
										</strong>
									</h2>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<p>
										{this.props.desc}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuItem;
