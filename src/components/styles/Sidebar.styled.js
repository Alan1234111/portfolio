import styled from "styled-components";
import {slideRight} from "./Animations";

export const StyledSidebar = styled.aside`
  background-color: #23232d;
  height: 90vh;
  display: grid;
  grid-template-rows: 0.7fr 1fr 40px;
  transition: 0.2s;
  position: fixed;
  left: 2em;
  right: 2em;
  z-index: 5;

  transform: ${({openMenu}) => (openMenu ? "translateX(0)" : "translateX(-120%)")};

  .profile-section {
    padding: 1em;
    line-height: 0;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .profile-section h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .profile-section h2,
  .profile-section h3 {
    color: #8c8cae;
    font-size: 1rem;
    font-weight: normal;
  }

  .profile-section img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5em;
  }

  .profile-section button {
    position: absolute;
    top: 1em;
    right: 1.5em;
    border: none;
    background-color: transparent;
  }

  .profile-section button svg {
    color: gold;
    width: 25px;
    height: 25px;
  }

  .personal-section {
    background-color: #20202a;

    ul {
      margin: 2em 2em 0;
      padding-bottom: 0.6em;
      border-bottom: 1px solid white;
    }

    ul li {
      display: flex;
      justify-content: space-between;
      margin: 1em 0;
    }
  }

  footer {
    display: flex;
    justify-content: space-around;
  }

  footer a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: gold;
  }


  footer svg {
    color: gold;
    height: 100%;
    width: 60%;
  }

  @media (min-width: 900px) {
    margin: 2em;
    margin-right: 0;
    position: static;
    transform: translateX(0);
    grid-column: 1/2;
    height: 95vh;
    animation: ${slideRight} 1s cubic-bezier(0, 0, 0.3, 1.01);
  }


  }
`;
