import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;

  display: ${(props) => props.hidden === true ? 'none' : 'block'};
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo({isHidden}) {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo hidden={isHidden}>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
