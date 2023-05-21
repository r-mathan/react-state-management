import React, { useState } from 'react'

export default function StateCounter() {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((incr) => incr + 2)
    }
    const decrement = () => {
        setCounter((decr) => decr - 2)
    }

  return (
    <>
        <h1>Counter Value is: {counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  )
}
