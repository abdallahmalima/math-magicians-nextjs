
'use client'

import React, { useState } from 'react';
import calculate, { CalculatorState } from '../../lib/calculate';
import Display from './Display';
import ButtonsContainer from './ButtonsContainer';

const Calculator: React.FC = (): JSX.Element => {
  const [calculateObject, setCalculateObject] = useState<CalculatorState>({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const buttonName: string = e.currentTarget.innerText;
    const obj: CalculatorState = calculate(calculateObject, buttonName);
    setCalculateObject(obj);
  };

  return (
    <div className="shadow-lg shadow-indigo-500/50">
      <Display calculateObject={calculateObject} />
      <ButtonsContainer handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
