import React from 'react';
import { HeaderLogo, LogoWrapper, StyledWrapper } from './components/Wrapper';
import Logo from './assets/logo.svg';
import GlobalStyle from './globalStyles';
import CalcWrapper from './components/CalcWrapper';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <LogoWrapper>
          <HeaderLogo src={Logo} />
        </LogoWrapper>
        <CalcWrapper />
      </StyledWrapper>
    </>
  );
};

export default App;
