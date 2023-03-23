import React from 'react';
import {Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = JSON.stringify({
      "firstname":data.get('first_name'),
      "lastname":data.get('last_name'),
      "email":data.get('email'),
      "password":data.get('password'),
      "role":data.get('role'),
      
    })
    data.append("user", user)
    axios.post("http://localhost:8080/register", data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
    });
  };

  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
            Inscription
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              name="first_name"
              label="Nom"
              type="text"
              id="first_name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="last_name"
              label="Prénom"
              type="text"
              id="last_name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="role"
              label="Rôle"
              type="text"
              id="role"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ width: "100%",marginTop: '5%', marginBottom: '2%', background: "linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397",
          ":hover": {
            backgroundColor: '#386A20',
            color: '#FFFFFA',
          },
          color: '#000000'}}
            >
              Inscription
            </Button>
            <Grid container>
              
              <Grid item>
                <Link onClick={()=>navigate("/connexion")} variant="body2">
                  {"Vous avez un compte ? Connectez-vous"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default UserRegister