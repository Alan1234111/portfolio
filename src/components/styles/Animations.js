import styled, {keyframes} from "styled-components";

export const slideTop = keyframes`
    from {
      opacity: 0;
      transform: translateY(-30%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const showProject = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `;

export const slideRight = keyframes`
    from {
     transform: translateX(-10%);
     opacity: 0;
   }

    to {
     transform: translateX(0);
     opacity: 1;
    }
`;

export const showSkill = keyframes`
from {
    opacity: 0;
}

60% {
    opacity: 0;
}

to {
    opacity: 1;
}
`;

export const slideLeft = keyframes`
    from {
        transform: translateX(20%);
    }

    to {
        transform: translateX(0);
    }
`;

export const slideBottom = keyframes`
    from {
        transform: translateY(20%);
    }

    to {
        transform: translateY(0);
    }
`;
