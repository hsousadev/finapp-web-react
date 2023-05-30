import styled from "styled-components";

export const Container = styled.div`
  padding: 64px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
      color: var(--White);

      a {
        transition: all 0.5s ease-in-out;
        color: var(--Green-700);
        appearance: none;
        font-weight: bold;
        text-decoration: none;
      }

      a:hover {
        opacity: 50%;
      }
    }
  }

  @media(max-width: 540px) {
    padding: 32px;
  }
`;
