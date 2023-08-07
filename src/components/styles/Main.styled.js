import styled from "styled-components";

export const StyledMain = styled.main`
  height: 90vh;
  margin: 2em;
  padding: 0 2em;
  background-color: #19212f;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .top-bar,
  .bottom-bar {
    position: sticky;
    height: 2em;
    background-color: #19212f;
    z-index: 3;
  }

  .top-bar {
    top: 0px;
  }

  .bottom-bar {
    bottom: 0px;
  }

  @media (min-width: 900px) {
    grid-column: 2/3;
    margin-left: 0;
    height: 95vh;
  }
`;
