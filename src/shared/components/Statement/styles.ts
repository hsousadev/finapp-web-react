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
    align-items: flex-start;
    justify-content: space-between;

    .search-by-date {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      h4 {
        font-weight: bold;
      }

      input {
        width: 128px;
        border-radius: 16px;
      }
    }
  }

  .list {
    width: 100%;
    height: 248px;
    overflow-y: scroll;
  }
`;
