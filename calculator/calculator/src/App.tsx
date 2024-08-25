
import { useState } from 'react'
import './App.css'

function App() {
  
  const [inpVal, setinpVal] = useState('')

  const handleNumberClick=(value: string)=>{
    setinpVal(inpVal + value)
  }

  const handleClearButton = ()=>{
    setinpVal('')
  }

  return (
    <>
<h2>Calculator</h2>

<input id='input' value={inpVal} type='text'></input>

<div className='grid-container'>

<button className='grid-item' onClick={()=>handleNumberClick('1')} >1</button>
<button className='grid-item' onClick={()=>handleNumberClick('2')}>2</button>
<button className='grid-item' onClick={()=>handleNumberClick('3')}>3</button>

<button className='grid-item' onClick={()=>handleNumberClick('4')}>4</button>
<button className='grid-item' onClick={()=>handleNumberClick('5')}>5</button>
<button className='grid-item' onClick={()=>handleNumberClick('6')}>6</button>

<button className='grid-item' onClick={()=>handleNumberClick('7')}>7</button>
<button className='grid-item' onClick={()=>handleNumberClick('8')}>8</button>
<button className='grid-item' onClick={()=>handleNumberClick('9')}>9</button>

<button className='grid-item' onClick={()=>handleNumberClick('2')}>1</button>
<button className='grid-item' onClick={()=>handleNumberClick('0')}>0</button>
<button className='grid-item' onClick={()=>handleClearButton()}>clear</button>
</div>




        
    </>
  )
}

export default App
