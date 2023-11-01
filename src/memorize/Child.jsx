import React, { useCallback, useMemo } from 'react'

function Child() {


    console.log('Child sample...');

    // const generateRandomNumber = () => {
    //     return Math.random() * 10000
    // }

    // var random = generateRandomNumber();


    //bir fonksiyondan DÖNEN DEĞERİ MEMORIZE EDİYORUM!!
    var random = useMemo(() =>{
        return Math.random() * 10000
    } , [])


    const consoleWrite = useCallback(() => {
        console.log(Math.random() * 10000);
    }, [])

    return (<>
        <h1>{random}</h1>
        <div>Child</div>
        <button onClick={() => consoleWrite()}>Write</button>
    </>
    )
}

export default Child