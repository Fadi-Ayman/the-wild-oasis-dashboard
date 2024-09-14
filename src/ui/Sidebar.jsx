import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1150px) {
    display: none;
  }

 
`;

const StyledSidebarMini = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  width: 100%;

  grid-row: 1 / -1;
  display: flex;
  flex-direction:row;
  gap: 3.2rem;

  @media (min-width: 1150px) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export function SideBarMini() {

  return (
    <StyledSidebarMini >
      <Logo isHidden={true} />
      <MainNav dir={"horizontal"}/>
    </StyledSidebarMini>
  );
}

export default Sidebar;
