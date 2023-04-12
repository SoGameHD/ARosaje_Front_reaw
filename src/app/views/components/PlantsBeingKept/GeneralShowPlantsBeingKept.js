
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../services/Api';
import ShowPlantsBeingKeptDesktop from './ShowPlantsBeingKeptDesktop';
import ShowPlantsBeingKeptMobile from './ShowPlantsBeingKeptMobile';

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
  }, [])

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    plant && (
      <>
        {isLargeScreen ? <ShowPlantsBeingKeptDesktop plant={plant} /> : <ShowPlantsBeingKeptMobile plant={plant} />}
      </>
    )
  )
}

export default GeneralShowPlantsToKeep