import React from 'react';
const GoogleMap = () => {
	return (
		<div>
			<div className="page-header" id="google-map">
				<h2 className="text-center">Location</h2>
			</div>
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<iframe
						title="An AWESOME GOOGLE MAPS IFRAME"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1444.2902004502093!2d-116.20552602051302!3d43.615277509573446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef8e55d94c083%3A0xdda322ccbcf92f14!2sDowntown%2C+Boise%2C+ID!5e0!3m2!1sen!2sus!4v1503354939943"
						width="600"
						height="450"
						frameborder="0"
						allowfullscreen
					/>
				</div>
			</div>
		</div>
	);
};
export default GoogleMap;
