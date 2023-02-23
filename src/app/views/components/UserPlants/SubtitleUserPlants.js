import { Container, CssBaseline } from "@mui/material"
import './UserPlantsView.css'

const SubtitleUserPlants = ({subtitle}) => {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xl"
      sx={{
        display: "flex",
      }}
      >
        <h2 className="subtitleUserPlants">{subtitle}</h2>
    </Container>
    </>
  )
}

export default SubtitleUserPlants