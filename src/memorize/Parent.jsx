import React, { useState } from 'react'
import Child from './Child'

function Parent() {

    const [counter, setcounter] = useState(0)

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <h1>Parent Component</h1>
        <Child />
    </>
    )
}

export default Parent