import styled, {css} from "styled-components";
import {showProject, slideBottom, slideLeft, slideRight} from "./Animations";

export const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 0 1em 1em;
  margin: 1em 0;
  text-align: center;
  background-color: ${({index}) => (index % 2 === 0 ? "#232c41" : "#1c2434")};
  border-radius: 8px;
  opacity: 0;

  animation: ${({isShown}) =>
    isShown
      ? css`
          ${showProject} 2s forwards
        `
      : "none"};

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h4 {
    color: #8c8cae;
    font-size: 0.9rem;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    order: -1;
    padding: 1em;
    animation: ${({isShown}) =>
      isShown
        ? css`
            ${slideBottom} 0.8s forwards
          `
        : "none"};
  }

  a {
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 18px;
    padding: 0.3em 0.4em;
    margin: 0 0.5em;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .project-information {
    animation: ${({isShown}) =>
      isShown
        ? css`
            ${slideRight} 0.8s forwards
          `
        : "none"};
  }

  .live-link {
    background-color: #ffc406;
  }

  .repository-link {
    background-color: #fffde5;
  }

  a:hover {
    background-color: #fff;
  }

  a:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 2em 1em;
    margin: 0;
    text-align: left;

    img {
      width: 45%;
      padding: 0 2em;
      height: 100%;
      margin-left: auto;
    }

    .project-information {
      margin-left: 1em;
    }

    h3 {
      font-size: 1.5rem;
    }

    a {
      min-width: 120px;
      padding: 0.4em 0.5em;
      margin: 0.1em 0.5rem 0 0;
    }
  }
`;
