import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: fit-content;
  gap: 8px;

  button {
    transition: all 0.4s ease-in-out;

    :hover {
      opacity: 50%;
      transition: all 0.4s ease-in-out;
    }
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;
    padding: 8px;
    gap: 8px;

    background: var(--Black-800);

    h4 {
      font-weight: bold;
    }
  }
`;
