import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import {SideBarMini} from "./Sidebar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  width: 100%;
  min-width: 741px;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  max-height: 8rem;
`;

function Header() {
  return (
    <StyledHeader>
      <SideBarMini />
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
