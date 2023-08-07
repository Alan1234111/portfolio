import {StyledSkillsContainer} from "./styles/SkillsContainer.styled";
import Skill from "./Skill";
// Icons
import {AiFillHtml5} from "react-icons/Ai";
import {BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoFirebase} from "react-icons/Bi";
import {BsGit} from "react-icons/Bs";
import {DiNpm} from "react-icons/Di";
import {SiJest, SiBootstrap} from "react-icons/Si";

export default function SkillsContainer() {
  const skills = [
    {type: "HTML", icon: AiFillHtml5, color: "#e44d26"},
    {type: "CSS", icon: BiLogoCss3, color: "#1572b6"},
    {type: "JavaScript", icon: BiLogoJavascript, color: "#f0db4f"},
    {type: "React", icon: BiLogoReact, color: "#61dafb"},
    {type: "Firebase", icon: BiLogoFirebase, color: "#f58220"},
    {type: "Git", icon: BsGit, color: "#f34f29"},
    {type: "Bootstrap", icon: SiBootstrap, color: "#7210f5"},
    {type: "NPM", icon: DiNpm, color: "#2f2430"},
    {type: "Jest", icon: SiJest, color: "#593145"},
  ];

  return (
    <StyledSkillsContainer>
      <h2>Technologies & Tools i use</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Skill key={skill.type} index={index} type={skill.type} icon={skill.icon} color={skill.color} />
        ))}
      </div>
    </StyledSkillsContainer>
  );
}
