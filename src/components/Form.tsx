import React, { useState } from 'react';
import { TextField, Typography, Button, Grid } from '@material-ui/core';

export default function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitted value: ${inputValue}`);
    setInputValue('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="body1">Please enter your name:</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Name"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
