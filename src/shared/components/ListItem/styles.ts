import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-radius: 16px;
  margin: 0 8px 8px 0;

  background: rgba(36, 36, 36, 0.25);

  img {
    object-fit: contain;
  }

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

    strong {
      opacity: 25%;
    }
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

export const ItemModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .item-modal {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .item-info {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 16px;

      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
      }
    }
  }
`;
