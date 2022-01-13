import styled from "styled-components";

export const Container = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;

  & > * {
    margin: 10px 0;
  }
  div {
    display: flex;
    align-items: center;

    span {
      background-color: #1378fe;
      color: white;
      font-weight: 500;
      padding: 0.3em 0.5em;
      border-radius: 0.5em;
      margin-right: 0.75em;
    }
  }

  h1 {
    font-size: 1rem;
    color: var(--text-title);
  }
  p {
    img {
      margin-right: 1rem;
    }
  }
  & > span {
    font-size: 0.8rem;
    color: var(--text-body);
    font-weight: 400;
    margin-bottom: 30px;
  }
`;
