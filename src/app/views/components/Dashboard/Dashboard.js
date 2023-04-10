import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material"
import CardPlantsToKeep from "../PlantsToKeep/CardPlantsToKeep";
import DashboardCard from "./DashboardCard";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import myPlantImage from '../../../images/mes-plantes.avif'
import plantKept from '../../../images/plantes-gardees.avif'
import { useEffect, useState } from "react";
import { getPlants } from "../../services/Api";

const Dashboard = () => {
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const data = await getPlants()
      setPlants(data)
    }
    getData()
  }, [])

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
        <Grid item xs={2} sm={"auto"} md={"auto"}>
          <DashboardCard
          path={'/mes-plantes'}
          title={'Mes plantes'}
          description={"Retrouver les plantes que vous avez partagé. Vos plantes gardées et celles en attente d'un gardien."}
          image={myPlantImage}
          />
        </Grid>
        <Grid item xs={2} sm={"auto"} md={"auto"}>
          <DashboardCard
          path={'/plantes-gardees'}
          title={'Plantes gardees'}
          description={"Retrouver les plantes que vous gardées."}
          image={plantKept}
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
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 10, md: 12, lg: 12 }}>
      {
        plants?.map(plant => {
          return (
            <Grid item xs={2} sm={"auto"} md={"auto"} lg={3} key={plant}>
            <CardPlantsToKeep
              key={plant.id}
              path={`/plantes-a-garder/${plant.id}`}
              username={'Yoda'}
              date1={plant.start_date}
              date2={plant.end_date}
              title={plant.title}
              image={"https://picsum.photos/800/300"}
              actionBtn1={'Garder la plante'}
              iconBtnAction2={<VisibilityRoundedIcon />}
              actionBtn2={'Voir la plante'}
            />
          </Grid>
          )
        })
      }
      </Grid>
    </Container>
    </>
  )
}

export default Dashboard