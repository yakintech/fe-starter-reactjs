import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function ContactPage() {

  const { counter } = useContext(CounterContext)

  return (<>
    <h1>{counter}</h1>
  </>
  )
}

export default ContactPage