import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './style.scss'

function LayoutHeader(){
	return (
		<header>
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
				</li>
				<li>
					<NavLink to="/About" activeClassName="activeLink">About</NavLink>
				</li>
			</ul>
		</header>
	)
}

export default LayoutHeader;