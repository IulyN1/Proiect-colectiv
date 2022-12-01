import {
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import {BRAND, REGISTER} from "../constants";
import React from 'react';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPass, setRepeatPass] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();


    const handleRegister = () => {
        let localErrorMessage;
        if (email.trim() === "" ||
            password.trim() === "" ||
            repeatPass.trim() === "" ||
            name.trim() === ""
        ) {
            localErrorMessage = "Empty fields!";
            setErrorMessage("Empty fields!");
            return;
        }
        else if (password !== repeatPass) {
            localErrorMessage = "The passwords are not the same!";
            setErrorMessage("The passwords are not the same");
            return;
        }
        else {
            setErrorMessage("");
            localErrorMessage = "";
        }

        let user = {
            'Name': name,
            'Email': email,
            'Password': password
        }

        console.log(user);

        if (!localErrorMessage.trim()) {
            navigate("/products");
        }
    }

    return(
        <div className="LoginPage">

            <FormControl className="Login-formControl">
                <div className="Login-Title">
                    <p>{BRAND}</p>
                    <SelfImprovementIcon className="Icon" />
                </div>

                <TextField
                    className="Login-InputField"
                    label='Name'
                    variant='standard'
                    required
                    onChange={(e) => setName(e.target.value)}>
                </TextField>

                <TextField
                    className="Login-InputField"
                    label='Email'
                    variant='standard'
                    required
                    onChange={(e) => setEmail(e.target.value)}>
                </TextField>

                <FormControl
                    sx={{ marginBottom: '30px', width: '250px' }}
                    variant="standard"
                    required
                >
                    <InputLabel>Password</InputLabel>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(ev)=>{
                            setPassword(ev.target.value);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={(ev) => {setShowPassword(!showPassword)}}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <FormControl
                    sx={{ marginBottom: '30px', width: '250px' }}
                    variant="standard"
                    required
                >
                    <InputLabel>Repeat password</InputLabel>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={repeatPass}
                        onChange={(ev)=>{
                            setRepeatPass(ev.target.value);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={(ev) => {setShowPassword(!showPassword)}}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Repeat password"
                    />
                </FormControl>

                {errorMessage && <div className="Login-ErrorMessage">{errorMessage}</div>}
                <Button
                    className="Login-Button"
                    onClick={handleRegister}
                    sx={{ margin: 3, color: 'black' }}
                >
                    {REGISTER}
                </Button>
            </FormControl>
        </div>
    );
}

export default Register