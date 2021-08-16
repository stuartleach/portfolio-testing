import React, { Component, createRef } from 'react';

export default class CreateAccount extends Component {
	render() {
		const onEmailChange = this.props.onEmailChange;
		const onPasswordChange = this.props.onPasswordChange;
		const handleSubmit = this.props.handleSubmit;
		return (
			<div className="centered" style={{ textAlign: 'left' }}>
				<form action="" onSubmit={handleSubmit}>
					<label>
						email:
						<input type="text" onChange={onEmailChange} />
					</label>
					<br />
					<label>
						password:
						<input type="text" onChange={onPasswordChange} />
					</label>
					<br />
					<button type="submit" value="Submit">
						submit
					</button>
				</form>
			</div>
		);
	}
}
