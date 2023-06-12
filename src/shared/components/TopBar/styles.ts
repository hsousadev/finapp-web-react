import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-top: 32px;

  .left {
    > img {
      margin-right: 8px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  @media (max-width: 540px) {
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 16px;
      width: 100%;

      > img {
        height: 32px;
        width: 90px;
      }
    }

    .right {
      flex-direction: column;
    }

    justify-content: center;
    flex-direction: column;
    gap: 16px;
  }
`;
