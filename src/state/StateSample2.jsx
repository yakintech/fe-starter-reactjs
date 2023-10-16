import React, { useState } from 'react'

function StateSample2() {

    const [cities, setcities] = useState(["İzmir", "İstanbul", "Ankara", "Aydın"])

    return (<>
        <h1>Length: {cities.length}</h1>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
        <button onClick={() => setcities([])}>Empty</button>
    </>)
}

export default StateSample2





