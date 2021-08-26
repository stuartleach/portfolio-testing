import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	ChakraProvider,
	extendTheme,
	Center,
	Box,
	Circle,
} from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		// Page-wide styles
		global: {
			'html, body': {
				color: 'blue.600',
				lineHeight: '1.4',
				backgroundColor: '#d0eaff',
				display: 'block',
				height: '100vh',
			},
			a: {
				color: 'brown',
				backgroundColor: 'pink',
				// opacity: '0.5',
				animation: '1s',
				_hover: {
					backgroundColor: 'blue',
					animation: '2s',
				},
			},
			'#container': {
				backgroundColor: 'blue',
				minWidth: '40%',
				maxWidth: '70%',
				display: 'block',
			},
			ul: {
				textDecoration: 'none',
				listStyleType: 'none',
				fontSize: '20px',
			},
			header: {
				borderBottom: '2px',
				width: '90%',
				textAlign: 'center',
			},
			button: {
				fontWeight: '900',
				padding: '20px',
				float: 'left',
				transitionDuration: '1s',
				borderRadius: '0px',
				_hover: {
					backgroundColor: 'blue',
					color: 'white',
					borderRadius: '100%',
					fontSize: '1em',
				},
			},
			h1: {
				fontSize: '4rem',
				color: '#4DA2F7',
			},

			'.footer': {
				fontSize: '7em',

				width: '40vh',
				li: {
					fontSize: '12px',
					transitionDuration: '2s',
					float: 'left',
					// padding: '20px',
					_hover: {
						opacity: '.2',
					},
					a: {
						borderRadius: '50%',
						padding: '10px',
						transitionDuration: '2s',
					},
				},
			},
		},
	},
})

const about = {
	text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis animi unde, consequuntur, veritatis reprehenderit assumenda repellendus laboriosam similique ipsum porro ea tempore? Quo, at? Est eos quae ab nam.`,
}

const projects = {
	oneThousandWords: {
		name: 'One Thousand Words',
		url: '',
		img: '',
		desc: 'journaling app',
	},
	loveLeach: {
		name: 'Leach (Band Website)',
		url: '',
		img: '',
		desc: `leach's official website`,
	},
	WordCloud: {
		name: 'Wordcloud',
		url: '',
		img: '',
		desc: `wordcloud`,
	},
}

const Portfolio = () => {
	const goToSite = (event) => {
		event.preventDefault()
		const siteUrl = event.target.attributes.url.value
		console.log(event.target.attributes)
		event.target.attributes.newwindow
			? window.open(siteUrl)
			: this.props.history.push(siteUrl)
		console.log(event.target)
	}

	const links = {
		github: 'githuburl',
		linkedin: 'linkedinurl',
		spotify: 'spotifyurl',
		email: 'emailurl',
	}
	const Footer = (props) => {
		return (
			<div className='footer'>
				<ul>
					{Object.keys(links).map((x, i, arr) => (
						<li>
							<a href={links[x]}> {x}</a>
						</li>
					))}
				</ul>
			</div>
		)
	}

	return (
		<ChakraProvider theme={theme}>
			<Center>
				<header>
					<h1 onClick={() => console.log('hi')}>Stuart Leach</h1>
				</header>
			</Center>
			<Center>
				<div id='container'>
					<Center>
						<ul>
							{Object.keys(projects).map((x) => (
								<button
									onClick={goToSite}
									url={projects[x].url}
									newwindow=''
								>
									{projects[x].name}
								</button>
							))}
						</ul>
					</Center>
					<Center>
						<div id='about'>
							<Center>{about.text}</Center>
						</div>
					</Center>
				</div>
			</Center>
			<Center>
				<div className='footer'>
					<Center>
						<Footer />
					</Center>
				</div>
			</Center>
		</ChakraProvider>
	)
}

export default Portfolio
