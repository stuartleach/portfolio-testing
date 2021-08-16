import React, { Component } from 'react';
// import numToString from '../helper';
import Login from './Login';
import firebase from 'firebase';
import { firebaseApp } from '../base';

class Typewriter extends Component {
	/*
	authHandler = async (authData) => {
		console.log(authData);
	};

	authenticate = (provider) => {
		// alert(provider);
		// const authProvider = new firebase.auth.FacebookAuthProvider();
		// firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
	};

	createAnAccount = () => {
		const loginForm = '';
	};
	*/

	static propTypes = {};

	render() {
		const charLeft = this.props.state.charLeft;
		const entry = this.props.state.entry;
		const charLimit = this.props.state.charLimit;
		const wordLimit = this.props.state.wordLimit;
		const wordCount = this.props.state.wordCount;
		const wordsLeft = this.props.state.wordsLeft;
		return (
			<form action="">
				{/* <Login authenticate={this.authenticate} /> */}
				<input
					className="main"
					type="text"
					ref={entry}
					required
					placeholder={`${wordLimit} words to go.`}
					onChange={this.props.keyPress}
					onClick={this.props.handleClick}
				/>

				{/* <h6 className="centered">
					{charLeft ? charLeft : null}
					<br />
					{wordCount ? wordCount : null}
				</h6> */}
			</form>
		);
	}
}

export default Typewriter;
