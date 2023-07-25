import React, { useState, useEffect } from 'react'
import { Button, Box, Typography, Card, CardContent, CardActions, TextField, Skeleton, Container, IconButton } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { sendMessage, getConversationById } from '../../services/Api'
import { getCurrentUser } from '../../services/auth.service'
import { ArrowBackIos } from '@mui/icons-material'

const Conversation = () => {
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState([])
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser.id)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        if (user) {
          const messages = await getConversationById(id, user)
          setConversation(messages)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    fetchConversation()
  }, [user, id])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const updatedMessages = await getConversationById(id, user)
        setConversation(updatedMessages)
      } catch (error) {
        console.log(error)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [id, user])

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage(id, user, message).then((response) => {
        getConversationById(id, user).then((res) => {
          setConversation(res)
        })
      })

      setMessage('')
    }
  }

  function formatDateTimeLastMessage(date) {
    const now = new Date()
    const dateMessage = new Date(date)
    const differenceInMillis = now - dateMessage
    const minuteInMillis = 60000 // 1 minute en millisecondes
    const hourInMillis = 3600000 // 1 heure en millisecondes
    const vingtQuatreHeuresEnMillis = 86400000 // 24 heures en millisecondes

    if (differenceInMillis < vingtQuatreHeuresEnMillis) {
      // Moins de 24 heures se sont écoulées
      const hours = Math.floor(differenceInMillis / hourInMillis)
      const minutes = Math.floor((differenceInMillis % hourInMillis) / minuteInMillis)
      const seconds = Math.floor((differenceInMillis % minuteInMillis) / 1000) // Convertir en secondes

      let timeString = ''

      if (hours > 0) {
        timeString += `${hours} h `
      }

      if (minutes > 0) {
        timeString += `${minutes} min `
      } else {
        timeString += `${seconds} s`
      }

      return timeString.trim() // Supprimer les espaces en trop à la fin
    } else {
      // Plus de 24 heures se sont écoulées, retourner la date formatée
      const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' }
      return dateMessage.toLocaleDateString('fr-FR', optionsDate)
    }
  }

  const handleCloseMessage = () => {
    navigate('/conversation')
  }

  if (isLoading) {
    return (
      <Box display="flex" flexDirection="column" height="100%">
        <Box flex="1" overflow="auto">
          <Skeleton variant="rectangular" height={100} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={100} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={100} sx={{ mb: 1 }} />
        </Box>
        <CardActions>
          <TextField value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." fullWidth disabled />
          <Button variant="contained" disabled>
            Send
          </Button>
        </CardActions>
      </Box>
    )
  }

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
          <IconButton onClick={handleCloseMessage}>
            <ArrowBackIos
              fontSize="large"
              sx={{
                color: '#000000'
              }}
            />
          </IconButton>
          <Typography variant="h6" color="text.secondary">
            {conversation?.name}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" height="100%" p={2}>
          <Box flex="1" overflow="auto">
            {conversation?.message
              ?.sort((a, b) => new Date(a.date) - new Date(b.date))
              ?.map((message) => (
                <Card
                  key={message.id}
                  variant="outlined"
                  sx={{
                    mb: 1,
                    borderRadius: 6,
                    borderColor: '#386A20',
                    marginLeft: message.user.id === user ? '55%' : '0',
                    marginRight: message.user.id === user ? '0' : '55%'
                  }}
                >
                  <CardContent>
                    <Box textAlign={message.user.id === user ? 'right' : 'left'}>
                      <Typography variant="body2">{message.message}</Typography>
                    </Box>
                    <Box textAlign={message.user.id === user ? 'left' : 'right'}>
                      <Typography variant="caption" color="text.secondary">
                        {formatDateTimeLastMessage(message.date)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
          </Box>
          <CardActions>
            <TextField
              value={message}
              variant="standard"
              multiline
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ecrire un message..."
              fullWidth
              sx={{ marginRight: '30px' }}
            />
            <Button
              variant="contained"
              onClick={handleSendMessage}
              style={{
                borderRadius: 16,
                background: 'linear-gradient(0deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.12)), #B8F397',
                color: '#000000',
                elevation: 5
              }}
            >
              Envoyer
            </Button>
          </CardActions>
        </Box>
      </Container>
    </>
  )
}

export default Conversation
