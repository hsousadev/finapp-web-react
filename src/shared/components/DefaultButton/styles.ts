import styled, { css } from "styled-components";

interface ContainerProps {
  btnColor?: string;
  fontColor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  button:hover {
    opacity: 80%;
  }

  button {
    transition: all 0.4s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 16px;

    ${(props) =>
      props.btnColor
        ? css`
            background-color: ${props.btnColor};
          `
        : css`
            background-color: var(--Green-700);
          `}

    h4 {
      font-weight: bold;
      ${(props) =>
        props.fontColor
          ? css`
              color: ${props.fontColor};
            `
          : css`
              color: var(--Black-900);
            `}
    }

    @media (max-width: 720px) {
      gap: 4px;
      padding: 8px;
    }

    @media (max-width: 540px) {
      width: 80%;
    }
  }
`;
