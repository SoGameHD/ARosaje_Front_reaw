import * as React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import PlantIcon from './svg/PlantIcon'
import HomeIcon from './svg/HomeIcon'
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Divider, IconButton } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';

const DrawerMenu = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
    >
      <List>
        {['ARosa-je'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon sx={{ px: 2.5, }}>
              <PlantIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
            <IconButton onClick={toggleDrawer("left", false)} >
                <CloseRoundedIcon />
              </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{  py: 5 }}>
        {[{'Accueil':'/'}, {'Mes Plantes':'/mes-plantes'}, {'Plantes gardées':'/plantes-gardees'}].map((item, index) => {
          const text = Object.keys(item)[0];
          const path = Object.values(item)[0];
          return (
            <Link to={path} key={text} onClick={() => navigate(path)} className='no-underline'>
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: 'center',
                    px: 2.5,
                    mb: 4,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0
                    ?
                    <HomeIcon fontSize="small" />
                    :
                    index === 1
                    ?
                    <PlantIcon fontSize="small" />
                    :
                    <YardOutlinedIcon fontSize="small" />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ px: 2.5, color:'#43493E' }} />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        })}
      </List>
    </Box>
  );

  return (
    <React.Fragment key="left">
      <IconButton
        size="large"
        edge="start"
        color="#49454F"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
      anchor="left"
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
      PaperProps={{ sx: {
        backgroundColor: '#EBEFE2',
      } }}>
        {list("left")}
      </Drawer>
    </React.Fragment>
  )
}

export default DrawerMenu
