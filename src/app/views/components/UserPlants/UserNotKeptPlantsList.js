import { Grid, CssBaseline } from "@mui/material";
import CardUserNotKeptPlants from "./CardUserNotKeptPlants";
import EditIcon from '@mui/icons-material/Edit';

const UserNotKeptPlantsList = () => {
  return (
    <>
    <CssBaseline />
    <Grid container spacing={{ xs: 2, md: 2, xl: 2 }} columns={{ xs: 4, sm: 10, md: 12, xl: 12 }} justifyContent="start">
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={"auto"} md={3} xl={3} key={index}>
          <CardUserNotKeptPlants path={'/mes-plantes/1'} plantName="Orchidées" action={"Modifier"} icon={<EditIcon />} image={"https://picsum.photos/800/300"} date1={'03/02/2023'} date2={'14/03/2023'}/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default UserNotKeptPlantsList