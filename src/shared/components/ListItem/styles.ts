import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-radius: 16px;
  margin-bottom: 8px;

  background: rgba(36, 36, 36, 0.25);

  &:hover {
    background: var(--Black-800);
  }

  .icon-and-name,
  .values {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: fit-content;
  }

  .icon-and-name {
    gap: 16px;
  }

  .values {
    gap: 8px;
    h4 {
      font-weight: bold;
      white-space: nowrap;
    }
  }

  @media (max-width: 540px) {
    gap: 4px;
    padding: 8px;
    align-items: center;
  }

  @media (max-width: 320px) {
    img {
      height: 18px;
      width: 18px;
    }
  }
`;
