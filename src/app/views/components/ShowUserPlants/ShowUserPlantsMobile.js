import React, { useState } from "react";
import { IconButton, Typography, Box, Card, CardMedia, CardContent, Grid, List, ListItem, ListItemText, Divider, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Add from '@mui/icons-material/Add';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { deletePlant } from "../../services/Api";

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

const ShowUserPlantsMobile = (props) => {
  const [open, setOpen] = useState(false);
  const [edition, setEdition] = useState(false);
  const [value, setValue] = useState(dayjs('2022-04-07'));
  const navigate = useNavigate();
  const { plant } = props;

  const handleDeletePlant = () => {
    const idPlant = plant.id;
    try {
      deletePlant(idPlant).then(response => {
        navigate('/mes-plantes');
      })
      .catch(error => {
        console.log(error);
      });
    } catch {
      navigate('/mes-plantes');
    }
  }

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
    <Box
      sx={{
        display: {
          xs: 'block',
          sm: 'block',
          xl: 'flex'
        }
      }}
    >
      <Grid container spacing={1} sx={{ mb: '8%', mt: '8%' }}>
        <Grid item>
          <IconButton onClick={() => navigate('/mes-plantes')}>
            <ArrowBackIcon
              sx={{
                display: {
                  xs: 'bloc',
                  sm: 'block',
                  md: 'none',
                  xl: 'none'
                },
                marginRight: '5%'
              }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Mes plantes
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Plantes en attente d'un gardien
          </Typography>
        </Grid>
      </Grid>
      <Card
        sx={{
          minHeight: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F1F3E8',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px'
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 400,
            width: '100%',
            objectFit: 'cover',
            borderRadius: '12px'
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
          display: "grid",
          position: "fixed",
          rowGap: "5%",
          left: "50%",
          bottom: "3%"
        }}
      >
        <Button
      size="small"
      variant="outlined"
      onClick={handleDeletePlant}
      startIcon={<DeleteIcon sx={{ color: '#43493E' }} />}
      sx={{
        color: '#43493E',
        backgroundColor: '#F1F3E8',
        borderRadius: 100,
        borderColor: '#f44336',
        ':hover': {
          borderColor: '#f44336',
          backgroundColor: '#F1F3E8',
          color: '#f44336'
        },
        mr: '6px'
      }}
    >
      Supprimer
    </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={handleClickOpenEdition}
          startIcon={<EditIcon sx={{ color: '#43493E' }} />}
          sx={{
            color: '#43493E',
            backgroundColor: '#F1F3E8',
            borderRadius: 100,
            borderColor: '#386A20',
            ':hover': {
              borderColor: '#386A20',
              backgroundColor: '#FFFFFF',
              color: '#386A20'
            },
            mr: '6px'
          }}
        >
          Modifier
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={handleClickOpen}
          startIcon={<AddIcon color="#FFFFFF" />}
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#386A20',
            borderRadius: 100,
            ':hover': {
              backgroundColor: '#FFFFFA',
              color: '#386A20'
            }
          }}
        >
          Ajouter un conseil
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
          <AddCommentOutlinedIcon fontSize="large" />
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
          <Button onClick={handleClose} sx={{ color: '#386A20' }}>
            Annulé
          </Button>
          <Button startIcon={<Add />} onClick={handleClose} sx={{ color: '#386A20' }}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={edition} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'start' }}>
          <IconButton onClick={handleCloseEdition} sx={{ marginRight: '4%' }}>
            <ArrowBackIcon
              fontSize="large"
              sx={{
                color: '#000000'
              }}
            />
          </IconButton>
          Édition de la plante
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex'
          }}
        >
          <Box
            sx={{
              width: 260,
              height: 300,
              borderRadius: '70px'
            }}
          >
            <img src="https://picsum.photos/800/300" alt="titre plante" width={'100%'} height={'100%'} style={{ borderRadius: '70px' }} />
          </Box>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'} padding={5}>
            <TextField id="outlined-basic" label="Nom plante" variant="outlined" />
            <Box
              sx={{
                backgroundColor: '#C3D4B6',
                padding: 2,
                borderRadius: '20px'
              }}
            >
              <Typography variant="h6" sx={{ mb: '1%', ml: '4%' }}>
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
                    setValue(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            startIcon={<DoneRoundedIcon />}
            onClick={handleCloseEdition}
            sx={{
              backgroundColor: '#386A20',
              color: '#FFFFF',
              borderRadius: 100,
              ':hover': {
                backgroundColor: '#FFFFFA',
                color: '#386A20'
              }
            }}
          >
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ShowUserPlantsMobile