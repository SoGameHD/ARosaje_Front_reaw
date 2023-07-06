import React, { useState } from 'react';
import {Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { register } from '../../../services/auth.service';

const UserRegister = () => {
  const navigate = useNavigate();
  const [lastnameError, setlastnameError] = useState(false)
  const [firstnameError, setfirstnameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [typeError, setType] = useState(false)
  const [checked, setChecked] = useState(false)
  
  const handleClick = () => setChecked(!checked)
  const handleSubmit = (event) => {
  
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('firstname') !== "" && data.get('lastname') !== "" && data.get('email') !== "" && data.get('password') !== "" && data.get('type') !== "") {
      register(data).then(response => {
        navigate("/connexion");
        })
        .catch(error => {
          console.log(error);
          
        });
    } else {
      setEmailError(data.get('email') === "" ? true : false)
      setPasswordError(data.get('password') === "" ? true : false)
      setfirstnameError(data.get('firstname') === "" ? true : false)
      setlastnameError(data.get('lastname') === "" ? true : false)
      setType(data.get('type') === "" ? true : false)
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
            Inscription
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              error = {firstnameError}
              margin="normal"
              required
              fullWidth
              name="firstname"
              label="Nom"
              type="text"
              id="firstname"
            />
            <TextField
              error = {lastnameError}
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Prénom"
              type="text"
              id="lastname"
            />
            <TextField
              error = {emailError}
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email"
              name="email"
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
            />
            <TextField
              error = {typeError}
              margin="normal"
              required
              fullWidth
              name="type"
              label="Rôle"
              type="text"
              id="type"
            />
            <input onClick={handleClick} checked={checked} type="checkbox" /> J'accepte {" "}
            <Link onClick={()=>navigate("/traitement-des-données")} sx={{ cursor: 'pointer' }}>
              les conditions de collecte et de traitement des données
            </Link>.
            <Button
              disabled={!checked}
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
              Inscription
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={()=>navigate("/connexion")} variant="body2"  sx={{ cursor: 'pointer' }}>
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