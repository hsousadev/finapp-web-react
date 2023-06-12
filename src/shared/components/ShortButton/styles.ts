import styled, { css } from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.button`
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 16px;

  ${(props) =>
    props.color
      ? css`
          background-color: ${props.color};
        `
      : css`
          background-color: var(--Black-800);
        `}

  :hover {
    opacity: 50%;
    transition: all 0.4s ease-in-out;
  }


  @media(max-width: 540px) {
    img {
      width: 16px;
      height: 16px;
    }
  }
`;
