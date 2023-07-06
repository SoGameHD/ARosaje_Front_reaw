/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, CssBaseline } from '@mui/material'
import Menu from '../Menu/Menu'
import BtnCreatePlant from '../PlantsCreate/BtnCreatePlant';
import Navigator from '../navigation/Navigator';
// import PlantPhotoTaker from '../Photo/Photo'
import { useLocation } from "react-router-dom"
import { checkToken } from '../../services/auth.service';

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const location = useLocation();
  // Vérifier si la route courante correspond à l'une des trois routes spécifiées
  const isCurrentRouteValid = ['/', '/mes-plantes', '/plantes-gardees'].includes(location.pathname);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isValid = checkToken();

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté ici
    const loggedIn = checkLoginStatus();
    setIsAuthenticated(loggedIn);
  }, []);

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  function checkLoginStatus() {
    // Vérifiez les informations d'authentification de l'utilisateur ici
    // Si l'utilisateur est connecté, renvoyez true
    // Sinon, renvoyez false
    if (isValid === true) {
      return true
    } else {
      return false;
    }
  }

  return (
    <Box>
      <CssBaseline />
      <Box component="main" sx={{
        display: 'flex',
        flexDirection: isLargeScreen ? 'unset' : 'column',
        flexGrow: 1,
        p: 3,
        }}
      >
        {isAuthenticated && (
          <Menu />
        )}
        <Navigator />
        {isCurrentRouteValid && (
          <BtnCreatePlant />
        )}
      </Box>
      {/* <PlantPhotoTaker /> */}
    </Box>
  )
}

export default Home
