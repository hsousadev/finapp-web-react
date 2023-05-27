import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;

  background-color: var(--Green-700);

  h4 {
    color: var(--Black-900);
    font-weight: bold;
  }

  @media (max-width: 720px) {
    gap: 4px;
    padding: 8px;
  }

  @media (max-width: 540px) {
    width: 80%;
  }
`;
