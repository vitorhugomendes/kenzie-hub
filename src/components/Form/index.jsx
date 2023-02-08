import { StyledForm } from "./style";

export function Form({ children, onSubmitFunction }) {
  return (
    <StyledForm action="submit" onSubmit={onSubmitFunction}>
      {children}
    </StyledForm>
  );
}
