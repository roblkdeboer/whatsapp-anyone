import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import Logo from '../assets/logo.png';
import React from 'react';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={Logo}
            alt="My App Icon"
            style={{ width: '2rem', marginRight: '1rem' }}
          />{' '}
          {/* App icon */}
          <Typography variant="h5">Whatsapp Anyone</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
