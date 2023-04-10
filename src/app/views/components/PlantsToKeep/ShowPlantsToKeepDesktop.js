import Add from '@mui/icons-material/Add';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import React, { useRef, useState } from "react";
import axios from 'axios'

const ShowPlantsToKeepDesktop = (props) => {
  const [open, setOpen] = useState(false);
  const { plant } = props

  const adviceRef = useRef('')

  const sendDataToApi = () => {
    const formData = new FormData();
    const advice = JSON.stringify({
      "content": adviceRef.current.value
    })
    
    formData.append("plantId", plant.id)
    formData.append("botanistId", -1)
    formData.append("advice", advice)

    const url = `/addAdvice`;
    axios.post(`${process.env.REACT_APP_API_URL}`.concat(url), formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      setOpen(false)
      window.location.reload()
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pathPlant = 'http://' + plant.pictures[0]

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ ml: "4%" }}>
          <Typography variant="h1" sx={{ mb: "1%" }}>
            Plantes à garder
          </Typography>
          <Typography variant="h4" gutterBottom >
          Plantes en attente d'un gardien
          </Typography>
        </Box>
        <Card sx={{ display: 'flex', borderRadius: "28px", margin: "3% 8% 3% 0", backgroundColor: "#EFF3E9" }}>
          <CardMedia
            component="img"
            sx={{ 
              width: {
                sm: 300,
                md: 390,
                lg: 'auto'
              },
              height: {
                sm: 345,
                md: 445,
                lg: 'auto'
              },
              borderRadius: "28px" }} 
            image={pathPlant}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection:'column', pl: "6%", pt: "6%" }}>
              <Typography component="div" variant="h4">
                {plant.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ mt: "2%" }}>
                Du {plant.start_date} Au {plant.end_date}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ mt: "6%" }}>
                {plant.description}
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Box sx={{ width: "85%" }}>
          <Typography variant="h2" sx={{ mb: "1%", ml: "4%" }}>
            Conseils botaniste
          </Typography>
          <List>
            {plant.advices.map(advice => (
              <>
              <ListItem key={advice.id}>
                <ListItemText primary={advice.content} />
              </ListItem>
              <Divider />
              </>
            ))}
          </List>
        </Box>
        <Button
          startIcon={<AddCommentRoundedIcon />}
          size="large"
          variant="contained"
          onClick={handleClickOpen} 
          style={{
            position: 'fixed',
            right: '6%',
            bottom: '8%',
            borderRadius: 16,
            background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
            color: '#000000',
            elevation: 5,
        }}>
          Ajouter un conseil
        </Button>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
          <AddCommentOutlinedIcon fontSize="large"/>
        </DialogTitle>
        <DialogTitle sx={{ textAlign: 'center', pt: 0 }}>Ajouter un conseil</DialogTitle>
        <DialogContent sx={{ pt: '20px !important', width: 420 }}>
          <TextField
            id="outlined-multiline-static"
            label="Conseil"
            multiline
            sx={{ width: '100%' }}
            rows={6}
            inputRef={adviceRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#386A20' }}>Annulé</Button>
          <Button startIcon={<Add />} sx={{ color: '#386A20' }} onClick={sendDataToApi}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ShowPlantsToKeepDesktop