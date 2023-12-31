import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function AboutPage() {

  const {counter, setcounter } = useContext(CounterContext)


  return (<>
    <h1>{counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>Increase</button>
  </>
  )
}

export default AboutPage