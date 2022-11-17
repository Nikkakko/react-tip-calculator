import React from 'react';
import styled from 'styled-components';

const RightCalc = ({ tip, totalPerson, reset }) => {
  return (
    <RightContainer>
      <Wrapper>
        <TopDiv>
          <div>
            <TipAmount>Tip Amount</TipAmount>
            <span>/ person</span>
          </div>
          <p>${tip}</p>
        </TopDiv>
        <BottomDiv>
          <div>
            <Total>Total</Total>
            <span>/ person</span>
          </div>
          <p>${totalPerson}</p>
        </BottomDiv>
      </Wrapper>
      <ResetButton onClick={() => reset()}>RESET</ResetButton>
    </RightContainer>
  );
};

const RightContainer = styled.div`
  width: 413px;
  height: 417px;

  background-color: var(--very-dark-cyan);
  border-radius: 15px;
  margin: 32px 32px 32px 48px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: #fff;
  }

  span {
    color: var(--dark-grayish-cyan);
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
  }

  p {
    font-size: 48px;
    line-height: 71px;
    /* identical to box height */

    text-align: right;
    letter-spacing: -1px;

    color: #26c2ae;
  }

  @media only screen and (max-width: 375px) {
    width: 327px;
    height: 257px;
    margin: 0px 24px 24px 32px;

    p {
      font-size: 32px;
    }
    span {
      font-size: 13px;
    }
  }
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 0 40px;

  @media only screen and (max-width: 375px) {
    padding: 39px 24px 0 24px;
  }
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const TipAmount = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  // @media
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;
const Total = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

const ResetButton = styled.button`
  width: 333px;
  height: 48px;
  border-radius: 5px;
  margin: 0 40px 40px 40px;
  border: none;
  background-color: var(--strong-cyan);
  cursor: pointer;

  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;
  font-weight: 700;
  color: #00474b;

  margin-bottom: 40px;

  &:hover {
    background: #9fe8df;
    color: #00474b;
  }

  @media only screen and (max-width: 375px) {
    width: 281px;
    margin: 0 22px 24px 24px;
  }
`;

export default RightCalc;
