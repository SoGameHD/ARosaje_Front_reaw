import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import DrawerMenu from './DrawerMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#49454F',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const MobileMenu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{
        backgroundColor: '#E4EFDA',
        m: '3%',
        width: '92%',
        borderRadius: '28px',
      }}
      >
        <Toolbar sx={{
          minHeight: '48px'
        }}>
          <DrawerMenu />
          <Search>
            <StyledInputBase
              placeholder="Rechercher..."
              inputProps={{ 'aria-label': 'rechercher' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MobileMenu