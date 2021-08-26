// import { render } from '@testing-library/react';
import React, { useState, setState } from 'react'
import PropTypes from 'prop-types'
import {
	Box,
	Button,
	Heading,
	SimpleGrid,
	Text,
	useColorModeValue,
	VisuallyHidden,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'

const Login = (props) => {
	const [show, setShow] = React.useState(false)
	const handleClick = () => setShow(!show)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<Box className='login'>
			<h2>user login</h2>
			<InputGroup>
				<Input variant='' placeholder='email' />
				<Input
					pr='4.5rem'
					variant='filled'
					type={show ? 'text' : 'password'}
					placeholder='Enter password'
				/>
				<InputRightElement width='4.5rem'>
					<Button h='1.75rem' size='sm' onClick={handleClick}>
						{show ? 'Hide' : 'Show'}
					</Button>
				</InputRightElement>
			</InputGroup>
			<p>sign in to create new entry</p>
			<button
				className='facebook'
				onClick={() => props.authenticate('Facebook')}
			>
				<button
					className='createAccount'
					onClick={props.createAnAccount}
				>
					Create an Account
				</button>
				Log in with facebook
			</button>
		</Box>
	)
}

export default Login
