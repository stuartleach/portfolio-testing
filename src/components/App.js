import React from 'react';
import Typewriter from './Typewriter';
import ProgressBar from './ProgressBar';
import Stats from './Stats';
import base from './base';
import CreateAccount from './CreateAccount';
import firebaseApp from 'firebase';
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
		wordsCounted: '',
		charLeft: this.charLimit,
		wordsLeft: this.wordLimit,
	};

	componentDidMount() {
		this.ref = base.syncState(`${this.state.user}/entry`, {
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
		});
	}

	componentDidUpdate() {}

	componentWillUnmount() {
		// base.removeBinding(this.ref);
	}

	createAccount = () => {};

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};
	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	handleSubmit = (e) => {
		alert(
			'Email: \n ' +
				this.state.email +
				'\n \npassword: \n' +
				this.state.password
		);
		e.preventDefault();
		// firebaseNewAccount();
	};

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

		const wordsCounted = {
			...this.wordCounter,
		};

		// this.wordCounter();
		this.setState({
			wordsCounted: wordsCounted,
		});
		document.title = this.state.wordsLeft
			? this.state.wordsLeft + ' characters remain'
			: '';
	};

	handleClick = (e) => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		// e.target.style = {
		// 	'background-color': 'white',
		// };
	};

	wordCounter = () => {
		const result = {};
		let wordArr = this.state.entry.split(' ');
		for (let i = 0; i < wordArr.length; i++) {
			if (!result[wordArr[i]]) {
				result[wordArr[i]] = 1;
			} else {
				result[wordArr[i]] += 1;
			}
		}
		// this.setState({
		// 	wordsCounted: result,
		// });
		return result;
	};

	render() {
		return (
			<div className="App">
				<ProgressBar state={this.state} keyPress={this.keyPress} />
				<CreateAccount
					createAccount={this.createAccount}
					onEmailChange={this.onEmailChange}
					onPasswordChange={this.onPasswordChange}
					handleSubmit={this.handleSubmit}
					email={this.state.email}
					password={this.state.password}
				/>
				<div className="vertical-center" onClick={this.handleClick}>
					<div className="input-wrapper container">
						<Typewriter
							state={this.state}
							keyPress={this.keyPress}
							handleClick={this.handleClick}
						/>
						<Stats state={this.state} />
					</div>
				</div>
			</div>
		);
	}
}
export default App;
