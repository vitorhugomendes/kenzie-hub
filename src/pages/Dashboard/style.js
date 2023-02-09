import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    border-top: 2px solid var(--grey-3);
    border-bottom: 2px solid var(--grey-3);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: var(--font-size-16px);
    line-height: 156%;

    color: var(--grey-0);
  }

  p {
    font-weight: 600;
    font-size: var(--font-size-12px);
    line-height: 150%;

    color: var(--grey-1);
  }

  h3 {
    font-weight: 400;
    font-size: var(--font-size-16px);
    line-height: 152%;

    color: #ffffff;
  }

  @media (min-width: 750px) {
    section > div {
      flex-direction: row;
      justify-content: space-between;
    }

    div {
      margin: 0 100px;
    }
  }
`;
