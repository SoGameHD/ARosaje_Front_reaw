import { Button, Container, CssBaseline, Grid } from "@mui/material"
import UserNotKeptPlantsList from "./UserNotKeptPlantsList"
import '../UserPlants/UserPlantsView.css'
import UserKeptPlantsList from "./UserKeptPlantsList"
import { Check } from "@mui/icons-material"
import SubtitleUserPlants from "./SubtitleUserPlants"
import { useState } from "react"

function UserPlantsView() {
  const [isKeptPlants, setIsKeptPlants] = useState(false)

  const handleClickKept = () => {
    setIsKeptPlants(true);
  };

  const handleClickNotKept = () => {
    setIsKeptPlants(false);
  };
  return (
    <>
    <CssBaseline />
    <Container maxWidth="xl">
      <Container maxWidth="xl"
        sx={{
          display: "flex",
        }}
        >
          <h1 className="titleUserPlants">Mes plantes</h1>
        </Container>
      {
        isKeptPlants ? 
        <SubtitleUserPlants subtitle="Plantes actuellement gardées par des gardiens" /> : 
        <SubtitleUserPlants subtitle="Plantes en attente d'un gardien" />
      }
      <Grid container direction={'row'}
      sx={{
        pt: 3, pb: 3, pl: 0, pr: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly !important',
        alignItems: 'center',
      }}>
        <Grid item xs={6} sm={"auto"} md={'auto'} xl={'auto'} sx={{
          pr: "4px",
        }}>
          <Button size="small" 
          variant={isKeptPlants ? 'contained' : 'elevated'}
          startIcon={isKeptPlants ? <Check className="colorTextButtonActive"/> : null}
          className={isKeptPlants ? "bgLinearButtonActive colorTextButtonActive fullWidth" : "bgLinearButton colorTextButton fullWidth"}          
          onClick={handleClickKept}
          sx={{
            borderRadius: 100,
          }}>
            Gardées
          </Button>
        </Grid>
        <Grid item xs={6} sm={"auto"} md={"auto"} xl={"auto"} sx={{
          pl: "3px",
        }}>
          <Button size="small"
          variant={isKeptPlants ? 'elevated' : 'contained'}
          startIcon={isKeptPlants ? null : <Check className="colorTextButtonActive"/>}
          className={isKeptPlants ? "bgLinearButton colorTextButton fullWidth" : "bgLinearButtonActive colorTextButtonActive fullWidth"}
          onClick={handleClickNotKept}
          sx={{
            borderRadius: 100,
          }}>
            Non gardées
          </Button>
        </Grid>
      </Grid>
      {isKeptPlants ? <UserKeptPlantsList /> : <UserNotKeptPlantsList />}
    </Container>
    </>
  )
}

export default UserPlantsView