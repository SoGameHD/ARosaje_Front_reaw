import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import CardPlantsToKeep from '../PlantsToKeep/CardPlantsToKeep'
import DashboardCard from './DashboardCard'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import myPlantImage from '../../../images/mes-plantes.avif'
import plantKept from '../../../images/plantes-gardees.avif'
import mailbox from '../../../images/messagerie.avif'
import { useEffect, useState } from 'react'
import { getPlants } from '../../services/Api'
import { useLang } from '../../../contexts/lang-context'

const Dashboard = () => {
  const [plants, setPlants] = useState([])
	const lgCommon = useLang('common.root')
	const lg = useLang('plant')

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
            {lgCommon('appName')}
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 10, md: 12 }}>
          <Grid item xs={2} sm={'auto'} md={'auto'}>
            <DashboardCard
              path={'/mes-plantes'}
              title={'Mes plantes'}
              description={lg('myPlant')}
              image={myPlantImage}
            />
          </Grid>
          <Grid item xs={2} sm={'auto'} md={'auto'}>
            <DashboardCard
              path={'/plantes-gardees'}
              title={'Plantes gardees'}
              description={lg('findKeepPlant')}
              image={plantKept}
            />
          </Grid>
          <Grid item xs={2} sm={'auto'} md={'auto'}>
            <DashboardCard path={'/conversation'} title={'Messagerie'} description={'Retrouver vos conversations.'} image={mailbox} />
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: '6%'
          }}
        >
          <Typography gutterBottom variant="h3">
            {lg('plantToKeep')}
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 10, md: 12, lg: 12 }}>
          {plants?.map((plant) => {
            const pathPlant = 'http://' + plant.pictures[0]
            return (
              <Grid item xs={2} sm={'auto'} md={'auto'} lg={3} key={plant}>
                <CardPlantsToKeep
                  key={plant.id}
                  path={`/plantes-a-garder/${plant.id}`}
                  username={plant.owner_user.firstname + ' ' + plant.owner_user.lastname}
                  date1={plant.start_date}
                  date2={plant.end_date}
                  title={plant.title}
                  description={plant.description}
                  image={pathPlant}
                  actionBtn1={'Garder la plante'}
                  iconBtnAction2={<VisibilityRoundedIcon />}
                  actionBtn2={'Voir la plante'}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Dashboard
