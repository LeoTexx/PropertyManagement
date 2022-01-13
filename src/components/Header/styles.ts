import styled from "styled-components";

interface Props {
  width: number;
  height: number;
}

export const Container = styled.header<Props>`
  width: 100%;
  height: 560px;
  position: relative;
  z-index: -10;

  & > span {
    display: inline-block;
    max-width: 960px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30px;
    left: 0;
    right: 0;
    color: white;
    p {
      font-size: 1.3rem;
      font-weight: 100;
    }
    h6 {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  div {
    height: 100px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -22px;
    &:nth-child(1) {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 0 0 500px;
      border-color: transparent transparent transparent var(--background);
    }
    div {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 50px 500px;
      border-color: transparent transparent var(--background) transparent;
    }
  }
`;
