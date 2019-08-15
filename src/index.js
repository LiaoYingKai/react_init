import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import Layout from './layout'

class App extends React.Component {
	render() {
		return (
			<Layout/>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('App'))
