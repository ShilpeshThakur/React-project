import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(5)
    const addValue = () => {
        if(counter < 20){
            // counter = counter + 1
            setCounter((prevCounter)=> prevCounter + 1) // it has callback function . which give previous state and we can update the value
            setCounter((prevCounter)=> prevCounter + 1)
            setCounter(prevCounter => prevCounter + 1)
            setCounter(prevCounter=> prevCounter + 1)
        }
    }

    const removeValue = () => {
        if(counter > 0 ){
            counter = counter - 1
            setCounter(counter)
        }
    }
  return (
    <>
      <h1>Chai aur react</h1>
      <h1>Counter  : {counter}</h1>

        <button
            onClick={addValue}
        > Add value to {counter}</button>
        <br/>
        <button
            onClick={removeValue}
        > Remove Value from {counter}</button>
    </>
  )
}

export default App
