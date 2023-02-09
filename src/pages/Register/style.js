import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;

    width: 100%;
    max-width: 370px;

    background: var(--grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  h2 {
    margin-top: 20px;
    align-self: center;
    font-weight: 700;
    font-size: var(--font-size-16px);
    line-height: 156%;

    color: var(--grey-0);
  }

  p {
    align-self: center;

    font-weight: 600;
    font-size: var(--font-size-12px);
    line-height: 150%;

    color: var(--grey-1);
  }
`;
