import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './style.scss'

function LayoutHeader(){
	return (
		<header>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/About">About</NavLink>
				</li>
			</ul>
		</header>
	)
}

export default LayoutHeader;