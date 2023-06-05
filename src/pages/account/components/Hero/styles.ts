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

  .account-edit-modal,
  .account-delete-modal {
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
    }
  }

  .account-edit-modal {
    .inputs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      width: 100%;
      gap: 32px;
    }
  }

  .account-delete-modal {
    .warning {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;

      width: 100%;

      h3 {
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;
