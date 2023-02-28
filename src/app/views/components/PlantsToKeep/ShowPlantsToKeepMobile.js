import React, { useState } from "react";
import { IconButton, Typography, Box, Card, CardMedia, CardContent, Grid, List, ListItem, ListItemText, Divider, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from '@mui/icons-material/Add';
import Add from '@mui/icons-material/Add';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { useNavigate } from "react-router-dom";

const conseils = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  "Conseil 2",
  "Conseil 3",
  "Conseil 4",
  "Conseil 5",
  "Conseil 6",
  "Conseil 7",
  "Conseil 8",
];

const ShowPlantsToKeepMobile = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{
      display: {
        xs: "block",
        sm: "block",
        xl: "flex",
      },
    }}>
      <Grid container spacing={1} sx={{ mb: '8%', mt: '8%' }}>
        <Grid item>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIcon
            sx={{
              display: {
                xs: "bloc",
                sm: "block",
                md: "none",
                xl: "none",
              },
              marginRight: '5%',
            }}/>
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Plantes à garder
          </Typography>
          <Typography variant="subtitle1" gutterBottom >
            Plantes en attente d'un gardien
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{
        minHeight: 'calc(100vh - 100px)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F1F3E8",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}>
        <CardMedia
          component="img"
          sx={{
            height: 400,
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
          image="https://picsum.photos/800/300"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mt: '5%' }}>
            <Typography variant="h5" gutterBottom>
              Nom plante
            </Typography>
            <Typography variant="body1" gutterBottom>
              Description de plante
            </Typography>
          </Box>
          <Box sx={{ mt: '15%' }}>
            <Typography variant="h5" gutterBottom>
              Conseils botaniste
            </Typography>
            <List>
              {conseils.map((conseil, index) => (
                <>
                <ListItem key={index}>
                  <ListItemText primary={conseil} />
                </ListItem>
                <Divider />
                </>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: 'block',
          position: 'fixed',
          right: '2%',
          bottom: '2%'
        }}
      >
        <Button size="small" variant="contained"
          startIcon={<AddIcon color='#FFFFFF' />}
          onClick={handleClickOpen} 
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#386A20",
            borderRadius: 100,
            ":hover": {
              backgroundColor: '#FFFFFA',
              color: '#386A20',
            },
          }}
        >
          Ajouter un conseil
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
        <AddCommentOutlinedIcon fontSize="large"/>
      </DialogTitle>
      <DialogTitle sx={{ textAlign: 'center', pt: 0 }}>Ajouter un conseil</DialogTitle>
      <DialogContent sx={{ pt: '20px !important' }}>
        <TextField
          id="outlined-multiline-static"
          label="Conseil"
          multiline
          rows={6}
          sx={{
            width: 420
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: '#386A20' }}>Annulé</Button>
        <Button startIcon={<Add />} onClick={handleClose} sx={{ color: '#386A20' }}>Ajouter</Button>
      </DialogActions>
    </Dialog>
    </Box>
  );
}

export default ShowPlantsToKeepMobile