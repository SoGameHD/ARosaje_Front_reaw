import React, { useState, useEffect } from 'react'
import { List, ListItem, Divider, ListItemText, Skeleton, Box, ListItemAvatar, Avatar, Typography, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../services/auth.service'
import { getConversation } from '../../services/Api'

const ConversationList = () => {
  const [conversations, setConversations] = useState()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate() // Utilisation du hook useNavigate pour la redirection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser.id)

        const conversationData = await getConversation(currentUser.id)
        if ((conversationData != null) & (conversationData !== undefined) & (conversationData !== '') & (conversationData.length !== 0)) {
          setConversations(conversationData)
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    fetchData()

    const interval = setInterval(fetchData, 30000) // Exécuter fetchData toutes les 30 secondes

    return () => {
      clearInterval(interval) // Nettoyer l'intervalle lors du démontage du composant
    }
  }, [user])

  const handleConversationClick = (conversationId) => {
    navigate(`/conversation/${conversationId}`) // Redirection vers l'URL spécifique de la conversation
  }

  function stringToColor(string) {
    let hash = 0
    let i

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }

    return color
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }
  }

  console.log(conversations)

  function formatDateTimeLastMessage(date) {
    const now = new Date()
    const dateMessage = new Date(date)
    const differenceInMillis = now - dateMessage
    const hourInMillis = 3600000 // 1 heure en millisecondes
    const vingtQuatreHeuresEnMillis = 86400000 // 24 heures en millisecondes

    if (differenceInMillis < vingtQuatreHeuresEnMillis) {
      // Moins de 24 heures se sont écoulées, calculer le temps écoulé en heures et minutes
      const hours = Math.floor(differenceInMillis / hourInMillis)
      return `${hours} h`
    } else {
      // Plus de 24 heures se sont écoulées, retourner la date formatée
      const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' }
      return dateMessage.toLocaleDateString('fr-FR', optionsDate)
    }
  }

  if (isLoading) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography>Messagerie principale</Typography>
        </Box>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <List style={{ flex: 1, width: '100%' }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={<Skeleton animation="wave" />} secondary={<Skeleton animation="wave" />} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Container>
    )
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex'
          }}
        >
          <h1 className="titleUserPlants">Messagerie</h1>
        </Container>
      </Box>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ overflow: 'auto' }}>
          <List style={{ flex: 1, width: '100%', cursor: 'pointer' }}>
            {conversations?.map((conversation) => (
              <React.Fragment key={conversation.id}>
                <ListItem alignItems="flex-start" sx={{ textAlign: 'left' }} onClick={() => handleConversationClick(conversation.id)}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" {...stringAvatar(conversation.name)} />
                  </ListItemAvatar>
                  <ListItemText primary={conversation.name} secondary={formatDateTimeLastMessage(conversation.message[0].date)} />
                  <ListItemText secondary={conversation.message[0].message} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </div>
    </Container>
  )
}

export default ConversationList
