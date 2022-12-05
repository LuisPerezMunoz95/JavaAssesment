import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function StudentForm(props) {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [email, setEmail] = useState('');



const changeFirstName = (event) => {
	setFirstName(event.target.value);
};

const changeLastName = (event) => {
	setLastName(event.target.value);
};

const changePhoneNumber = (event) => {
	setPhoneNumber(event.target.value);
};

const changeEmail = (event) => {
	setEmail(event.target.value);
};



const transferValue = (event) => {
	event.preventDefault();
	const val = {
	firstName,
	lastName,
	phoneNumber,
	email
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setFirstName('');
	setLastName('');
	setPhoneNumber('');
	setEmail('');

};

return (
	 <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              value={firstName}

              onChange = {changeFirstName}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              value={lastName}

              onChange = {changeLastName}
            />
            <TextField
              required
              id="outlined-required"
              label="Phone Number"
              value={phoneNumber}

              onChange = {changePhoneNumber}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              value = {email}

              onChange = {changeEmail}
            />
            <Button sx={{m:2}} variant="outlined" onClick={transferValue}>SUBMIT</Button>

          </div>

        </Box>
);
}

export default StudentForm;
