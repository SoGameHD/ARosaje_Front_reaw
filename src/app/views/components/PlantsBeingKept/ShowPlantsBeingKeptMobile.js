import React from "react";
import { IconButton, Typography, Box, Card, CardMedia, CardContent, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../../contexts/lang-context";

const ShowPlantsBeingKeptMobile = (props) => {
  const navigate = useNavigate();
  const { plant } = props
	const lgPlant = useLang('plant')
	const lgAdvice = useLang('advice')

  return (
    <Box sx={{
      display: {
        xs: "block",
        sm: "block",
        xl: "flex",
      },
    }}>
      <Grid container spacing={1} sx={{ mb: '8%', mt: '8%' }}>
        <Grid item>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIcon
            sx={{
              display: {
                xs: "bloc",
                sm: "block",
                md: "none",
                xl: "none",
              },
              marginRight: '5%',
            }}/>
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
           {lgPlant('keptPlant')}
          </Typography>
          <Typography variant="subtitle1" gutterBottom >
						{lgPlant('currentPlant')}
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{
        minHeight: 'calc(100vh - 100px)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F1F3E8",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}>
        <CardMedia
          component="img"
          sx={{
            height: 400,
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
          image="https://picsum.photos/800/300"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mt: '5%' }}>
            <Typography variant="h5" gutterBottom>
              {lgPlant('plantName')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {lgPlant('plantDescription')}
            </Typography>
          </Box>
          <Box sx={{ mt: '15%' }}>
            <Typography variant="h5" gutterBottom>
             {lgAdvice('botanistTips')}
            </Typography>
            <List>
              {plant.advices.map(advice => (
                <>
                <ListItem key={advice.id}>
                  <ListItemText primary={advice.content} />
                </ListItem>
                <Divider />
                </>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: 'block',
          position: 'fixed',
          right: '2%',
          bottom: '2%'
        }}
      >
      </Box>
    </Box>
  );
}

export default ShowPlantsBeingKeptMobile