import React, { useEffect, useState } from 'react'

function EffectSample2() {

    const [number, setNumber] = useState(0);

    console.log('RENDER!!!!');
    
    var randomNumber = 0;

    useEffect(() => {
        randomNumber = Math.random() * 1000;
        setNumber(randomNumber);
    }, [])



    return (<>
        <h1>{number}</h1>
    </>
    )
}

export default EffectSample2