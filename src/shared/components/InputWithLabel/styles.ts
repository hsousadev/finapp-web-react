import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  > h4 {
    margin-bottom: 16px;
    font-weight: bold;
  }

  .input-div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 95%;

    border: 2px solid var(--Black-800);
    border-radius: 16px;
    padding: 16px;

    img {
      margin-right: 8px;
    }

    input {
      border: none;
      padding: 0;
      width: 100%;
      border-radius: 0;
    }
  }
`;
