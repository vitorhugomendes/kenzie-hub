import { StyledForm } from "./style";

export function Form({ children, onSubmitFunction }) {
  return <StyledForm onSubmit={onSubmitFunction}>{children}</StyledForm>;
}
