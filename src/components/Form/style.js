import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  min-width: 260px;

  label {
    font-weight: 400;
    font-size: var(--font-size-12px);
    line-height: 0%;

    color: var(--grey-0);
  }

  input,
  select {
    font-weight: 400;
    font-size: var(--font-size-16px);
    line-height: 163%;

    padding: 10px 16px;

    outline-color: var(--grey-0);

    background: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 4px;
  }

  span {
    font-weight: 400;
    font-size: var(--font-size-12px);
    line-height: 0;

    margin-bottom: 10px;

    color: var(--negative);
  }
`;
