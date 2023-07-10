

type DisplayProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Display: React.FC<DisplayProps> = ({ handleClick }): JSX.Element => (
  <div className="btn-container">
    <div className="flex">

      <button type="button" data-testid="AC" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>AC</button>

      <button type="button" data-testid="+/-" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>+/-</button>

      <button type="button" data-testid="%" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>%</button>

      <button type="button" data-testid="÷" className="w-24 h-12 border-solid border border-gray-300 font-bold bg-orange-500" onClick={handleClick}>&divide;</button>

    </div>
    <div className="flex">

      <button type="button" data-testid="7" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>7</button>

      <button type="button" data-testid="8" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>8</button>

      <button type="button" data-testid="9" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>9</button>

      <button type="button" data-testid="x" className="w-24 h-12 border-solid border border-gray-300 font-bold bg-orange-500" onClick={handleClick}>x</button>

    </div>
    <div className="flex">

      <button type="button" data-testid="4" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>4</button>

      <button type="button" data-testid="5" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>5</button>

      <button type="button" data-testid="6" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>6</button>

      <button type="button" data-testid="-" className="w-24 h-12 border-solid border border-gray-300 font-bold bg-orange-500" onClick={handleClick}>-</button>

    </div>
    <div className="flex">

      <button type="button" data-testid="1" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>1</button>

      <button type="button" data-testid="2" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>2</button>

      <button type="button" data-testid="3" className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>3</button>

      <button type="button" data-testid="+" className="w-24 h-12 border-solid border border-gray-300 font-bold bg-orange-500" onClick={handleClick}>+</button>

    </div>
    <div className="flex">

      <button type="button" data-testid="0" className="w-48 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>0</button>

      <button type="button" data-testid="." className="w-24 h-12 border-solid border border-gray-300 font-bold" onClick={handleClick}>.</button>

      <button type="button" data-testid="=" className="w-24 h-12 border-solid border border-gray-300 font-bold bg-orange-500" onClick={handleClick}>=</button>

    </div>

  </div>
);

export default Display;
