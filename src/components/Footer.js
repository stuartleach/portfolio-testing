import React, { Component, createRef } from 'react';
import gitLogo from './img/github.png';
import emailLogo from './img/mail.png';
import linkedinLogo from './img/linkedin.png';
import spotifyLogo from './img/spotify.png';

export default class Footer extends Component {
	render() {
		const github = this.props.github,
			emailContact = this.props.emailContact,
			linkedin = this.props.linkedin,
			spotify = this.props.spotify;

		return (
			<div className="Footer">
				<a href={github} target="_blank">
					<img src={gitLogo} alt="git" width="25vh" />
				</a>
				<a href={emailContact} target="_blank">
					<img src={emailLogo} alt="email" width="25vh" />
				</a>
				<a href={linkedin} target="_blank">
					<img src={linkedinLogo} alt="linkedin" width="25vh" />
				</a>
				<a href={spotify} target="_blank">
					{<img src={spotifyLogo} alt="spotify" width="25vh" />}
				</a>
			</div>
		);
	}
}
