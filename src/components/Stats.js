import React, { Component } from 'react';

class Stats extends Component {
	state = { showing: false };

	render() {
		// const [show, setShow] = useState(false);
		// const target = useRef(null);
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
						{!showing ? 'Show stats' : null}
						{showing ? (
							<div className="statLines">
								<p>
									words remaining:
									<span>{wordsLeft}</span>
								</p>
								<p>
									word count:
									<span>{wordCount}</span>
								</p>
								<p>
									character count:
									<span>{charCount}</span>
								</p>
								<p>
									most popular words:
									<span>
										{wordsCounted.map((x) => (
											<p className="popularWord">{x}</p>
										))}
									</span>
								</p>
							</div>
						) : null}{' '}
					</button>
				</div>
			</div>
		);
	}
}

export default Stats;
