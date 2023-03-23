import React, { useState } from 'react';
import {Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserLogin = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    if(data.get('email') != "" && data.get('password') != "") {
      const user = JSON.stringify({
        "email":data.get('email'),
        "password":data.get('password')
      })
      data.append("user", user)
      axios.post("http://localhost:8080/login", data)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error);
      });
    } else {
      setEmailError(data.get('email') == "" ? true : false)
      setPasswordError(data.get('password') == "" ? true : false)
    }
    
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
            Connexion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error = {emailError}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              error = {passwordError}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
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
              Connexion
            </Button>
            <Grid container>
              
              <Grid item>
                <Link onClick={()=>navigate("/inscription")} variant="body2">
                  {"Vous n'avez pas de compte ? Inscrivez-vous"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default UserLogin