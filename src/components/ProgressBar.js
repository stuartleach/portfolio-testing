import React, { Component } from 'react';
// import Typewriter from './Typewriter';

class ProgressBar extends Component {
	render() {
		const wordLimit = this.props.state.wordLimit;
		const wordCount = this.props.state.wordCount;
		return (
			<progress
				max={wordLimit}
				id="progress"
				value={wordCount}
			></progress>
		);
	}
}

export default ProgressBar;
