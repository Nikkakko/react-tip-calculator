import React, { useState } from 'react';
import styled from 'styled-components';
import dollarIcon from '../assets/icon-dollar.svg';
import personIcon from '../assets/icon-person.svg';

const LeftCalc = ({
  setButtonValue,
  inputValue,
  setInputValue,
  personValue,
  setPersonValue,
  customTip,
  setCustomTip,
  isButtonActive,
  setIsButtonActive,
}) => {
  const [personAlert, setPersonAlert] = useState(false);
  const buttonNumbers = [5, 10, 15, 25, 50];

  const handleButton = index => {
    if (customTip > 0) {
      setCustomTip(0);
      setIsButtonActive(index);
    }
  };
  const handlePersonValue = e => {
    if (e.target.value === '0' || e.target.value < 0) {
      setPersonAlert(true);
      setPersonValue(1);
    } else {
      setPersonValue(e.target.value);
      setPersonAlert(false);
    }

    if (e.target.value === '') {
      return;
    }
  };

  return (
    <LeftContainer isButtonActive={isButtonActive}>
      <Bill>Bill</Bill>
      <BillWrapper>
        <Dollar src={dollarIcon} alt='dollar-icon' />
        <InputMain
          required
          onFocus={e => e.target.focus()}
          type='number'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='0'
        />
      </BillWrapper>
      <Tip>Select Tip %</Tip>
      <TipContainer>
        {buttonNumbers.map((number, index) => (
          <TipButton
            onClick={() => {
              setButtonValue(number);
              setIsButtonActive(index);
              handleButton(index);
            }}
            style={
              isButtonActive === index && customTip <= 0
                ? { backgroundColor: '#9FE8DF' }
                : { background: '#00474B' }
            }
            key={index}
            value={number}
          >
            {number}%
          </TipButton>
        ))}
        <InputTip
          value={customTip}
          onChange={e => setCustomTip(e.target.value)}
          placeholder='Custom'
          type='number'
        />
      </TipContainer>
      <PeopleWrapper>
        <NumberOfPeople>Number of People</NumberOfPeople>
        <CantBeZero personAlert={personAlert}>
          {personAlert ? "Can't be zero" : ' '}
        </CantBeZero>
      </PeopleWrapper>
      <PersonWrapper>
        <PersonIcon src={personIcon} alt='person-icon' />
        <PeopleInput
          personAlert={personAlert}
          required
          type='number'
          value={personValue}
          onChange={handlePersonValue}
          placeholder='0'
        />
      </PersonWrapper>
    </LeftContainer>
  );
};

const LeftContainer = styled.div`
  width: 379px;
  height: 388px;
  margin: 45px 0 0 48px;

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--dark-grayish-cyan);
  }

  @media only screen and (max-width: 375px) {
    margin: 32px 0 0 32px;
  }
`;

const BillWrapper = styled.div`
  position: relative;
`;
const Dollar = styled.img`
  position: absolute;
  left: 5.08%;
  right: 92.32%;
  top: 35.15%;
  bottom: 32.65%;
`;

const TipContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 22px;

  @media only screen and (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TipButton = styled.button`
  color: var(--white);
  width: 117px;
  height: 48px;
  border-radius: 5px;
  border: none;

  /* &:hover {
    background: #9fe8df;
    color: var(--very-dark-cyan);
  } */

  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  cursor: pointer;

  text-align: center;
`;

const InputMain = styled.input`
  width: 379px;
  height: 48px;
  border-radius: 5px;
  cursor: pointer;

  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  border: none;
  background: #f3f9fa;

  text-align: right;
  padding: 6px 17px 6px 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border: 2px solid var(--strong-cyan);
  }

  @media only screen and (max-width: 375px) {
    width: 311px;
    height: 48px;
  }
`;

const InputTip = styled.input`
  width: 118px;
  height: 48px;
  border-radius: 5px;
  background-color: #f3f9fa;
  border: none;

  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  text-align: right;
  padding: 6px 15px;

  &::placeholder {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */
    padding: 6px 15px;
    text-align: right;
    color: var(--dark-grayish-cyan);
  }
  &:focus {
    outline: none;
    border: 2px solid #26c2ae;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  // @ media
  @media only screen and (max-width: 375px) {
    width: 111.81px;
    height: 48px;
  }
`;

const Bill = styled.h3`
  margin-bottom: 6px;
`;

const Tip = styled.h3`
  margin-top: 40px;
  margin-bottom: 16px;
`;

const PeopleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 6px;

  @media only screen and (max-width: 375px) {
    margin-top: 32px;
    width: 311px;
  }
`;

const NumberOfPeople = styled.h3``;

const CantBeZero = styled.span`
  display: ${props => (props.personAlert ? 'block' : 'none')};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #e17457;
  /* identical to box height */
`;

const PersonWrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 375px) {
  }
`;
const PersonIcon = styled.img`
  position: absolute;
  left: 5.08%;
  right: 92.32%;
  top: 35.15%;
  bottom: 32.65%;
`;

const PeopleInput = styled.input`
  padding: 6px 17px 6px 6px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-align: right;
  background: #f3f9fa;
  color: #00474b;
  border: ${props => (props.personAlert ? '2px solid #E17052;' : 'none')};

  width: 379px;
  height: 48px;
  border-radius: 5px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 375px) {
    width: 311px;
    height: 48px;
  }
`;
export default LeftCalc;
