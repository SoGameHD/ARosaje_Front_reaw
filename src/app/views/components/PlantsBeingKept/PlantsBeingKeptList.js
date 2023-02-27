import { Grid, CssBaseline } from "@mui/material";
import CardPlantsBeingKept from "./CardPlantsBeingKept";

const PlantsBeingKeptList = () => {
  return (
    <>
    <CssBaseline />
    <Grid container spacing={{ xs: 1, md: 2, xl: 2 }} columns={{ xs: 4, sm: 10, md: 12, xl: 12 }} justifyContent="start">
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={"auto"} md={'auto'} xl={3} key={index}>
          <CardPlantsBeingKept image={"https://picsum.photos/800/300"} dateStart="02/02/2023" dateEnd="14/02/2023"/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default PlantsBeingKeptList