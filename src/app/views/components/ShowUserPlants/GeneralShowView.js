
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ShowUserPlantsDesktop from './ShowUserPlantsDesktop';
import ShowUserPlantsMobile from "./ShowUserPlantsMobile";
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../services/Api';

const GeneralShowView = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [plant, setPlant] = useState(null)
  const params = useParams()

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPlantById(params.id)
      setPlant(data)
    }
    getData()
  }, [])

  return (
    <>
    {isLargeScreen ? <ShowUserPlantsDesktop plant={plant} /> : <ShowUserPlantsMobile plant={plant} />}
    </>
  )
}

export default GeneralShowView