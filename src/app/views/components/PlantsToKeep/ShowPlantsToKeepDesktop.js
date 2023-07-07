import Add from '@mui/icons-material/Add';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import React, { useState } from "react";
import { Form, Field } from 'react-final-form';
import { postAdvice, createConversation } from '../../services/Api';
import {getCurrentUser} from '../../services/auth.service';

const ShowPlantsToKeepDesktop = (props) => {
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const { plant } = props
  const [user, setUser] = useState(null)

  getCurrentUser().then(response => {
    setUser(response.id)
  })

  function post(values) {
    const data = {
      "content": JSON.stringify(values.message, null, 2)
    };
    const idPlant = plant.id
    postAdvice(idPlant, data).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      setOpen(false)
      window.location.reload()
  }

  function postMessage() {

    createConversation(plant.title, user, plant.owner_user.id, "test").then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
    setOpenMessage(false)
      
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenMessage = () => {
    setOpenMessage(true);
  };

  const handleCloseMessage = () => {
    setOpenMessage(false);
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
        <Button
          size="large"
          variant="contained"
          onClick={handleClickOpenMessage} 
          style={{
            position: 'fixed',
            right: '25%',
            bottom: '8%',
            borderRadius: 16,
            background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
            color: '#000000',
            elevation: 5,
        }}>
          Envoyer un message
        </Button>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
          <AddCommentOutlinedIcon fontSize="large"/>
        </DialogTitle>
        <DialogTitle sx={{ textAlign: 'center', pt: 0 }}>Ajouter un conseil</DialogTitle>
        <Form
          onSubmit={post}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent sx={{ pt: '20px !important', width: 420 }}>
                <Field name="message" component="textarea" rows={6} placeholder="Conseil" />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} sx={{ color: '#386A20' }}>Annuler</Button>
                <Button startIcon={<Add />} sx={{ color: '#386A20' }} type="submit">Ajouter</Button>
              </DialogActions>
            </form>
          )}
        />
      </Dialog>
      <Dialog open={openMessage} onClose={handleCloseMessage}>
        <DialogTitle sx={{ textAlign: 'center', pt: 0 }}>Envoyer un message</DialogTitle>
        <Form
          onSubmit={postMessage}
          render={({ handleSubmitMessage }) => (
            <form onSubmit={handleSubmitMessage}>
              <DialogContent sx={{ pt: '20px !important', width: 420 }}>
                <Field name="message" component="textarea" rows={6} placeholder="Message" />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseMessage} sx={{ color: '#386A20' }}>Annuler</Button>
                <Button onClick={postMessage} startIcon={<Add />} sx={{ color: '#386A20' }} >Envoyer</Button>
              </DialogActions>
            </form>
          )}
        />
      </Dialog>
    </>
  )
}

export default ShowPlantsToKeepDesktop