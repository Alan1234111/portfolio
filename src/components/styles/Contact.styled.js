import styled from "styled-components";

export const StyledContact = styled.footer`
  border-radius: 8px;
  background-color: #131c2d;
  text-align: center;

  h4 {
    padding-top: 1em;
  }

  .contact-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact-container a {
    display: flex;
    flex-direction: column;
    padding: 1.5em 4em;
    text-decoration: none;
    color: white;
  }

  .contact-container a svg {
    width: 100%;
    height: 30px;
  }
`;
