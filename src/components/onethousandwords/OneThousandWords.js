import React, { useState, useRef, useEffect } from 'react'
import Typewriter from './Typewriter'
import ProgressBar from './ProgressBar'
import Stats from './Stats'
import Footer from './Footer'
import {
	ChakraProvider,
	extendTheme,
	Center,
	Box,
	Circle,
	Button,
} from '@chakra-ui/react'
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react'
import Login from './Login'

// import '../../css/onethousandwords.css'

const theme = extendTheme({
	styles: {
		// Page-wide styles
		global: {
			'html, body': {
				color: 'blue.600',
				lineHeight: '1.4',
				backgroundColor: '#d0eaff',
				display: 'block',
				height: '100%',
				background: `linear-gradient(0deg,  rgba(135, 169, 236, 0.5),rgba(218, 194, 119, 0.377))`,
			},
		},

		body: {
			/* background-color: var(--main-bg-color-dark); */
			// background-color: var(--dark-bg-color);
			fontFamily: 'Roboto, Arial, sans-serif',
			margin: 0,
			padding: 0,
			overflowX: 'hidden',
			overflowY: 'hidden',
		},

		'.vertical-center': {
			minHeight: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
		},

		form: {
			display: 'block',
		},

		'.Footer': {
			// display: 'flex',
			// marginTop: '70vh',
			a: {
				// fontSize: '30px',
				// float: 'none',
				padding: '20px',
				// display: 'block',
				opacity: '0.3',
				transition: '.5s',
				_hover: {
					opacity: 1,
					transition: '.5s',
				},
			},
		},

		h2: {
			color: 'white',
		},

		'.btn': {
			backgroundColor: 'rgb(36, 44, 114)' /* Green */,
			position: 'relative',
			border: 'none',
			color: 'white',
			padding: '15px 32px',
			textAlign: 'center',
			textDecoration: 'none',
			letterSpacing: '2px',
			textTransform: 'lowercase',
			display: 'inline-block',
			fontSize: '.9em',
			width: '40vh',
			opacity: '.4',
			transition: '.5s',
			borderRadius: '10%',
			_hover: {
				opacity: '.5',
				transition: '.5s',
			},
		},

		'.stats': {
			right: '20%',
			left: '20%',
			marginTop: '20vh',
			bottom: '25%',
			listStyleType: 'none',
			position: 'fixed',
			marginTop: '10vh',
			transition: '2s',
			display: 'flex',
			justifyContent: 'center',
			'.btn': {
				opacity: '0',
			},
		},

		'#progress': {
			border: 'none',
			width: '100vh ',
			position: 'absolute',
			height: '2%',
			zIndex: '-1',
			_value: {
				color: 'rgba(218, 194, 119, 0.377)',
			},
		},

		'.input-wrapper': {
			width: '100%',
			position: 'fixed',
		},

		// input: {
		// 	'.main': {
		// 		'.centered': {
		// 			// color: '#ddd',
		// 		},
		// 	},
		// },

		img: {
			display: 'inline',
		},
		a: {
			textDecoration: 'none',
			color: 'white',
			transition: 'color 0.1s ease',
			_hover: {
				color: '#9b9b9b',
			},
		},
	},
})

const FunctionComp = (props) => {
	const [age, setAge] = React.useState(1)

	React.useEffect(() => {}, [])

	React.useEffect(() => {}, [age])

	return (
		<div style={props.style} onClick={() => setAge((x) => x + 7)}>
			My age is {age}
		</div>
	)
}

const OneThousandWords = (props) => {
	const [entry, setEntry] = useState('entry')
	const [wordCount, setWordCount] = useState(0)
	const [finishedEarly, finishEarly] = useState(false)
	const [wordLimit, setWordLimit] = useState(1000)
	const [wordsCounted, setWordsCounted] = useState('wordsCounted')
	const [wordsLeft, setWordsLeft] = useState('wordsLeft')
	const [charCount, setCharCount] = useState(0)
	const [contact, setContact] = useState({
		github: 'https://github.com/stuartleach',
		email: 'mailto:jstuartleach@gmail.com',
		linkedin: 'https://www.linkedin.com/in/stuart-leach-69182761/',
		spotify: 'http://bit.ly/leachmusic',
	})

	const handleChange = () => {
		setWordCount(() => entry.split(' ').length)

		// wordCount = entry.split(' ').length;
		console.log('hi')
		document.title = wordsLeft ? wordsLeft + ' words remain' : ''
	}

	return (
		<ChakraProvider theme={theme}>
			<div className='OneThousandWords'>
				{/* <FunctionComp /> */}
				<ProgressBar wordCount={wordCount} wordLimit={wordLimit} />
				<Box textAlign='right' bg='blue.200' w='50vh' p='20px'>
					<Login />
				</Box>
				<div className='vertical-center'>
					{wordCount >= 1000 || finishedEarly ? (
						<Center position='fixed' zIndex='500'>
							<Center w='100vw' h='80vh'>
								<Alert
									status='success'
									variant='subtle'
									flexDirection='column'
									justifyContent='center'
									textAlign='center'
									height='400px'
									w='500px'
									color='whiteAlpha.800'
									borderRadius='2xl'
									bg='linear-gradient(0deg,  rgb(135, 169, 236),rgb(218, 193, 119))'
								>
									<AlertIcon size='40px' mr={0} />
									<AlertTitle mt={4} mb={1} fontSize='lg'>
										<h2 style={{ fontSize: '1.5rem' }}>
											Morning Pages completed!
										</h2>
										<Center>
											<Box
												textAlign='left'
												paddingTop='20px'
												paddingBottom='20px'
											>
												<p>Total words: {wordCount}</p>
												<p>
													Total characters:{' '}
													{charCount}
												</p>
												<Center marginTop='20px'>
													<Button
														color='blackAlpha.500'
														onClick={() =>
															window.location.reload()
														}
													>
														Restart?
													</Button>
												</Center>
											</Box>
										</Center>
									</AlertTitle>
									<AlertDescription maxWidth='sm'></AlertDescription>
								</Alert>
							</Center>
						</Center>
					) : (
						<></>
					)}
					<div className='input-wrapper container'>
						<Center>
							<Typewriter
								entry={entry}
								wordLimit={wordLimit}
								wordCount={wordCount}
								wordsLeft={wordsLeft}
								setEntry={setEntry}
								setWordCount={setWordCount}
								setWordsLeft={setWordsLeft}
								charCount={charCount}
								setCharCount={setCharCount}
							/>
						</Center>

						<Stats
							finishEarly={finishEarly}
							finishedEarly={finishedEarly}
							entry={entry}
							wordLimit={wordLimit}
							wordCount={wordCount}
							wordsLeft={wordsLeft}
							setEntry={setEntry}
							setWordCount={setWordCount}
							setWordsLeft={setWordsLeft}
							wordsCounted={wordsCounted}
							charCount={charCount}
						/>
					</div>
					<Center>
						<Box position='absolute' bottom='20px'>
							<Footer
								github={contact.github}
								emailContact={contact.emailContact}
								linkedin={contact.linkedin}
								spotify={contact.spotify}
							/>
						</Box>
					</Center>
				</div>
			</div>
		</ChakraProvider>
	)
}
export default OneThousandWords
