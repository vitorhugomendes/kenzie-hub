import { StyledButton } from "./style";

export function Button({ type, text, onClickFunction }) {
  return (
    <StyledButton type={type} onClick={onClickFunction}>
      {text}
    </StyledButton>
  );
}
