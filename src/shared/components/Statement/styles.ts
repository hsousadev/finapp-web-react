import styled from "styled-components";

export const Container = styled.div`
  margin-top: 64px;
  width: 100%;

  h2 {
    font-weight: bold;
    margin-bottom: 32px;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-by-date {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      p {
        color: var(--Red-100)
      }

      h4 {
        font-weight: bold;
      }

      input {
        gap: 4px;
        border: 1px solid var(--Black-800);
        padding: 12px 16px;
        border-radius: 16px;
        width: 128px;
        color: var(--White);
      }
    }
  }

  .list {
    width: 100%;
  }
`;
