import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setcounter] = useState(0);
    const [products, setproducts] = useState([]);

    console.log('RENDER');

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })


    }, [])


    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>

        <ul>
            {
                products.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>)
}

export default EffectSample