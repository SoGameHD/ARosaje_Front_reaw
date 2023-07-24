import React, { useState } from "react";
import { IconButton, Typography, Box, Card, CardMedia, CardContent, Grid, List, ListItem, ListItemText, Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from '@mui/icons-material/Add';
import Add from '@mui/icons-material/Add';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { useNavigate } from "react-router-dom";
import { Form, Field } from 'react-final-form';
import { postAdvice } from "../../services/Api";
import { useLang } from "../../../contexts/lang-context";

const ShowPlantsToKeepMobile = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { plant } = props
	const lgCommon = useLang('common.root')
	const lgPlant = useLang('plant')
	const lgAdvice = useLang('advice')

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
            {lgPlant('plantToKeep')}
          </Typography>
          <Typography variant="subtitle1" gutterBottom >
            {lgPlant('plantWaitJanitor')}
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
            	{lgPlant('plantName')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {lgPlant('plantDescription')}
            </Typography>
          </Box>
          <Box sx={{ mt: '15%' }}>
            <Typography variant="h5" gutterBottom>
              {lgAdvice('botanistTips')}
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
          {lgAdvice('addAdvice')}
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: 'center', pb: 0 }}>
        <AddCommentOutlinedIcon fontSize="large"/>
      </DialogTitle>
      <DialogTitle sx={{ textAlign: 'center', pt: 0 }}>{lgAdvice('addAdvice')}</DialogTitle>
      <Form
          onSubmit={post}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent sx={{ pt: '20px !important', width: 420 }}>
                <Field name="message" component="textarea" rows={6} placeholder="Conseil" />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} sx={{ color: '#386A20' }}>{lgCommon('cancel')}</Button>
                <Button startIcon={<Add />} sx={{ color: '#386A20' }} type="submit">{lgCommon('add')}</Button>
              </DialogActions>
            </form>
          )}
        />
    </Dialog>
    </Box>
  );
}

export default ShowPlantsToKeepMobile