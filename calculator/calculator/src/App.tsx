
import { useState, useRef } from 'react'
import './App.css'

function App() {
  
  const [inpVal, setinpVal] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;   


    if (key >= '0' && key <= '9') {
      setinpVal(inpVal + key);
    } else if (key === 'Backspace') {
      setinpVal(inpVal.slice(0, -1));
    }
  };

  const handleNumberClick=(value: string)=>{
    setinpVal(inpVal + value)
  }



  const handleClearButton = ()=>{
    setinpVal('')
  }


  return (
    <>
<h2>Calculator</h2>

<div className="calculator">

<input
        type="text"
        value={inpVal}
        readOnly
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    <div className="calculator__output">{inpVal}</div>

    <div className="calculator__keys">

        <button className="calculator_key calculator__key--operator">+</button>
        <button className="calculator_key calculator__key--operator">-</button>
        <button className="calculator_key calculator__key--operator">x</button>
        <button className="calculator_key calculator__key--operator">/</button>

        <button onClick={()=>handleNumberClick('1')} className="calculator_key">1</button>
        <button onClick={()=>handleNumberClick('2')} className="calculator_key">2</button>
        <button onClick={()=>handleNumberClick('3')} className="calculator_key">3</button>
        <button onClick={()=>handleNumberClick('4')} className="calculator_key">4</button>
        <button onClick={()=>handleNumberClick('5')} className="calculator_key">5</button>
        <button onClick={()=>handleNumberClick('6')} className="calculator_key">6</button>
        <button onClick={()=>handleNumberClick('7')} className="calculator_key">7</button>
        <button onClick={()=>handleNumberClick('8')} className="calculator_key">8</button>
        <button onClick={()=>handleNumberClick('9')} className="calculator_key">9</button>
        <button onClick={()=>handleNumberClick('0')} className="calculator_key">0</button>
        <button onClick={()=>handleNumberClick('.')} className="calculator_key">.</button>
        <button onClick={()=>handleClearButton()} className="calculator_key">C</button>

        <button className='calculator_key calculator__key--enter'>=</button>

    </div>

</div>
  
    </>
  )
}

export default App
