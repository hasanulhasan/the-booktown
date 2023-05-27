import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward';

const Form = () => {
  const [value, setValue ]  = useState(10);
  return (
    <div>
      <form>
        <TextField name='name' type='text' variant='outlined' placeholder='Enter Name' sx={{ margin: '20px' }}></TextField><br />
        <TextField name='email' type='email' variant='outlined' placeholder='Enter Email' sx={{ margin: '20px' }}></TextField><br />
        <TextField name='password' type='password' variant='outlined' placeholder='Enter Password' sx={{ margin: '20px' }}></TextField><br />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={'nothing'}
            label="Age"
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" sx={{ margin: '20px' }} endIcon={<ArrowForward />}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;