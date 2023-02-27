import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Menu = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <>
      {isLargeScreen ? <DesktopMenu /> : <MobileMenu />}
    </>
  )
}

export default Menu
