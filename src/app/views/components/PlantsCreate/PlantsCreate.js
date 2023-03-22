import React, { useState, useRef } from 'react';
import { TextField, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';
import axios from 'axios';
import Webcam from 'react-webcam';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import moment from 'moment/moment';



const PlantsCreate = () => {

  const titleRef = useRef(null)
  const descRef = useRef(null)
  const [startDateRef, setStartValue] = useState(null);
  const [endDateRef, setEndValue] = useState(null);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const webcamRef = useRef(null);
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [pictureError, setPictureError] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }

  const sendDataToApi = () => {
    if(image!=null && titleRef.current.value != null && descRef.current.value && (moment(startDateRef?.format('MM/DD/YYYY')).isValid() && startDateRef != null) && (moment(endDateRef?.format('MM/DD/YYYY')).isValid() && endDateRef != null)) {
      const formData = new FormData();
      const plant = JSON.stringify({
        "title":titleRef.current.value,
        "description":descRef.current.value,
        "start_date":startDateRef,
        "end_date":endDateRef
      })
      
      formData.append("ownerId", -1)
      formData.append("plant", plant)
      formData.append("file", dataURItoBlob(image));
  
      axios.post("http://localhost:8080/addPlant", formData)
        .then(response => {
          window.location.reload(false);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setTitleError(titleRef.current.value === "" ? true : false)
      setDescError(descRef.current.value === "" ? true : false)
      setStartDateError((moment(startDateRef?.format('MM/DD/YYYY')).isValid() && startDateRef != null) ? false : true)
      setEndDateError((moment(endDateRef?.format('MM/DD/YYYY')).isValid() && endDateRef != null) ? false : true)
      setPictureError( image===null ? true : false)
      
    }
    
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

          <Typography variant="h3" sx={{paddingBottom:"5%"}}>Ajouter une plante</Typography>
          <form>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <TextField
              error = {titleError}
              style={{ width: "100%" }}
              type="text"
              label="Nom"
              variant="outlined"
              inputRef={titleRef}
            />
            <br/>
            
            <TextField
              error = {descError}
              style={{ width: "100%", marginTop: "5%" }}
              type="text"
              multiline
              label="Description"
              variant="outlined"
              maxRows={3}
              inputRef={descRef}
              
            />
            <br/>

            <DatePicker 
              sx={{ width: "45%", marginTop: "5%", marginRight: "10%",
              ...(startDateError === true && {
                border: '1px solid red', 
                borderRadius: 1
              })
            }}
              label="Date début gardiennage" 
              value={startDateRef}
              onChange={(newValue) => setStartValue(newValue)}
              format="DD-MM-YYYY"
            />    
         
            <DatePicker 
              sx={{ width: "45%", marginTop: "5%",  
              ...(endDateError === true && {
                border: '1px solid red', 
                borderRadius: 1
              })
            }}
              label="Date fin gardiennage" 
              value={endDateRef}
              onChange={(newValue) => setEndValue(newValue)}
              format="DD-MM-YYYY"
            />
    
   
            
            <Button variant="contained" color="primary"
              sx={{ ...(pictureError === true && {
                border: '1px solid red', 
                borderRadius: 1
              }),
              marginTop: "5%", marginLeft:"25%", width: "50%", background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
              ":hover": {
                backgroundColor: '#386A20',
                color: '#FFFFFA',
                
              },
              color: '#000000'}}
              onClick={() => setOpen(true)}
            >
            { image == null ? "Prendre une photo" : "Voir la photo" }
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
            </LocalizationProvider>
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