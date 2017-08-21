import React from 'react';

const MenuItem = props => {
	return (
		<div className="thumbnail menu-item">
			<div className="row">
				<div className="col-md-3">
					<img src={props.imageSrc} alt="mmmm, FOOOOD!" />
				</div>
				<div className="col-md-6 col-md-offset-2">
					<div className="caption">
						<div className="row">
							<div className="col-md-6">
								<h3>
									{props.name}
								</h3>
							</div>
							<div className="col-md-6">
								<h2 className="text-right">
									<strong>
										${props.price}
									</strong>
								</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<p>
									{props.desc}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
