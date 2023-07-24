import React, { useEffect, useState } from 'react'
import { Button, Box, Typography, Card, CardContent, CardActions } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../../../services/Api'
import { getCurrentUser } from '../../../services/auth.service'

const UserProfil = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await getCurrentUser()

        console.log(currentUser)
        if (!ignore) {
          setUser(currentUser)
        }
      } catch (error) {
        console.log(error)
      }
    }

    let ignore = false

    fetchUserData()

    return () => {
      ignore = true
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData()
    data.append('userId', user.id)
    deleteUser(data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Card sx={{ minWidth: 600, minHeight: 500 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Information du compte
          </Typography>

          <Typography variant="body2">
            Nom : {user.lastname}
            <br />
            Prénom : {user.firstname}
            <br />
            Email : {user.email}
            <br />
            Rôle : {user.role}
          </Typography>
        </CardContent>

        <CardActions></CardActions>
      </Card>

      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          right: '5%',
          bottom: '3%'
        }}
      >
        <Button
          size="medium"
          variant="contained"
          onClick={handleSubmit}
          sx={{
            background: 'linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #f44336',
            ':hover': {
              backgroundColor: '#d32f2f',
              color: '#FFFFFA'
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
            background: 'linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397',
            ':hover': {
              backgroundColor: '#386A20',
              color: '#FFFFFA'
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
  )
}

export default UserProfil
