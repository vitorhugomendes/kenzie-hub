import { StyledLink } from "./style";

export function Link({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
