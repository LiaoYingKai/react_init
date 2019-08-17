import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class About extends Component {
	render() {
		return (
			<div className="about">
				<div >
					TODO：
					<input></input>
					<button>同步 Add</button>
					<button>非同步 Add</button>
				</div>
				<ul>
					<li>
						Hello react!!!
					</li>
				</ul>
			</div>
		)
	}
}

export default About
