import {StyledSkill} from "./styles/Skill.styled";

export default function Skill({type, icon, color, index}) {
  return (
    <StyledSkill color={color} index={index}>
      {icon()}
      <p className="type">{type}</p>
    </StyledSkill>
  );
}
