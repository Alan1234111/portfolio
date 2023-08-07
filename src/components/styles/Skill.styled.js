import styled from "styled-components";
import {showSkill} from "./Animations";

export const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 0;
  font-size: 0.8rem;
  margin: 0 1em;
  animation-name: ${showSkill};
  animation-duration: ${({index}) => `${300 * index + 600}ms`};

  svg {
    color: ${({color}) => color};
    padding: 0.2em;
    width: 50px;
    height: 50px;
  }
`;
