import {StyledAbout} from "./styles/About.styled";
import background from "../assets/background.jpg";
import {GiHamburgerMenu} from "react-icons/Gi";
import {HamburgerContext} from "./context/Hamburger.context";
import {useContext} from "react";

export default function About() {
  const {toggleMenu, showHamburger} = useContext(HamburgerContext);

  return (
    <StyledAbout bg={background}>
      {showHamburger && (
        <button onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      )}
      <h2>Hello there 👋</h2>
      <h2>I am a creative Frontend Developer based in Poland who loves to work with JavaScript technologies</h2>
      <h2>I build beautiful and well-engineered websites and web apps</h2>
    </StyledAbout>
  );
}
