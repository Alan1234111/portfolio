import styled from "styled-components";
import {slideLeft} from "./Animations";

export const StyledSkillsContainer = styled.section`
  h2 {
    animation: ${slideLeft} 0.5s cubic-bezier(0, 0, 0.3, 1.01);
  }

  .skills-container {
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px 0;
  }

  @media (min-width: 900px) {
    .skills-container {
      padding: 0 10rem;
    }
  }
`;
