import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)({
  margin: '2rem',
}) as typeof Card;

export default function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://wa.me/${inputValue}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <CustomCard>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              WhatsApp Anyone
            </Typography>
            <Typography variant="body1">
              Are you sick of having to add people to contacts before you
              message them on WhatsApp? Enter the phone number of the person you
              wish to contact in the following format: area code + phone number:
              6591234567
            </Typography>
          </CardContent>
          <CardContent>
            <TextField
              id="outlined-helperText"
              label="Number"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              helperText="Do not include the +"
            />
          </CardContent>

          <CardContent>
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </CardContent>
        </form>
      </CustomCard>
    </div>
  );
}
