import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <img
            src={Logo}
            alt="My App Icon"
            style={{ width: '2rem', marginRight: '1rem' }}
          />{' '}
          {/* App icon */}
          <Typography variant="h5">roblkdeboer</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
