import React, { Component } from 'react';

class Stats extends Component {
	state = { showing: true };

	render() {
		const entry = this.props.state.entry;
		const wordCount = this.props.state.wordCount;
		const wordsLeft = this.props.state.wordsLeft;
		const charCount = this.props.state.charCount;
		const charLimit = this.props.state.charLimit;
		const wordLimit = this.props.state.wordLimit;
		const wordsCounted = this.props.state.wordsCounted;

		const { showing } = this.state;

		return (
			<div align="center">
				<div className="stats">
					<button
						className="btn"
						onClick={() => this.setState({ showing: !showing })}
					>
						{showing ? 'Hide stats' : 'Show stats'}
					</button>

					{showing ? (
						<ul>
							<li className="stat">
								words remaining: <br />
								{wordsLeft}
							</li>
							<li className="stat">
								word count: <br />
								{wordCount}
							</li>
							<li className="stat">
								character count: <br />
								{charCount}
							</li>
						</ul>
					) : null}
				</div>
			</div>
		);
	}
}

export default Stats;
