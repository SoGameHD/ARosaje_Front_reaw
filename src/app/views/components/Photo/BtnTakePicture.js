import { useEffect, useState } from 'react';
import { Button, IconButton } from "@mui/material"
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useMediaQuery } from 'react-responsive';

const BtnTakePicture = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <>
    <Button color="primary" aria-label="ajout photo" variant="contained"
    sx={{
      position: 'fixed',
      right: '8%',
      bottom: '8%',
      borderRadius: "24%",
      background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
      ":hover": {
        backgroundColor: '#386A20',
        color: '#FFFFFA',
      },
      color: '#000000',
      elevation: 5,
      width: {
        xs: "64px",
        sm: "74px",
        md: "74px",
      },
      height: {
        xs: "64px",
        sm: "74px",
        md: "74px",
      },
    }}>
      { isLargeScreen ? <AddAPhotoOutlinedIcon fontSize="large" /> : <AddAPhotoOutlinedIcon fontSize="medium" /> }
    </Button>
    </>
  )
}

export default BtnTakePicture