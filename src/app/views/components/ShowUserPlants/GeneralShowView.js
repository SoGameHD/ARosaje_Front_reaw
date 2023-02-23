
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ShowUserPlantsDesktop from './ShowUserPlantsDesktop';
import ShowUserPlantsMobile from "./ShowUserPlantsMobile";

const GeneralShowView = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <>
    {isLargeScreen ? <ShowUserPlantsDesktop /> : <ShowUserPlantsMobile />}
    </>
  )
}

export default GeneralShowView