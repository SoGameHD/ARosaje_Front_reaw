import { Grid, CssBaseline } from "@mui/material";
import CardUserKeptPlants from "./CardUserKeptPlants";

const UserKeptPlantsList = () => {
  return (
    <>
    <CssBaseline />
    <Grid container spacing={{ xs: 2, md: 2, xl: 2 }} columns={{ xs: 4, sm: 10, md: 12, xl: 12 }} justifyContent="start">
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={"auto"} md={'auto'} xl={3} key={index}>
          <CardUserKeptPlants image={"https://picsum.photos/800/300"} username='Nom utilisateur' description="Une description et/ou des conseils"/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default UserKeptPlantsList