import  { useEffect,  useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth'

const LOGIN_URL = '/auth/authenticate';

const LoginForm = () => {
  const { setAuth } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || {pathname: "/dashboard"} // direct to the page happen here

  useEffect(()=>{
    setErrMsg('');
  },[email,password])



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try{
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({email:email,password: password}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        );
        console.log(JSON.stringify(response?.data), "from loginForm.jsx");
        setAuth(response?.data)

        
        setEmail('');
        setPassword('');
        navigate(from, {replace: true});  //navigate happen here

    } catch(err){
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 403) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }

    }
    }


  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        margin="normal"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7B809A', // Silver outline for text field
          },
          '& input': {
            height: '15px', // Adjust the height as needed
            width: '100%',
            color: '#7B809A', // Adjust the width as needed
          },
          '& .MuiInputLabel-root': {
            color: '#7B809A', // Set the color of the label
          },
          fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
        }}
        value={email}
        onChange={handleEmailChange}
        required
      />
      <TextField
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7B809A', // Silver outline for text field
          },
          '& input': {
            height: '15px', // Adjust the height as needed
            width: '100%',
            color: '#7B809A', // Adjust the width as needed
          },
          '& .MuiInputLabel-root': {
            color: '#7B809A', // Set the color of the label
          },
          fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
        }}
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <Button
        variant="text"
        color="primary"
        sx={{
          width: '100%', // Make the button take the full width
          marginLeft: '30%', // Move the button to the right
          marginRight: '0', // No margin on the right side
          textTransform: 'none', // Disable capitalization of the button text
          color: '#1A73E8', // Fill color for the button text
          fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
        }}
      >
        Forgot Password
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          backgroundColor: '#2C85EB',
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          fontWeight: 'regular',
        }}
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
