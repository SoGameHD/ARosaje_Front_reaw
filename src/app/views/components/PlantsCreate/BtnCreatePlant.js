import React, { useState,useEffect } from 'react';
import { Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom'

const BtnCreatePlant = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <>
      <div>
        <Button onClick={()=>navigate("/ajouter-une-plante")} color="primary"  variant="contained"
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
          { isLargeScreen ? <AddIcon fontSize="large" /> : <AddIcon fontSize="medium" /> }
        </Button>
      </div>
    
  </>
);
};

export default BtnCreatePlant; 