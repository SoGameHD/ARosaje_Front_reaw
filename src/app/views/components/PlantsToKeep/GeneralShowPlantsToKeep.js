import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../services/Api';
import ShowPlantsToKeepDesktop from './ShowPlantsToKeepDesktop';
import ShowPlantsToKeepMobile from './ShowPlantsToKeepMobile';

const GeneralShowPlantsToKeep = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [plant, setPlant] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      const data = await getPlantById(params.id)
      setPlant(data)
    }
    getData()
  }, [params.id])

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    plant && (
      <>
        {isLargeScreen ? <ShowPlantsToKeepDesktop plant={plant} /> : <ShowPlantsToKeepMobile plant={plant} />}
      </>
    )
  )
}

export default GeneralShowPlantsToKeep