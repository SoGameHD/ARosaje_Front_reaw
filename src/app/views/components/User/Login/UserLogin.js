import React, { useEffect, useState } from 'react';
import {Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { authenticate, checkToken } from '../../../services/auth.service';

const UserLogin = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isValid = checkToken();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    if(data.get('email') != "" && data.get('password') != "") {
      authenticate(data).then(response => {
        window.location.reload()
        })
        .catch(error => {
          console.log(error);
          
        });
    } else {
      setEmailError(data.get('email') == "" ? true : false)
      setPasswordError(data.get('password') == "" ? true : false)
    }
    
  };

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté ici
    const loggedIn = checkLoginStatus();
    setIsAuthenticated(loggedIn);
  }, []);

  function checkLoginStatus() {
    // Vérifiez les informations d'authentification de l'utilisateur ici
    // Si l'utilisateur est connecté, renvoyez true
    // Sinon, renvoyez false
    if (isValid === true) {
      return true
    } else {
      return false;
    }
  }

  if (isAuthenticated === true) {
    navigate("/");
  }

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
                color: '#000000'
              }}
            >
              Connexion
            </Button>
            <Grid container>
              
              <Grid item>
                <Link onClick={()=>navigate("/inscription")} variant="body2" sx={{ cursor: 'pointer' }}>
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