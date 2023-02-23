import { Container, CssBaseline } from "@mui/material"
import '../UserPlants/UserPlantsView.css'
import SubtitleUserPlants from "../UserPlants/SubtitleUserPlants"
import PlantsBeingKeptList from "./PlantsBeingKeptList"

function PlantsBeingKeptView() {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xl">
      <Container maxWidth="xl"
        sx={{
          display: "flex",
        }}
        >
        <h1 className="titleUserPlants">Plantes gardées</h1>
      </Container>
      <SubtitleUserPlants subtitle="Plantes dont j’ai ou j’ai eu la garde" />
      <PlantsBeingKeptList />
    </Container>
    </>
  )
}

export default PlantsBeingKeptView