import { Grid, CssBaseline } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CardUserKeptPlants from "./CardUserKeptPlants";

const UserKeptPlantsList = (props) => {
  const { plant } = props;
  return (
    <>
    <CssBaseline />
    <Grid container spacing={{ xs: 2, md: 2, xl: 2 }} columns={{ xs: 4, sm: 10, md: 12, xl: 12 }} justifyContent="start">
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={"auto"} md={3} xl={3} key={index}>
          <CardUserKeptPlants path={'/mes-plantes/2'} plantName="Orchidées" action={"Modifier"} icon={<EditIcon />} image={"https://picsum.photos/800/300"} username='Nom utilisateur' date1='03/02/2023' date2='14/03/2023' />
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default UserKeptPlantsList