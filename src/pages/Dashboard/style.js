import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .user-info__section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    border-top: 2px solid var(--grey-3);
    border-bottom: 2px solid var(--grey-3);
  }

  .user-info__section > div,
  .user-techs__section > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .user-info__section > div > h2 {
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

  .user-techs__section > div {
    padding: 0 1rem;
  }

  .user-techs__section > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-techs__section > div > div > h3 {
    font-weight: 600;
    font-size: var(--font-size-16px);
    line-height: 112%;

    color: var(--grey-0);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;

    background: var(--grey-3);
    border-radius: 4px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;

    background: var(--grey-4);
    border-radius: 4px;
  }

  li > h2 {
    font-weight: 700;
    font-size: var(--font-size-14px);
    line-height: 156%;

    color: var(--grey-0);
  }

  li:hover {
    background: var(--grey-2);

    p {
      color: var(--grey-0);
    }
  }

  @media (min-width: 750px) {
    .user-info__section > div {
      flex-direction: row;
      justify-content: space-between;
    }

    .user-info__section > div {
      margin: 0 100px;
    }
  }
`;
