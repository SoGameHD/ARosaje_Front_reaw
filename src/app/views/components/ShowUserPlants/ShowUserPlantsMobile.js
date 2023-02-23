import React from "react";
import { IconButton, Typography, Box, Card, CardMedia, CardContent, Grid, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

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

const ShowUserPlantsMobile = () => {

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
          <IconButton>
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
            Mes plantes
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
          <Button size="small" variant="outlined" startIcon={<EditIcon sx={{ color: "#43493E" }} />} 
          sx={{
            color: "#43493E",
            backgroundColor: "#F1F3E8",
            ":hover": {
              borderColor: '#386A20',
              color: '#386A20',
            },
            mr: '6px',
          }}>
          Modifier
          </Button>
          <Button size="small" variant="contained" startIcon={<AddIcon color='#FFFFFF' />}
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#386A20",
            ":hover": {
              backgroundColor: '#FFFFFA',
              color: '#386A20',
            },
          }}>
          Ajouter un conseil
          </Button>
        </Box>
    </Box>
  );
}

export default ShowUserPlantsMobile