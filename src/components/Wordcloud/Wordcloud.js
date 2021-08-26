import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

class Wordcloud extends Component {
	static propTypes = {
		history: PropTypes.object,
	};

	goToSite = (event) => {
		event.preventDefault();
		const siteName = event.target.name;
		siteName !== 'home'
			? this.props.history.push(`/${siteName}`)
			: this.props.history.push('/');
		console.log(event.target);
	};
	render() {
		return (
			<div>
				hi this is wordcloud
				<a href="none" onClick={this.goToSite} name="onethousandwords">
					journal
				</a>
				<a href="none" onClick={this.goToSite} name="home">
					ajdslfkjasldkf
				</a>
			</div>
		);
	}
}

export default Wordcloud;
