import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material"
import CardPlantsToKeep from "../UserPlants/CardPlantsToKeep";
import DashboardCard from "./DashboardCard";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Dashboard = () => {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xl">
      <Box>
        <Typography gutterBottom variant="h3">
          ARosa-je
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 10, md: 12 }}>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"}>
          <DashboardCard
          title={'Mes plantes'}
          description={"Retrouver les plantes que vous avez partagé. Vos plantes gardées et celles en attente d'un gardien."}
          image={"https://picsum.photos/800/300"}
          />
        </Grid>
        <Grid item xs={"auto"} sm={"auto"} md={"auto"}>
          <DashboardCard
          title={'Plantes gardées'}
          description={"Retrouver les plantes que vous gardées."}
          image={"https://picsum.photos/800/300"}
          />
        </Grid>
      </Grid>
      <Box sx={{
        mt: '6%'
      }}>
        <Typography gutterBottom variant="h3">
          Plantes à garder
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 10, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={"auto"} sm={"auto"} md={"auto"} key={index}>
            <CardPlantsToKeep
            username={'Yoda'}
            date1={'20/02/2023'}
            date2={'02/03/2023'}
            title={'Orchidée'}
            description={"Belle orchidée cherchant un gardien."}
            image={"https://picsum.photos/800/300"}
            iconBtnAction1={<FavoriteBorderIcon />}
            actionBtn1={'Garder la plante'}
            iconBtnAction2={<VisibilityRoundedIcon />}
            actionBtn2={'Voir la plante'}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  )
}

export default Dashboard