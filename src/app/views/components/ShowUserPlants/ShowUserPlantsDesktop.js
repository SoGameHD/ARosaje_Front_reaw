import Add from '@mui/icons-material/Add';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import React, { useState } from "react";
import { Edit } from '@mui/icons-material';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

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



const ShowUserPlantsDesktop = () => {
  const [open, setOpen] = useState(false);
  const [edition, setEdition] = useState(false);
  const [value, setValue] = useState(dayjs('2022-04-07'));
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEdition = () => {
    setEdition(true);
  };

  const handleCloseEdition = () => {
    setEdition(false);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ ml: "4%" }}>
          <Typography variant="h1" sx={{ mb: "1%" }}>
            Mes plantes
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
              },
              height: {
                sm: 345,
                md: 445,
              },
              borderRadius: "28px" }} 
            image="https://picsum.photos/800/300"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ display: 'flex', flexDirection:'column', pl: "6%", pt: "6%" }}>
              <Typography component="div" variant="h4">
                Nom plante
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ mt: "6%" }}>
                Description plante <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur voluptatum earum expedita accusantium consequuntur, blanditiis tempora eaque quisquam illum. Obcaecati, iure possimus.
              </Typography>
              <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
              >
                <IconButton
                  onClick={handleClickOpenEdition} 
                  aria-label="edition"
                  size="large"
                  style={{
                    borderRadius: 16,
                    background: "#B8E6A2",
                    color: '#000000',
                    elevation: 5,
                }}>
                  <Edit />
                </IconButton>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Box sx={{ width: "85%" }}>
          <Typography variant="h2" sx={{ mb: "1%", ml: "4%" }}>
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
      <Dialog open={edition} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'start'}}>
          <IconButton onClick={handleCloseEdition} sx={{ marginRight: '4%' }}>
            <ArrowBackIcon
            fontSize='large'
            sx={{
              color: '#000000',
            }}/>
          </IconButton>
          Édition de la plante
          </DialogTitle>
          <DialogContent sx={{
            display: 'flex',
          }}>
            <Box sx={{
              width: 260,
              height: 300,
              borderRadius: "70px",
            }}>
              <img src="https://picsum.photos/800/300" alt="titre plante" width={"100%"} height={"100%"} style={{  borderRadius: "70px" }} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'} padding={5}>
              <TextField id="outlined-basic" label="Nom plante" variant="outlined" />
              <Box
              sx={{
                backgroundColor: '#C3D4B6',
                padding: 2,
                borderRadius: "20px",
              }}
              >
                <Typography variant="h6" sx={{ mb: "1%", ml: "4%" }}>
                  Date gardinage
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disableFuture
                    label="Date"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  </LocalizationProvider>
              </Box>
            </Box>
          </DialogContent>
        <DialogActions>
          <Button variant="contained" startIcon={<DoneRoundedIcon />} onClick={handleCloseEdition}
          sx={{ 
            backgroundColor: '#386A20',
            color: '#FFFFF',
            borderRadius: 100,
            ":hover": {
              backgroundColor: '#FFFFFA',
              color: '#386A20',
            },
          }}>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ShowUserPlantsDesktop