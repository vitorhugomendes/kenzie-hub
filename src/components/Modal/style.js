import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-self: center;

  background: var(--grey-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  .modal-header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    background: var(--grey-2);

    border-radius: 4px;
  }

  .modal-header__container > h2 {
    font-weight: 700;
    font-size: var(--font-size-14px);
    line-height: 171%;

    color: var(--grey-0);
  }

  .modal-header__container > button {
    font-weight: 600;
    font-size: 22px;
    background: none;
    border: none;

    color: var(--grey-1);
  }

  .modal-header__container > button:hover {
    color: var(--grey-4);
  }

  .modal-buttons__container {
    display: flex;
  }

  .modal-buttons__container > button {
    width: 100%;
  }
`;
