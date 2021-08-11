import { useState } from "react"

import './counter.style.css'

const Counter = () => {
    const [counterVal, setCounter] = useState(0)
    const [inputVal, setInputVal] = useState(1)

    const addNumber = () => {
        setCounter(counterVal + inputVal)
    }

    const subNumber = () => {
        setCounter(counterVal - inputVal)
    }

    return (
        <div>
            <h3 data-testid='header'>My Counter</h3>
            <h2 data-testid='counter' className={`${counterVal >= 100 ? `green` : ''}${counterVal <= -100 ? `red` : ''}`}>{counterVal}</h2>
            <button data-testid='sub-btn' onClick={subNumber}>-</button>
            <input 
            data-testid='input' 
            type="number" 
            value={inputVal} 
            onChange={(e) => setInputVal(parseInt(e.target.value))
            }/>
            <button data-testid='add-btn' onClick={addNumber}>+</button>
        </div>
    )
}

export default Counter
