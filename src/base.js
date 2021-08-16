import Rebase from 're-base';

import firebase from 'firebase';

// import App from './components/App';

/* const email = App.state.email;
const password = App.state.password;
 */
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyAiJy_qpN1YaS5dsB8YnEz_d_JoSDnxwb4',
	authDomain: 'morningpages-b1c82.firebaseapp.com',
	databaseURL: 'https://morningpages-b1c82-default-rtdb.firebaseio.com',
});
/* 
const firebaseNewAccount = firebase
	.auth()
	.createUserWithEmailAndPassword(email, password)
	.then((userCredential) => {
		// Signed in
		let user = userCredential.user;
		console.log(userCredential);
		// ...
	})
	.catch((error) => {
		let errorCode = error.code;
		let errorMessage = error.message;
		// ..
	}); */

// export { firebaseNewAccount };

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
