import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-top: 32px;

  @media (max-width: 540px) {
    justify-content: center;
    flex-direction: column;
  }
`;
