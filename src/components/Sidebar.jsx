import {StyledSidebar} from "./styles/Sidebar.styled";
import profile from "../assets/profile.jpg";
import {AiFillGithub, AiFillMail} from "react-icons/Ai";
import {IoMdClose} from "react-icons/Io";
import {HamburgerContext} from "./context/Hamburger.context";
import {useContext} from "react";

export default function Sidebar() {
  const {openMenu, toggleMenu, showHamburger} = useContext(HamburgerContext);

  return (
    <>
      <StyledSidebar openMenu={openMenu}>
        <section className={`profile-section`}>
          <img src={profile} alt="" />
          <h1>Alan Pasoń</h1>
          <h2>Frontend Developer</h2>
          <h3>alan.pason132@gmail.com</h3>
          {showHamburger && (
            <button onClick={toggleMenu}>
              <IoMdClose />
            </button>
          )}
        </section>
        <section className="personal-section">
          <ul>
            <li>
              <span>Residence:</span>
              <span>Poland</span>
            </li>
            <li>
              <span>City:</span>
              <span>Izby</span>
            </li>
            <li>
              <span>Language:</span>
              <span>English, Polish</span>
            </li>
          </ul>
        </section>
        <footer>
          <a href="https://github.com/Alan1234111" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a href="mailto: alan.pason132@gmail.com">
            <AiFillMail />
          </a>
        </footer>
      </StyledSidebar>
    </>
  );
}
