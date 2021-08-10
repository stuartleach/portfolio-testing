import React from 'react';

import Typewriter from './Typewriter';

import ProgressBar from './ProgressBar';

class App extends React.Component {
	// function that runs when 10k words reached
	pagesDone = (e) => {
		alert('10k words reached.');
	};
	state = {
		entry: '',
		charCount: 0,
		charLimit: 500,
		charLeft: this.charLimit - this.charCount,
	};

	keyPress = (e) => {
		// e.preventDefault();
		// const entry = { ...this.state.entry };
		// this.setState({ [e.target.name]: e.target.value });
		this.setState({ entry: e.target.value });
		this.setState({ charCount: this.state.entry.length });
		this.setState({
			charLeft: this.state.charLimit - this.state.charCount,
		});
		if (this.state.entry.length >= 100) {
			return this.pagesDone();
		}
		console.log('key pressed');
		// if (this.entry.length < 10)

		document.title = this.state.charLeft + ' characters remain';

		// this.setState(this.entry);
	};

	// state = {...keyPress: this.keyPress}

	render() {
		return (
			<div className="App">
				<ProgressBar state={this.state} keyPress={this.keyPress} />
				<Typewriter state={this.state} keyPress={this.keyPress} />
			</div>
		);
	}
}

export default App;
