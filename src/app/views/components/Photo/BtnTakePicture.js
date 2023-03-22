import React, { useState,useEffect } from 'react';
import Webcam from 'react-webcam';
import { Button, colors} from "@mui/material"
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useMediaQuery } from 'react-responsive';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const BtnTakePicture = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <>
      <div>
        <Button onClick={()=>navigate("/ajouter-une-plante")} color="primary" aria-label="ajout photo" variant="contained"
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
      </div>
    
  </>
);
};

export default BtnTakePicture; 