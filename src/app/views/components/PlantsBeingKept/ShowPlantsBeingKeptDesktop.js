import { Box, Card, CardContent, CardMedia, Container, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react";
import { useLang } from "../../../contexts/lang-context";

const ShowPlantsBeingKeptDesktop = (props) => {
  const { plant } = props
	const lgCommon = useLang('common.root')
	const lgPlant = useLang('plant')
	const lgAdvice = useLang('advice')

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ ml: "4%" }}>
          <Typography variant="h1" sx={{ mb: "1%" }}>
            {lgPlant('keptPlant')}
          </Typography>
          <Typography variant="h4" gutterBottom >
            {lgPlant('currentPlant')}
          </Typography>
        </Box>
        <Card sx={{ display: 'flex', borderRadius: "28px", margin: "3% 8% 3% 0", backgroundColor: "#EFF3E9" }}>
          <CardMedia
            component="img"
            sx={{ 
              width: {
                sm: 300,
                md: 390,
              },
              height: {
                sm: 345,
                md: 445,
              },
              borderRadius: "28px" }} 
            image="https://picsum.photos/800/300"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ display: 'flex', flexDirection:'column', pl: "6%", pt: "6%" }}>
              <Typography component="div" variant="h4">
                {plant.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ mt: "2%" }}>
                {lgCommon('prefix.from')} {plant.start_date} {lgCommon('prefix.at')} {plant.end_date}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ mt: "6%" }}>
                {lgPlant('plantDescription')} <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur voluptatum earum expedita accusantium consequuntur, blanditiis tempora eaque quisquam illum. Obcaecati, iure possimus.
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Box sx={{ width: "85%" }}>
          <Typography variant="h2" sx={{ mb: "1%", ml: "4%" }}>
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
      </Container>
    </>
  )
}

export default ShowPlantsBeingKeptDesktop