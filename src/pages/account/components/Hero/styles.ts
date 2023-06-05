import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 64px;

  .account {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 24px;

    .logo-and-name {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      gap: 24px;

      img {
        object-fit: contain;
      }

      .division-line {
        border: 1px solid var(--White);
        height: 32px;
      }

      h2 {
        font-weight: bold;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 8px;
    }
  }
`;
