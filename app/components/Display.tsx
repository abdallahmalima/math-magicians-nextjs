import React from 'react';
import { CalculatorState } from '../../lib/calculate';

type DisplayProps = {
  calculateObject: CalculatorState;
};

const Display: React.FC<DisplayProps> = ({ calculateObject }): JSX.Element => {
  const { total, operation, next } = calculateObject;

  return (
    <div data-testid="screen" className="flex p-2 bg-gray-300 h-14 w-auto justify-end items-center">
      <p>
        {total}
        {operation}
        {next}
      </p>
    </div>
  );
};

export default Display;
