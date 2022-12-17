import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { BRAND, REGISTER } from '../constants';
import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { postUser } from '../API';

const Register = () => {
	const [email, setEmail] = React.useState('');
	const [name, setName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [repeatPass, setRepeatPass] = React.useState('');
	const [errorMessage, setErrorMessage] = React.useState('');
	const [showPassword, setShowPassword] = React.useState(false);
	const navigate = useNavigate();

	const handleRegister = () => {
		let localErrorMessage;
		if (email.trim() === '' || password.trim() === '' || repeatPass.trim() === '' || name.trim() === '') {
			localErrorMessage = 'Empty fields!';
			setErrorMessage('Empty fields!');
			return;
		} else if (password !== repeatPass) {
			localErrorMessage = 'The passwords are not the same!';
			setErrorMessage('The passwords are not the same');
			return;
		} else {
			setErrorMessage('');
			localErrorMessage = '';
		}

		if (!localErrorMessage.trim()) {
			postUser(name.trim(), email.trim(), password.trim());
			navigate('/Register');
		}
	};

	return (
		<div className="RegisterPage">
			<FormControl className="Register-formControl">
				<div className="Register-Title">
					<p>{BRAND}</p>
					<Link to={'/products'} style={{ color: 'black' }}>
						<SelfImprovementIcon className="Icon" />
					</Link>
				</div>

				<TextField
					className="Register-InputField"
					label="Name"
					variant="standard"
					required
					onChange={(e) => setName(e.target.value)}
				></TextField>

				<TextField
					className="Register-InputField"
					label="Email"
					variant="standard"
					required
					onChange={(e) => setEmail(e.target.value)}
				></TextField>

				<FormControl sx={{ marginBottom: '30px', width: '250px' }} variant="standard" required>
					<InputLabel>Password</InputLabel>
					<Input
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={(ev) => {
							setPassword(ev.target.value);
						}}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={(ev) => {
										setShowPassword(!showPassword);
									}}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>

				<FormControl sx={{ marginBottom: '30px', width: '250px' }} variant="standard" required>
					<InputLabel>Repeat password</InputLabel>
					<Input
						type={showPassword ? 'text' : 'password'}
						value={repeatPass}
						onChange={(ev) => {
							setRepeatPass(ev.target.value);
						}}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={(ev) => {
										setShowPassword(!showPassword);
									}}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Repeat password"
					/>
				</FormControl>

				{errorMessage && <div className="Register-ErrorMessage">{errorMessage}</div>}
				<Link to="/login">
					<p>Already have an account? Log in here</p>
				</Link>
				<Button className="Register-Button" onClick={handleRegister} sx={{ margin: 3, color: 'black' }}>
					{REGISTER}
				</Button>
			</FormControl>
		</div>
	);
};

export default Register;
