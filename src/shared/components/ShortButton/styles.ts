import styled from "styled-components";

export const Container = styled.button`
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  background-color: var(--Black-800);
  border-radius: 16px;

  :hover {
    opacity: 50%;
    transition: all 0.4s ease-in-out;
  }
`;
