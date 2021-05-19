import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  function clickedNum(e) {
    let givenNum = result.replace(/,/g, '') + e.target.innerText;
    const numFormat = new Intl.NumberFormat('en-GB')
    setResult(numFormat.format(givenNum))
  }
  return (

    <div>
      <h2>calc</h2>
      <div className="clacWindow">{result}</div>
      <div className="board">
        <div className="numBoard">
          <div className="button" onClick={clickedNum}>1</div>
          <div className="button" onClick={clickedNum}>2</div>
          <div className="button" onClick={clickedNum}>3</div>
          <div className="button" onClick={clickedNum}>4</div>
          <div className="button" onClick={clickedNum}>5</div>
          <div className="button" onClick={clickedNum}>6</div>
          <div className="button" onClick={clickedNum}>7</div>
          <div className="button" onClick={clickedNum}>8</div>
          <div className="button" onClick={clickedNum}>9</div>
        </div>
        <div className="calcSymbols">
          <div>+</div>
          <div>-</div>
          <div>x</div>
          <div>/</div>
        </div>
      </div>
      <div onClick={() => setResult("")}>Reset</div>
      <div>=</div>
    </div>
  );
}

export default App;
