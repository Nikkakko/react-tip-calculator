import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: var(--light-grayish-cyan);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 375px) {
    height: 100%;
  }
`;

export const LogoWrapper = styled.div`
  width: 86.66px;
  height: 53.14px;
  margin-top: 163px;

  @media only screen and (max-width: 375px) {
    margin-top: 50px;
  }
`;

export const HeaderLogo = styled.img``;
