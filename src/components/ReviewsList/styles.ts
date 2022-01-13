import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  margin-top: -360px;
  display: flex;
  flex-direction: column;
  max-width: 960px;

  padding: 2rem 1rem;

  & > span {
    font-weight: bold;
    font-size: 2.25rem;
  }
`;
