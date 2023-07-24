import { Button, Container, CssBaseline, Grid } from "@mui/material"
import UserNotKeptPlantsList from "./UserNotKeptPlantsList"
import '../UserPlants/UserPlantsView.css'
import UserKeptPlantsList from "./UserKeptPlantsList"
import { Check } from "@mui/icons-material"
import SubtitleUserPlants from "./SubtitleUserPlants"
import { useEffect, useState } from "react"
import { getPlants } from "../../services/Api";
import { useLang } from "../../../contexts/lang-context"

function UserPlantsView() {
  const [isKeptPlants, setIsKeptPlants] = useState(false)
  const [plants, setPlants] = useState([])
	const lgPlant = useLang('plant')
  
  useEffect(() => {
    const getData = async () => {
      const data = await getPlants()
      setPlants(data)
    }
    getData()
  }, [])

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
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex'
          }}
        >
          <h1 className="titleUserPlants">{lgPlant('myPlants')}</h1>
        </Container>
        {isKeptPlants ? (
          <SubtitleUserPlants subtitle={lgPlant('currentlyKeptByJanitor')} />
        ) : (
          <SubtitleUserPlants subtitle={lgPlant('plantWaitJanitor')} />
        )}
        <Grid
          container
          direction={'row'}
          sx={{
            pt: 3,
            pb: 3,
            pl: 0,
            pr: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly !important',
            alignItems: 'center'
          }}
        >
          <Grid
            item
            xs={6}
            sm={'auto'}
            md={'auto'}
            xl={'auto'}
            sx={{
              pr: '4px'
            }}
          >
            <Button
              name="keep-plant-button"
              size="small"
              variant={isKeptPlants ? 'contained' : 'elevated'}
              startIcon={isKeptPlants ? <Check className="colorTextButtonActive" /> : null}
              className={isKeptPlants ? 'bgLinearButtonActive colorTextButtonActive fullWidth' : 'bgLinearButton colorTextButton fullWidth'}
              onClick={handleClickKept}
              sx={{
                borderRadius: 100
              }}
            >
              {lgPlant('kept')}
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={'auto'}
            md={'auto'}
            xl={'auto'}
            sx={{
              pl: '3px'
            }}
          >
            <Button
              name="unkeep-plant-button"
              size="small"
              variant={isKeptPlants ? 'elevated' : 'contained'}
              startIcon={isKeptPlants ? null : <Check className="colorTextButtonActive" />}
              className={isKeptPlants ? 'bgLinearButton colorTextButton fullWidth' : 'bgLinearButtonActive colorTextButtonActive fullWidth'}
              onClick={handleClickNotKept}
              sx={{
                borderRadius: 100
              }}
            >
              {lgPlant('noKept')}
            </Button>
          </Grid>
        </Grid>
        {isKeptPlants ? <UserKeptPlantsList plant={plants} /> : <UserNotKeptPlantsList />}
      </Container>
    </>
  )
}

export default UserPlantsView