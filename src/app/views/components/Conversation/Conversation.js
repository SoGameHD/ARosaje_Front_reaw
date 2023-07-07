import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Card, CardContent, CardActions, TextField, Skeleton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getMessage, sendMessage } from '../../services/Api';
import { getCurrentUser } from "../../services/auth.service";

const Conversation = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser.id);

        const messages = await getMessage(currentUser.id);
        setConversation(messages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      //const newMessage = { id: Date.now(), sender: 'user', content: message };
      sendMessage(id, user, message).then(response => {
        getMessage(user).then(res => {
          setConversation(res);
        })
      })
  
      setMessage('');
    }
  };

  if (isLoading) {
    return (
      <Box display="flex" flexDirection="column" height="100%">
        <Box flex="1" overflow="auto">
          <Skeleton variant="rectangular" height={100} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={100} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={100} sx={{ mb: 1 }} />
        </Box>
        <CardActions>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            fullWidth
            disabled
          />
          <Button variant="contained" disabled>Send</Button>
        </CardActions>
      </Box>
    );
  }

  return (
    <>
      <Box display="flex" flexDirection="column" height="100%">
        <Box flex="1" overflow="auto">
          {conversation.map((message) => (
            <Card key={message.id} variant="outlined" sx={{ mb: 1 }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {message.user.id === user ? (
                    <Box textAlign="right">{message.message}</Box>
                  ) : (
                    <Box textAlign="left">{message.message}</Box>
                  )}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <CardActions>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            fullWidth
          />
          <Button variant="contained" onClick={handleSendMessage}>Send</Button>
        </CardActions>
      </Box>
    </>
  );
};

export default Conversation;