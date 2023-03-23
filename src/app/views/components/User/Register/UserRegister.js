import React, { useState } from 'react';
import {Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserRegister = () => {
  const navigate = useNavigate();
  const [last_nameError, setLast_nameError] = useState(false)
  const [first_nameError, setFirst_nameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [roleError, setRole] = useState(false)
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('first_name') != "" && data.get('last_name') != "" && data.get('email') != "" && data.get('password') != "" && data.get('role') != "") {
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
    } else {
      setEmailError(data.get('email') == "" ? true : false)
      setPasswordError(data.get('password') == "" ? true : false)
      setFirst_nameError(data.get('first_name') == "" ? true : false)
      setLast_nameError(data.get('last_name') == "" ? true : false)
      setRole(data.get('role') == "" ? true : false)
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
              error = {first_nameError}
              margin="normal"
              required
              fullWidth
              name="first_name"
              label="Nom"
              type="text"
              id="first_name"
            />
            <TextField
              error = {last_nameError}
              margin="normal"
              required
              fullWidth
              name="last_name"
              label="Prénom"
              type="text"
              id="last_name"
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
              error = {roleError}
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