import React, { useState } from 'react';
import {Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, Card, CardContent, CardActions} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../../../services/Api';

const UserProfil = () => {
  const navigate = useNavigate();
  const user = {
    "id":1,
    "email":"arthur.heude@espi.fr",
    "first_name":"Arthur",
    "last_name":"Heude",
    "role":"Role"
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("userId", user.id)
    deleteUser(data).then(response => {
        console.log(response)
        })
        .catch(error => {
        console.log(error);
    });
    
  };

  return (
    <>
        <Card sx={{ minWidth: 600, minHeight:500 }}>
        <CardContent>
            <Typography variant="h5" component="div">
            Information du compte
            </Typography>
        
            <Typography variant="body2">
            Nom : { user.last_name }
            <br />
            Prénom : { user.first_name }
            <br />
            Email : { user.email }
            <br />
            Rôle : { user.role }
            </Typography>
        </CardContent>

        <CardActions>
        </CardActions>
        </Card>
        
        <Box
        sx={{
          display: "flex",
          position: "fixed",
          right: "5%",
          bottom: "3%"
        }}
      >
        <Button
      size="medium"
      variant="contained"
      onClick={handleSubmit}
      sx={{
        background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #f44336",
        ":hover": {
          backgroundColor: '#d32f2f',
          color: '#FFFFFA',
        },
        color: '#000000',
        elevation: 5,
        mr: '6px'
      }}
    >
      Supprimer le compte
    </Button>
        <Button
          size="medium"
          variant="contained"
          
          
          sx={{
            background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
            ":hover": {
              backgroundColor: '#386A20',
              color: '#FFFFFA',
            },
            color: '#000000',
            elevation: 5,
            mr: '6px'
          }}
        >
          Modifier le compte
        </Button>
      </Box>
    </>
  );
}

export default UserProfil