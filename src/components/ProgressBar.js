import React, { Component } from 'react';
// import Typewriter from './Typewriter';

class ProgressBar extends Component {
	render() {
		return (
			<progress
				max={this.props.state.charLimit}
				id="progress"
				value={this.props.state.entry.length}
				// style={{ height: `${this.entry.length + 10}px` }}
			></progress>
		);
	}
}

export default ProgressBar;
