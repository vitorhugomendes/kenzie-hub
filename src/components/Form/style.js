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

  input {
    font-weight: 400;
    font-size: var(--font-size-16px);
    line-height: 163%;

    padding: 10px 16px;

    outline-color: var(--grey-0);

    background: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 4px;
  }

  button {
    font-weight: 500;
    font-size: var(--font-size-16px);
    line-height: 165%;

    padding: 0 22px;

    color: #ffffff;
    background: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
  }

  button:hover {
    background: var(--color-primary-focus);
    border: 1px solid var(--color-primary-focus);
  }
`;
