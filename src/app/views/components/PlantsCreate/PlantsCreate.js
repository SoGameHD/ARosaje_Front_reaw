import React, { useState, useRef } from 'react';
import { TextField, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';
import axios from 'axios';
import Webcam from 'react-webcam';


const PlantsCreate = () => {

  const titleRef = useRef('')
  const descRef = useRef('')
  const startDateRef = useRef('')
  const endDateRef = useRef('')
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const webcamRef = useRef(null);
  const [isEnabled, setEnable] = useState(false);



  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }

  const sendDataToApi = () => {
    const formData = new FormData();
    const plant = JSON.stringify({
      "title":titleRef.current.value
    })
    
    formData.append("ownerId", -1)
    formData.append("plant", plant)
    formData.append("file", dataURItoBlob(image));

    axios.post("http://localhost:8080/addPlant", formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const resetPicture = () => {
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

  return (
    <>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '90vh' }}
    >

          <Typography variant="h3" sx={{ position: 'absolute',top: '15%'}}>Ajouter une plante</Typography>
          <form>
            <TextField
              style={{ width: "100%" }}
              type="text"
              label="Nom"
              variant="outlined"
              inputRef={titleRef}
            />
            <br/>
            
            <TextField
              style={{ width: "100%", marginTop: "5%" }}
              type="text"
              multiline
              label="Description"
              variant="outlined"
              maxRows={3}
              inputRef={descRef}
            />
            <br/>
            
            <TextField
              style={{ width: "45%", marginTop: "5%", marginRight: "10%" }}
              label="Date début gardiennage"
              variant="outlined"
              inputRef={startDateRef}
            />
           
            <TextField
              style={{ width: "45%", marginTop: "5%" }}
              label="Date fin gardiennage"
              variant="outlined"
              inputRef={endDateRef}
            />

            <Button variant="contained" color="primary"
              sx={{ marginTop: "5%", marginLeft:"25%", width: "50%", background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
              ":hover": {
                backgroundColor: '#386A20',
                color: '#FFFFFA',
              },
              color: '#000000'}}
              onClick={() => setOpen(true)}
            >
            Prendre une photo  
            </Button>  
            
            <br />

            <Button variant="contained" color="primary" sx={{ width: "100%",marginTop: '10%', background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
          ":hover": {
            backgroundColor: '#386A20',
            color: '#FFFFFA',
          },
          color: '#000000'}}
          onClick={sendDataToApi}>
              Ajouter la plante
            </Button>
            
          </form>
     
    </Grid> 
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="false">
       
        <DialogTitle>
          Prendre une photo
        </DialogTitle>
        <DialogContent>
          {image ? (
            <div>
              <img src={image} alt="Prise de vue" />
              <DialogActions>
                <Button onClick={resetPicture} style={{ backgroundColor :"#386A20", color: "#FFFFFF"}}>
                  Reprendre la photo
                </Button>
                <Button onClick={() => setOpen(false)} style={{ backgroundColor :"#386A20", color: "#FFFFFF"}}>
                  Valider
                </Button>
              </DialogActions>
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
      </>
  );
}

export default PlantsCreate