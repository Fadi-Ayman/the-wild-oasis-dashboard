import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 800px) {
    height: 230.3vh;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4rem 6.4rem;
  overflow: auto;

  @media (max-width: 940px) {
    padding: 4rem 2rem 6.4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
