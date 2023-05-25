import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;
  padding: 32px;

  border-radius: 32px;
  border: 2px solid var(--Black-800);

  width: fit-content;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 8px;
  }
  
  h2 {
    font-weight: bold;
  }
`;
