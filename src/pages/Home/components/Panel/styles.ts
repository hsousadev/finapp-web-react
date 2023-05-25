import styled from "styled-components";

export const Container = styled.div`
  margin-top: 64px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;

  .incomes-and-expenses {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;

    gap: 16px;
  }

  @media(max-width: 1232px) {
    flex-direction: column;
    gap: 32px;
  }
`;
