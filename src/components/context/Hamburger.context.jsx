import {createContext, useEffect, useState} from "react";

export const HamburgerContext = createContext();

export default function HamburgerProvider({children}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth > 900 ? false : true);

  function toggleMenu() {
    setOpenMenu((prev) => !prev);
  }

  const handleResize = (e) => {
    if (e.target.innerWidth > 900) {
      setShowHamburger(false);
    } else {
      setShowHamburger(true);
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, [handleResize]);

  const values = {
    openMenu,
    toggleMenu,
    showHamburger,
  };

  return <HamburgerContext.Provider value={values}>{children}</HamburgerContext.Provider>;
}
