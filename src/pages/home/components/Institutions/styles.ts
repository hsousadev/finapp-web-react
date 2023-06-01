import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-top: 96px;
  width: 100%;

  h2 {
    margin-bottom: 32px;
    font-weight: bold;
  }

  .list {
    width: 100%;
    height: 248px;
    overflow-y: scroll;
  }
`;
