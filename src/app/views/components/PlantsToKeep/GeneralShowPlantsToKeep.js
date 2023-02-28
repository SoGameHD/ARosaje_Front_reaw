
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ShowPlantsToKeepDesktop from './ShowPlantsToKeepDesktop';
import ShowPlantsToKeepMobile from './ShowPlantsToKeepMobile';

const GeneralShowPlantsToKeep = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 768 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <>
    {isLargeScreen ? <ShowPlantsToKeepDesktop /> : <ShowPlantsToKeepMobile />}
    </>
  )
}

export default GeneralShowPlantsToKeep