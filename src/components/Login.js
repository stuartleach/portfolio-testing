// import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
	<nav className="login">
		<h2>user login</h2>
		<p>sign in to create new entry</p>
		<button
			className="facebook"
			onClick={() => props.authenticate('Facebook')}
		>
			<button className="createAccount" onClick={props.createAnAccount}>
				Create an Account
			</button>
			Log in with facebook
		</button>
	</nav>
);

Login.propTypes = {
	authenticate: PropTypes.func.isRequired,
};

export default Login;
