import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, CssBaseline } from '@mui/material'
import Dashboard from '../Dashboard/Dashboard'
import Menu from '../Menu/Menu'
import BtnTakePicture from '../Photo/BtnTakePicture'
// import PlantsBeingKeptView from '../PlantsBeingKept/PlantsBeingKeptView'
// import PlantPhotoTaker from '../Photo/Photo'
// import UserPlantsView from '../UserPlants/UserPlantsView'

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: isLargeScreen ? 'unset' : 'column',
    }}>
      <CssBaseline />
      <Menu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <BtnTakePicture />
        <Dashboard />
        {/* <UserPlantsView /> */}
        {/* <PlantsBeingKeptView /> */}
      </Box>
      {/* <PlantPhotoTaker /> */}
    </Box>
  )
}

export default Home
