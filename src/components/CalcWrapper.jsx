import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftCalc from './LeftCalc';
import RightCalc from './RightCalc';

const CalcWrapper = () => {
  const [buttonValue, setButtonValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [personValue, setPersonValue] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [tip, setTip] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(null);

  const handleAmount = () => {
    let tipAmount;
    let totalPerson;

    if (customTip === 0) {
      tipAmount = parseFloat(((inputValue * buttonValue) / 100 / personValue).toFixed(2));
    } else {
      tipAmount = parseFloat(((inputValue * customTip) / 100 / personValue).toFixed(2));
    }
    totalPerson = parseFloat((inputValue / personValue + tipAmount).toFixed(2));

    setTip(Number(tipAmount));
    setTotalPerson(Number(totalPerson));
  };

  const handleReset = () => {
    setButtonValue(0);
    setInputValue(0);
    setPersonValue(0);
    setCustomTip(0);
    setTip(0);
    setTotalPerson(0);
    setIsButtonActive(false);
  };

  useEffect(() => {
    if (
      (personValue && inputValue && buttonValue) ||
      (customTip && personValue && inputValue)
    ) {
      handleAmount();
    }
  }, [buttonValue, customTip, inputValue, personValue]);

  return (
    <CalcContainer>
      <LeftCalc
        buttonValue={buttonValue}
        setButtonValue={setButtonValue}
        setInputValue={setInputValue}
        inputValue={inputValue}
        personValue={personValue}
        setPersonValue={setPersonValue}
        customTip={customTip}
        setCustomTip={setCustomTip}
        isButtonActive={isButtonActive}
        setIsButtonActive={setIsButtonActive}
      />
      <RightCalc tip={tip} totalPerson={totalPerson} reset={handleReset} />
    </CalcContainer>
  );
};

const CalcContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 87px;
  width: 920px;
  height: 481px;
  background-color: var(--white);
  border-radius: 25px;
  overflow: hidden;

  @media only screen and (max-width: 375px) {
    width: 375px;
    height: 789px;
    flex-direction: column;
    margin-top: 40px;
  }
`;

export default CalcWrapper;
