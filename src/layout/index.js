import React from 'react'
import { HashRouter as Router, } from 'react-router-dom'
import RouteLayout from './route'
import './style.scss'

function Layout(){
	return (
		<Router>
			<h1>
				Hello Kai
			</h1>
			<div className="home-page__content">
				<RouteLayout/>
			</div>
		</Router>
	)
}

export default Layout