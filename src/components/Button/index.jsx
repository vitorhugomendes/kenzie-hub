import { StyledButton } from "./style";

export function Button({ text, onClickFunction }) {
  return <StyledButton onClick={onClickFunction}>{text}</StyledButton>;
}
