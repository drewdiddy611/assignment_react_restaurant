import React from 'react';

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

export default NavLink;
