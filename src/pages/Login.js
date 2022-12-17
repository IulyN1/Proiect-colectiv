import { Button, FormControl, TextField } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BRAND, SIGN_IN } from '../constants';
import './Login.css';
import { login } from '../API';

const Login = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [errorMessage, setErrorMessage] = React.useState('');
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.clear();
	});

	const handleLogin = async () => {
		let localErrorMessage = '';
		if (email.trim() === '' || password.trim() === '') {
			setErrorMessage('Empty fields!');
			localErrorMessage = 'Empty fields!';
			return;
		} else {
			localErrorMessage = '';
			setErrorMessage('');
		}

		if (localErrorMessage.trim() === '') {
			login(email, password).then((res) => {
				if (res !== -1) {
					localStorage.setItem('userId', res);
					navigate('/products');
				} else {
					setErrorMessage('Wrong username or password!');
				}
			});
		}
	};

	return (
		<div className="LoginPage">
			<FormControl className="Login-formControl">
				<div className="Login-Title">
					<p>{BRAND}</p>
					<Link to={'/products'} style={{ color: 'black' }}>
						<SelfImprovementIcon className="Icon" />
					</Link>
				</div>
				<TextField
					className="Login-InputField"
					label="Email"
					variant="standard"
					required
					onChange={(e) => setEmail(e.target.value)}
				></TextField>
				<TextField
					className="Login-InputField"
					label="Password"
					variant="standard"
					required
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				></TextField>
				{errorMessage && <div className="Login-ErrorMessage">{errorMessage}</div>}
				<Link to="/register">
					<p>Don't have an account? Create one here</p>
				</Link>
				<Button className="Login-Button" onClick={handleLogin} sx={{ margin: 3, color: 'black' }}>
					{SIGN_IN}
				</Button>
			</FormControl>
		</div>
	);
};

export default Login;
