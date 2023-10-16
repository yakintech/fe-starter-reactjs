import React, { useState } from 'react'

function StateSample3() {

    const [randomNumbers, setrandomNumbers] = useState([15, 20, 21])

    const add = () => {
            var randomNumber = Math.floor(Math.random() * 100);
           // randomNumbers.push(randomNumber);


            setrandomNumbers([...randomNumbers, randomNumber]);

    }

    return (<>
        <button onClick={() => add()}>Add Random</button>
        <ul>
            {
                randomNumbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateSample3