import styled from "styled-components";

export const Container = styled.div`
  .account-edit-modal {
    .inputs {
      .search-by-date {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 8px;

        h4 {
          font-weight: bold;
        }

        input {
          width: 128px;
          border-radius: 16px;
        }
      }

      .select {
        border: 1px solid var(--Black-800);
        border-radius: 16px;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        gap: 8px;

        h4 {
          font-weight: bold;
        }

        select {
          width: 100%;
          height: 60px;
        }
      }
    }
  }
`;
