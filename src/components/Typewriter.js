import React, { Component } from 'react';

class Typewriter extends Component {
	render() {
		console.log('typewriter is:' + this.props.state.charLimit);

		return (
			<div className="vertical-center">
				<div className="input-wrapper container" data-text="">
					<form action="">
						<input
							type="text"
							ref={this.props.state.entry}
							required
							placeholder={`${this.props.state.charLimit} characters. Go.`}
							// onChange={this.props.keyPress}
							onKeyUp={this.props.keyPress}
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default Typewriter;
