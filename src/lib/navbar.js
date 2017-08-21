import React from 'react'; //, { Component } from 'react';
import NavLink from './navlink';
const NavBar = () => {
	const links = [
		{ key: 0, text: 'Welcome', href: '/' },
		{ key: 1, text: 'Reservations', href: '/reservations' },
		{ key: 2, text: 'Menu', href: '/menu' },
		{ key: 3, text: 'Contact Us', href: '/contact' }
	];
	return (
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
	);
};

export default NavBar;
