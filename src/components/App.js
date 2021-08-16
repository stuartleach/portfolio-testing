import React from 'react';
import Typewriter from './Typewriter';
import ProgressBar from './ProgressBar';
import Stats from './Stats';
import base from '../base';
import CreateAccount from './CreateAccount';
import firebaseApp from 'firebase';
import Footer from './Footer';
// import { firebaseNewAccount } from '../base';
// import numToString from '../helper';

class App extends React.Component {
	state = {
		email: 'email',
		password: 'password',
		user: 'stuart leach',
		entry: '',
		wordCount: 0,
		charCount: 0,
		charLimit: 10000,
		wordLimit: 1000,
		wordsCounted: [],
		charLeft: this.charLimit,
		wordsLeft: this.wordLimit,
		github: 'https://github.com/stuartleach',
		emailContact:
			'mailto:jstuartleach@gmail.com?subject=Sent from stuartlea.ch',
		linkedin: 'https://www.linkedin.com/in/stuart-leach-69182761/',
		spotify: 'https://bit.ly/leachmusic',
	};

	componentDidMount() {
		/* this.ref = base.syncState(`${this.state.user}/entry`, {
			context: this,
			state: 'entry',
			defaultValue: '',
		});
		this.ref = base.syncState(`${this.state.user}/email`, {
			context: this,
			state: 'email',
			defaultValue: '',
		});
		this.ref = base.syncState(`${this.state.user}/password`, {
			context: this,
			state: 'password',
			defaultValue: '',
		});
		this.ref = base.syncState(`${this.state.user}/charCount`, {
			context: this,
			state: 'charCount',
		});
		this.ref = base.syncState(`${this.state.user}/wordCount`, {
			context: this,
			state: 'wordCount',
		});
		this.ref = base.syncState(`${this.state.user}/wordsLeft`, {
			context: this,
			state: 'wordsLeft',
		});
		this.ref = base.syncState(`${this.state.user}/wordsCounted`, {
			context: this,
			state: 'wordsCounted',
		}); */
	}

	keyPress = (e) => {
		this.setState({
			wordCount: this.state.entry.split(' ').length,
		});

		this.setState({
			charLeft: this.state.charLimit - this.state.charCount,
		});

		this.setState({
			entry: e.target.value,
		});

		this.setState({
			charCount: this.state.entry.length,
		});

		this.setState({
			wordsLeft: this.state.wordLimit - this.state.wordCount,
		});

		// this.wordCounter();
		this.setState({
			wordsCounted: this.wordCounter(),
		});
		// console.log(this.wordsCounted);
		// console.log(JSON.stringify(this.wordCounter()));
		document.title = this.state.wordsLeft
			? this.state.wordsLeft + ' words remain'
			: '';
	};

	wordCounter = () => {
		let topWords = {};
		let mostWords = {};
		let wordArr = this.state.entry.split(' ');
		const num = 5;
		for (let i = 0; i < wordArr.length; i++) {
			if (!topWords[wordArr[i]]) {
				topWords[wordArr[i]] = 1;
			} else {
				topWords[wordArr[i]] += 1;
			}
		}

		/* Object.keys(topWords).reduce((a, b) =>
			topWords[a] > topWords[b] ? a : b
		); */

		Object.keys(topWords)
			.sort((a, b) => topWords[b] - topWords[a])
			.forEach((key, ind) => {
				if (ind < num) {
					mostWords[key] = topWords[key];
				}
			});

		const topArr = [];
		Object.keys(mostWords).map((x) => topArr.push(x));
		return topArr;
		// return arr;
		// this.setState(this.wordsCounted, topWords);
	};

	render() {
		return (
			<div className="App">
				<ProgressBar state={this.state} keyPress={this.keyPress} />
				<div className="vertical-center">
					<div className="input-wrapper container">
						<Typewriter
							state={this.state}
							keyPress={this.keyPress}
							handleClick={this.handleClick}
						/>

						<Stats
							state={
								this.state
							} /*  showStats={this.showStats}  */
						/>
					</div>
					<Footer
						github={this.state.github}
						emailContact={this.state.emailContact}
						linkedin={this.state.linkedin}
						spotify={this.state.spotify}
					/>
				</div>
			</div>
		);
	}
}
export default App;
