import { StyledButton } from "./style";

export function Button({ type, children, onClickFunction }) {
  return (
    <StyledButton type={type} onClick={onClickFunction}>
      {children}
    </StyledButton>
  );
}
