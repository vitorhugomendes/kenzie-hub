import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";

export function Header({ children }) {
  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="KenzieHub" />
      </div>
      {children}
    </StyledHeader>
  );
}
