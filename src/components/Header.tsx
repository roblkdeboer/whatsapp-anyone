import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from '../assets/logo.png';
import React from 'react';

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar>
        <img
          src={Logo}
          alt="My App Icon"
          style={{ width: '2rem', marginRight: '1rem' }}
        />{' '}
        {/* App icon */}
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
