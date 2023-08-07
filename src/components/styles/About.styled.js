import styled from "styled-components";
import {slideTop} from "./Animations";

export const StyledAbout = styled.section`
  position: relative;
  margin: 0 0.2em 0;
  padding: 1em;
  font-size: 0.8rem;
  background-blend-mode: overlay;
  background-color: #111827;
  background-image: url(${({bg}) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  animation: ${slideTop} 0.5s cubic-bezier(0, 0, 0.3, 1.01);

  button {
    position: absolute;
    color: gold;
    top: 15px;
    left: 15px;
    background-color: transparent;
    border: none;
  }

  svg {
    height: 1.5em;
    width: 1.5em;
  }

  h2:nth-of-type(1) {
    font-size: 1.5rem;
  }

  h2:nth-of-type(3) {
    color: gold;
    font-size: 0.9rem;
    margin-top: 1.5em;
    font-weight: normal;
  }
`;
