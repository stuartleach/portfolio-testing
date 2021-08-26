import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	ChakraProvider,
	extendTheme,
	Center,
	Square,
	Circle,
	Box,
} from '@chakra-ui/react'
import backgroundImage from './images/Leach+Film+Selects+Edited-4.jpeg'
import aboutImage from './images/4p0OpY0A.jpg'
import AboutLeach from './AboutText'

const theme = extendTheme({
	styles: {
		// Page-wide styles
		global: {
			html: {
				// color: 'blue.600',
				lineHeight: '1.4em',
				display: 'block',
				fontFamily: 'omnes-pro',
				// height: '100vh',
				// margin: '0px',
				// position: 'absolute',
				// top: '0px',
				// right: '0px',
				// bottom: '0px',
				// left: '0px',
				// bgImage: `${backgroundImage}`,
				background: `linear-gradient(0deg, rgba(187, 49, 127, 0.712), rgba(175, 37, 209, 0.5)), url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			},
			body: {
				background: 'purple',
			},
			'#main': {
				height: '100%',
			},
			'#outerWrapper': {
				opacity: '1',

				// backgroundColor: 'rgba(165,79,196,.23)',
				// backgroundPosition: 'center',

				position: 'absolute',
				minWidth: '100%',
				width: '100%',
				minHeight: '100%',
				height: '100vh',
				// height: '100%',

				// transform: 'translate3d(0,0,0)'
				// zIndex: 1,
			},
			// '.bgOverlay': {
			// 	// backgroundColor: 'rgba(165,79,196,.23)',
			// 	backgroundColor: 'purple.500',
			// 	width: '100vw',
			// 	height: '100vh',
			// 	opacity: '.5',
			// position: 'fixed',
			// 	display: 'block',
			// 	top: 0,
			// 	bottom: 0,
			// 	left: 0,
			// 	right: 0,
			// 	zIndex: '1'
			// },
			'#container': {
				// width: '100wh',
				height: '100%',
				// paddingBottom: '100px',
				zIndex: 5000,
				opacity: 1,
				// height: '100vh',
			},

			nav: {
				margin: '0 auto',
				'.item': {
					cursor: 'pointer',
					color: '#d894ff',
					_hover: {
						color: 'rgba(255,254,245,.34)',
					},
				},
				opacity: 1,
				zIndex: 1000,
				ul: {
					margin: '1em auto 30px',
					textAlign: 'center',
					display: 'block',
					listStyleType: 'disc',
					marginBlockStart: '1em',
					marginBlockEnd: '1em',
					marginInlineStart: '0px',
					marginInlineEnd: '0px',

					li: {
						fontFamily: 'Helvetica',
						fontWeight: '900',
						fontStyle: 'italic',
						fontSize: '24px',
						lineHeight: '.5em',
						textTransform: 'uppercase',
						letterSpacing: '-.1px',
						listStyleType: 'none',
						display: 'inline-block',
						padding: '1em 1em 0',
						margin: 0,
						textDecorationStyle: 'solid',
						textDecorationThickness: 'auto',
					},
				},
			},

			'#innerWrapper': {
				width: '84%',
				margin: '30px auto',
				marginBottom: '107px',
				marginTop: '20',
			},

			'#content': {
				padding: '2% 0',
				boxSizing: 'border-box',
				margin: '0 auto',
				width: '100%',
			},

			div: {
				display: 'block',
			},

			ul: {
				textDecoration: 'none',
				listStyleType: 'none',
			},

			'.icon-mask': {
				fill: 'gray.200',
				width: '36px',
				height: '36px',
				borderRadius: '50%',

				transitionDuration: '.5s',
				float: 'left',
				display: 'block',
				marginLeft: '.5rem',
				marginRight: '.5rem',
				cursor: 'pointer',
				textAlign: 'center',
				opacity: '.8',

				_hover: {
					opacity: '1',
					fill: 'white',
				},
			},

			'#footer': {
				// width: '100%',
				// height: '100%',
				// position: 'fixed',
				// bottom: '2px',
				// margin: '0 auto',
				padding: '10px',
				// bottom: '100px',
				// width: '500px',
				// padding: '30px',
				// paddingTop: '50px',
				// boxSizing: 'border-box',
				// display: 'block',
				float: 'left',
				textAlign: 'center',
			},

			'.spotPlayer': {
				opacity: '.8',
				transitionDuration: '.5s',
				_hover: {
					opacity: '1',
				},
			},
			'.icons': {
				// display: 'block',
				// position: 'fixed',
				// bottom: '5%',
				// width: '35%',
				// float: 'left',
				// textAlign: 'center'
			},
			'.aboutPage': {
				// backgroundColor: 'rgba(115, 43, 133, 0.349)',
				// borderRadius: '20px',
				padding: '20px',
				maxWidth: '60%',
				p: {
					// color: 'purple.200',
					color: 'white',
					paddingTop: '20px',
					fontWeight: 600,
				},
				img: {
					// paddingBottom: '-40px'
				},
			},
		},
	},
})

const Loveleach = () => {
	const images = {
		background: {
			url: { backgroundImage },
			description: '',
		},
	}

	const iTunesMask = () => {
		return (
			<svg className='icon-mask' viewBox='0 0 64 64'>
				<path d='M0,0v64h64V0H0z M41.783,39.335c0,0.767-0.105,1.519-0.446,2.217c-0.53,1.086-1.399,1.768-2.55,2.095c-0.641,0.183-1.297,0.288-1.965,0.318c-1.749,0.083-3.261-1.103-3.574-2.823c-0.26-1.419,0.419-2.984,1.911-3.715c0.595-0.294,1.23-0.458,1.871-0.596c0.695-0.15,1.393-0.282,2.084-0.441c0.504-0.116,0.84-0.424,0.939-0.948c0.023-0.116,0.033-0.236,0.033-0.355c0.002-3.336,0.002-6.67-0.002-10.005c0-0.114-0.019-0.23-0.047-0.34c-0.072-0.277-0.274-0.446-0.559-0.43c-0.294,0.017-0.584,0.064-0.873,0.122c-1.397,0.275-2.793,0.559-4.189,0.84c-1.425,0.286-2.851,0.576-4.278,0.864c-0.842,0.171-1.684,0.34-2.525,0.51c-0.03,0.006-0.059,0.016-0.088,0.023c-0.509,0.141-0.693,0.374-0.717,0.9c-0.003,0.08-0.002,0.16-0.002,0.241c-0.002,4.782,0,9.565-0.003,14.345c0,0.773-0.086,1.536-0.396,2.255c-0.512,1.18-1.416,1.914-2.636,2.269c-0.645,0.186-1.307,0.293-1.976,0.316c-1.762,0.066-3.225-1.105-3.527-2.838c-0.261-1.494,0.422-3.098,2.119-3.816c0.656-0.275,1.344-0.427,2.036-0.571c0.527-0.111,1.056-0.211,1.582-0.324c0.703-0.153,1.07-0.595,1.1-1.313c0.003-0.094,0.002-0.183,0.002-0.277c0-5.44,0-10.882,0.003-16.323c0-0.227,0.023-0.46,0.077-0.681c0.128-0.524,0.502-0.823,1.003-0.953c0.469-0.122,0.947-0.207,1.422-0.304c1.347-0.272,2.694-0.543,4.042-0.814c1.393-0.282,2.784-0.562,4.176-0.843c1.23-0.249,2.46-0.501,3.693-0.743c0.404-0.08,0.814-0.161,1.22-0.194c0.57-0.045,0.961,0.313,1.019,0.886c0.014,0.136,0.022,0.274,0.022,0.411c0.003,3.513,0.003,7.024,0.002,10.535C41.784,32.336,41.786,35.836,41.783,39.335z'></path>
			</svg>
		)
	}
	const spotifyMask = () => {
		return (
			<svg className='icon-mask' viewBox='0 0 64 64'>
				<path d='M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z'></path>
			</svg>
		)
	}
	const facebookMask = () => {
		return (
			<svg className='icon-mask' viewBox='0 0 64 64'>
				<path d='M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z'></path>
			</svg>
		)
	}
	const instaMask = () => {
		return (
			<svg className='icon-mask' viewBox='0 0 64 64'>
				<path d='M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z'></path>
			</svg>
		)
	}

	const SpotifyEmbed = (props) => {
		return (
			<div>
				<Center>
					<iframe
						title='badge'
						src='https://open.spotify.com/follow/1/?uri=spotify:artist:4stOnS5u8dF0yGDimfH02w?si=YfOCYDerQf2gyYr2skaTng&amp;dl_branch=1&amp;size=detail&amp;theme=dark'
						width='240'
						height='56'
						scrolling='no'
						frameborder='0'
						style={{
							border: 'none',
							overflow: 'hidden',
							marginBottom: '40px',
						}}
						allowtransparency='true'
					></iframe>
				</Center>
				<Center>
					<iframe
						className='spotPlayer'
						title='player'
						src='https://open.spotify.com/embed/artist/4stOnS5u8dF0yGDimfH02w'
						width='350'
						height='390'
						style={{
							border: 'none',
							overflow: 'hidden',
							borderRadius: '5%',

							// margin: '40px'
							background: `linear-gradient(0deg, rgb(95, 23, 64), rgba(84, 13, 102, 0.671))`,
						}}
						frameborder='0'
						allowtransparency='true'
						allow='encrypted-media'
					></iframe>
				</Center>
			</div>
		)
	}

	const links = {
		headerMenu: {
			home: {
				url: null,
				text: 'Home',
				page: 'Home',
			},
			merch: {
				url: `http://merch.loveleach.com/`,
				text: 'Merch',
				page: 'Merch',
			},
			about: {
				url: null,
				text: 'About',
				page: 'About',
			},
			contact: {
				url: `mailto:stuart@loveleach.com`,
				text: 'Contact',
				page: 'Contact',
			},
		},
		footerMenu: {
			itunes: {
				image: iTunesMask(),
				url: 'https://itunes.apple.com/us/artist/leach/1004698381',
				text: 'itunes',
			},
			spotify: {
				image: spotifyMask(),
				url: 'https://bit.ly/leachmusic',
				text: 'spotify',
			},
			facebook: {
				image: facebookMask(),
				url: 'https://facebook.com/stuartleach',
				text: 'facebook',
			},

			instagram: {
				image: instaMask(),
				url: 'https://instagram.com/leachmusic',
				text: 'instagram',
			},
		},
	}

	const Footer = () => {
		return (
			<Center>
				<nav className='icons'>
					<Center>
						{Object.keys(links.footerMenu).map((x) => (
							<div
								onClick={() => {
									window.open(links.footerMenu[x].url)
								}}
							>
								{links.footerMenu[x].image}
							</div>

							// <a className='icons' href={links.footerMenu[x].url}>
							// 	{links.footerMenu[x].image}
							// </a>
						))}
					</Center>
				</nav>
			</Center>
		)
	}

	const aboutLeach = {
		image: {
			url: aboutImage,
			description: 'Stuart Leach',
		},
		bio: {
			text: AboutLeach(),
		},
	}

	const [currentPage, setPage] = React.useState('Home')

	const clickedPage = (page) => {
		if (page == 'Home' || page == 'About') {
			console.log('Page is ', page)
			setPage((currentPage) => page)
		}
		console.log(page)
	}

	const Home = (props) => {
		return (
			<Center>
				<SpotifyEmbed />
			</Center>
		)
	}
	const About = (props) => {
		return (
			<Center>
				<div className='aboutPage'>
					<Center>
						<img
							style={{ borderRadius: '5%' }}
							src={aboutLeach.image.url}
							alt={aboutLeach.image.description}
							width='300px'
						/>
					</Center>
					<Center>
						<div className='about'>
							<p>{aboutLeach.bio.text}</p>
						</div>
					</Center>
				</div>
			</Center>
		)
	}

	return (
		<ChakraProvider theme={theme}>
			<div className='bgOverlay'></div>
			<div id='outerWrapper'>
				<div id='container'>
					<Center>
						<nav>
							<Center>
								<ul>
									{Object.keys(links.headerMenu).map((x) => (
										<li>
											{links.headerMenu[x].url ? (
												<a
													className='item'
													href={
														links.headerMenu[x].url
													}
													target='_blank'
													rel='noopener noreferrer'
													onClick={() =>
														clickedPage(x)
													}
												>
													{links.headerMenu[x].text}
												</a>
											) : (
												<div
													className='item'
													onClick={() => {
														clickedPage(
															links.headerMenu[x]
																.page
														)
													}}
													style={
														currentPage ==
														links.headerMenu[x].page
															? {
																	opacity:
																		'.2',
																	color: 'white',
															  }
															: null
													}
												>
													{links.headerMenu[x].text}
												</div>
											)}
										</li>
									))}
								</ul>
							</Center>
						</nav>
					</Center>
					<div id='innerWrapper'>
						<section id='content'>
							{currentPage === 'Home' ? <Home /> : <About />}
						</section>
					</div>
					<Center style={{ paddingBottom: 100 }}>
						<Footer align='center' id='footer' />
					</Center>
				</div>
			</div>
		</ChakraProvider>
	)
}

export default Loveleach
