import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsDataGrid() {

    const [products, setproducts] = useState([])


    const columns = [
        {
            field: 'id',
            headerName: 'Product ID',
            width: 150
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150
        },
        {
            field: 'unitPrice',
            headerName: 'Price',
            width: 150
        }, {
            field: 'unitsInStock',
            headerName: 'Stock',
            width: 150
        }

    ]

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })
    })

    return (<>
        <div style={{ width: '100%', height: 500 }}>
            <DataGrid
                rows={products}
                columns={columns}
            />
        </div>

    </>
    )
}

export default ProductsDataGrid