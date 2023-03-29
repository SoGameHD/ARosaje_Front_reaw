import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, CssBaseline } from '@mui/material'
import Menu from '../Menu/Menu'
import BtnCreatePlant from '../PlantsCreate/BtnCreatePlant';
import Navigator from '../navigation/Navigator';
// import PlantPhotoTaker from '../Photo/Photo'
import { useLocation, useNavigate } from "react-router-dom"

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const location = useLocation();
  // Vérifier si la route courante correspond à l'une des trois routes spécifiées
  const isCurrentRouteValid = ['/', '/mes-plantes', '/plantes-gardees'].includes(location.pathname);



  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

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
        <Menu />
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
