import {StyledMain} from "./styles/Main.styled";
import About from "./About";
import SkillsContainer from "./SkillsContainer";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "./Contact";
import {useState} from "react";

export default function MainInformation() {
  const [scrollOnTop, setScrollOnTop] = useState();

  function handleScroll(e) {
    setScrollOnTop(e.target.scrollTop + e.target.clientHeight);
  }

  return (
    <StyledMain onScroll={handleScroll}>
      <div className="top-bar"></div>
      <About />
      <SkillsContainer />
      <ProjectsContainer scrollOnTop={scrollOnTop} />
      <Contact />
      <div className="bottom-bar"></div>
    </StyledMain>
  );
}
