import React, { useState }  from "react";
import "./style.css";

function App() {
  const [ calc, setCalc ] = useState("");
  const [ total, setTotal ] = useState("");

  const operator = ['-', '+', '/', '*', '.'];
  const updateCalc = value => {
    if (
      operator.includes(value) && calc === '' ||
      operator.includes(value) && operator.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value)
    if (!operator.includes(value)){
      setTotal(eval(calc + value).toString())
    }
  }

  const createNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>{i}</button>
      )
    }
    return numbers;
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const clear = () => {
    if (calc === '') {
      return
    } else {
      const value = calc.slice(0, -1);
      setCalc(value)
    }
  }
  
  return (
    <div className="calculator">
      <div className="calc">
        <div className="display">
          { total ? <span>[ { total } ] </span> : ''} { calc || 0}
        </div>    
        
        <div className="operators">
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('/')}>/</button>

          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={clear}>C</button>
        </div>

        <div className="numbers">
          { createNumbers() }
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;