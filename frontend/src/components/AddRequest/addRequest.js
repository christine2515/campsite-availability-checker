import React, { useState, ChangeEvent, useEffect } from 'react';
import './addRequest.scss';
import { TextField, Button, OutlinedInput, InputLabel, Box, FormControl } from '@material-ui/core';
import DatePicker from '@material-ui/pickers';
import AdapterDateFns from '@date-io/date-fns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';



function AddRequest() {
  const [park, setPark] = useState('');
  const [start, setStart] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleClickSave = () => {
    // do something to save it
    setPark('');
    setStart('');
    setEquipment('');
    setEmail('');
    setPwd('');
  }


  return (
    <div className="container">
        <h2>Create a Request</h2>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Find a Park!</InputLabel>
            <OutlinedInput 
              id="park"
              value={park}
              onChange={(e) => setPark(e.target.value)}
              label="Find a Park"
              required
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Select your start date (YYYY-MM-DD)</InputLabel>
            <OutlinedInput 
              id="start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              label="Select start date"
              required
            />
          </FormControl>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select your start date"
              value={start}
              // onChange={(newValue) => {
              //   setStart(newValue);
              // }}
              onChange={setStart}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </Box>
        <Box>
          <FormControl variant="filled">
            <InputLabel>Select your equipment</InputLabel>
            <OutlinedInput 
              id="equipment"
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
    </div>
  );
  }
  
  export default AddRequest;