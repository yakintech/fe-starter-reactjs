import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

function AddProduct() {

    const [name, setname] = useState('');
    const [unitPrice, setunitPrice] = useState(0);


    const add = () => {
        var newProduct = {
            name: name,
            unitPrice: unitPrice
        }

        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then(res => {
                alert('Successs')
            })
    }

    return (<>
        <div>
            <TextField size='medium' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <TextField size='small' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <Button onClick={() => add()} variant='contained'>Hello</Button>

    </>
    )
}

export default AddProduct