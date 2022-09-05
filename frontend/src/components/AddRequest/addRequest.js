import React, { useState, ChangeEvent, useEffect } from 'react';
import './addRequest.scss';
import { TextField, Button, OutlinedInput, InputLabel, Box, FormControl, styled } from '@material-ui/core';
import DatePicker from '@material-ui/pickers';
import AdapterDateFns from '@date-io/date-fns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';



function AddRequest() {
  const [park, setPark] = useState('');
  const [start, setStart] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [message, setMessage] = useState("");

  const handleClickSave = async () => {
    const sendRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': '/*/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
      },
      body: JSON.stringify({
        park: park,
        start: start,
        equipment: [equipment],
        email: email,
        password: pwd,
      }),
    };

    alert(sendRequest.body);

    const response = await fetch('http://localhost:5000/accounts', sendRequest);
    alert(response.status);
    if (response === "1") {
      setPark('');
      setStart('');
      setEquipment('');
      setEmail('');
      setPwd('');
      setMessage("Request created successfully.");
    } else {
      setMessage(response.statusText);
    }
  }


  return (
    <div className="container">
        <h2>Create a Request</h2>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Find a Park!</InputLabel>
            <OutlinedInput 
              id="park"
              name="park"
              value={park}
              onChange={(e) => setPark(e.target.value)}
              label="Find a Park"
              required
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Select your start date (MM-DD-YYYY)</InputLabel>
            <OutlinedInput 
              id="start"
              name="start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              label="Select start date"
              required
            />
          </FormControl>
          {/* <DatePicker
            name="startDate"
            selected={date}
            onChange={this.handleDate(date)}
            minDate={new Date()}
            timeIntervals={15}
            dateFormmat="mm/dd/yyyy"
            autoComplete="off"
            className={styled.datePicker}
          /> */}
        </Box>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Select your equipment</InputLabel>
            <OutlinedInput 
              id="equipment"
              nae="equipment"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              label="Select your equipment"
              required
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Input your email</InputLabel>
            <OutlinedInput 
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Input your email"
              required
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Input a password</InputLabel>
            <OutlinedInput 
              id="password"
              name="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              label="Input a password"
              required
            />
          </FormControl>
        </Box>
        <Button onClick={handleClickSave}> 
          Submit Request
        </Button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
  );
  }
  
  export default AddRequest;