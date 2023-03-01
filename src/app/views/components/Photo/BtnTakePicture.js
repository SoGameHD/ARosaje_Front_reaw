import React, { useState,useEffect } from 'react';
import Webcam from 'react-webcam';
import { Button, colors} from "@mui/material"
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useMediaQuery } from 'react-responsive';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Typography } from '@mui/material';
import axios from 'axios';

const BtnTakePicture = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);

    const formData = new FormData();
    formData.append("plantId",1)
    formData.append("userId", -1)
    formData.append("file", dataURItoBlob(imageSrc));
    axios.post("http://localhost:8080/addPicture", formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }
  const reset = () => {
    setImage(null);
  };

  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <>
      <div>
        <Button onClick={() => setOpen(true)} color="primary" aria-label="ajout photo" variant="contained"
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
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          Prendre une photo
        </DialogTitle>
        <DialogContent>
          {image ? (
            <div>
              <img src={image} alt="Prise de vue" />
              <Button onClick={reset} style={{ backgroundColor :"#386A20", color: "#FFFFFF"}}>
                Reprendre la photo
              </Button>
            </div>
          ) : (
            <div>
              <DialogContentText>
                Veuillez prendre une photo en cliquant sur le bouton ci-dessous.
              </DialogContentText>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <DialogActions>
                <Button onClick={() => setOpen(false)} style={{ backgroundColor :"#386A20", color: "#FFFFFF"}}>
                  Annuler
                </Button>
                <Button onClick={capture} color="primary" variant="contained" style={{ backgroundColor :"#386A20", color: "#FFFFFF"}}>
                  <Typography>Prendre une photo</Typography>
                </Button>
              </DialogActions>
            </div>
          )}
        </DialogContent>
      </Dialog>
    
      </div>
    
  </>
);
};

export default BtnTakePicture; 