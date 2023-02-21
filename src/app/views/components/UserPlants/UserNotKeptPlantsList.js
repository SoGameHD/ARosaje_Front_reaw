import { Grid, CssBaseline } from "@mui/material";
import CardUserNotKeptPlants from "./CardUserNotKeptPlants";

const UserNotKeptPlantsList = () => {
  return (
    <>
    <CssBaseline />
    <Grid container spacing={{ xs: 2, md: 2, xl: 2 }} columns={{ xs: 4, sm: 10, md: 12, xl: 12 }} justifyContent="start">
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={"auto"} md={"auto"} xl={3} key={index}>
          <CardUserNotKeptPlants image={"https://picsum.photos/800/300"} description="Une description et/ou des conseils"/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default UserNotKeptPlantsList