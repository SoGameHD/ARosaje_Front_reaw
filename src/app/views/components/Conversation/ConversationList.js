import React, { useState, useEffect } from "react";
import { List, ListItem, Divider, ListItemText, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../services/auth.service";
import { getConversation } from "../../services/Api";

const ConversationList = () => {
  const [conversations, setConversations] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Utilisation du hook useNavigate pour la redirection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser.id);

        const conversationData = await getConversation(currentUser.id);
        setConversations(conversationData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 30000); // Exécuter fetchData toutes les 30 secondes

    return () => {
      clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
    };
  }, []);

  const handleConversationClick = (conversationId) => {
    navigate(`/conversation/${conversationId}`); // Redirection vers l'URL spécifique de la conversation
  };

  if (isLoading) {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <List style={{ flex: 1, width: "100%" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={<Skeleton animation="wave" />}
                  secondary={<Skeleton animation="wave" />}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <List style={{ flex: 1, width: "100%" }}>
        {conversations.map((conversation) => (
          <React.Fragment key={conversation.id}>
            <ListItem button onClick={() => handleConversationClick(conversation.id)}>
              <ListItemText
                primary={conversation.name}
                secondary={conversation.message[0].message}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default ConversationList;