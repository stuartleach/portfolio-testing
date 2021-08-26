import Rebase from 're-base'

import firebase from 'firebase'

// import App from './components/App';

/* const email = App.state.email;
const password = App.state.password;
 */
const firebaseApp = firebase.initializeApp({
	apiKey: process.env.REACT_APP_JOURNAL_API,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
})

const firebaseNewAccount = firebase
	.auth()
	.createUserWithEmailAndPassword(email, password)
	.then((userCredential) => {
		// Signed in
		let user = userCredential.user
		console.log(userCredential)
		// ...
	})
	.catch((error) => {
		let errorCode = error.code
		let errorMessage = error.message
		// ..
	})

export { firebaseNewAccount }

const base = Rebase.createClass(firebaseApp.database())

// this is a named export
export { firebaseApp }

// this is a default export
export default base
