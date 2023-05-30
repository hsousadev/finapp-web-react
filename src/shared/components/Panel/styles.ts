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

  @media (max-width: 1232px) {
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 940px) {
    .incomes-and-expenses {
      flex-direction: column;
    }
  }

  @media (max-width: 720px) {
    margin-top: 32px;
  }

  @media (max-width: 540px) {
    align-items: center;

    .incomes-and-expenses {
      flex-direction: column;
    }
  }
`;
