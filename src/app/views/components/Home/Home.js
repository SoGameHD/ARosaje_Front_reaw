import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, CssBaseline } from '@mui/material'
import Menu from '../Menu/Menu'
import BtnTakePicture from '../Photo/BtnTakePicture'
import Navigator from '../navigation/Navigator';
// import PlantPhotoTaker from '../Photo/Photo'

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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
        <BtnTakePicture />
      </Box>
      {/* <PlantPhotoTaker /> */}
    </Box>
  )
}

export default Home
