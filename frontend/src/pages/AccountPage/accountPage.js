import { useState, React } from 'react';
import { useSelector } from 'react-redux'
import { Button, OutlinedInput, InputLabel, Box, FormControl } from '@material-ui/core';
import './accountPage.scss';

function AccountPage() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  // const account = useState('');
  // const [accountReqs, setAccountReqs] = useState([]);
  // see postman display - a list of dicts

  const handleClickSave = () => {
    // var urlencoded = new URLSearchParams();

    var requestOptions = {
      mode: 'no-cors',
      method: 'GET',
      // body: urlencoded,
      redirect: 'follow'
    };

    const url = "http://localhost:5000/accounts?email=" + email + "&password=" + pwd;

    fetch(url, requestOptions)
      .then(response => response.text())
      // ^ promise
      .then(result => console.log(result))
      // ^ "output"...currently undefined :(
      .catch(error => console.log('error', error));

  }

  return (
    <div className="container">
      <h2>View your requests</h2>
      <Box>
        <FormControl variant="filled">
          <InputLabel>Enter your email</InputLabel>
          <OutlinedInput 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Enter email"
            required
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl variant="filled">
          <InputLabel>Enter your password</InputLabel>
          <OutlinedInput 
            id="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            label="Enter password"
            required
          />
        </FormControl>
      </Box>
      <Button onClick={handleClickSave}> 
        Submit Request
      </Button>
    </div>
  );
  }
  
  export default AccountPage;