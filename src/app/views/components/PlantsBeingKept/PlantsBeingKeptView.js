import { Container, CssBaseline } from "@mui/material"
import '../UserPlants/UserPlantsView.css'
import SubtitleUserPlants from "../UserPlants/SubtitleUserPlants"
import PlantsBeingKeptList from "./PlantsBeingKeptList"
import { useLang } from "../../../contexts/lang-context"

function PlantsBeingKeptView() {
	const lg = useLang('plant')
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xl">
      <Container maxWidth="xl"
        sx={{
          display: "flex",
        }}
        >
        <h1 className="titleUserPlants">{lg('keptPlant')}</h1>
      </Container>
      <SubtitleUserPlants subtitle="Plantes dont j’ai ou j’ai eu la garde" />
      <PlantsBeingKeptList />
    </Container>
    </>
  )
}

export default PlantsBeingKeptView