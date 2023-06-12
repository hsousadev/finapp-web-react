import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  backdrop-filter: blur(8px);

  z-index: 2;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 64px;

  width: 100%;
  max-width: 674px;
  padding: 32px;

  background: var(--Black-900);
  box-shadow: 0px 4px 64px 20px rgba(36, 36, 36, 0.2);
  border-radius: 32px;

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    gap: 32px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

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

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  @media (max-width: 780px) {
    width: 70%;
  }

  @media (max-width: 540px) {
    .buttons {
      flex-direction: column-reverse;
      gap: 16px;
    }
  }
`;
