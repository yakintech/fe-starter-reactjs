import axios from 'axios';
import React, { useEffect, useState } from 'react'

function OrderPage() {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        loadOrders();
    }, [])

    const loadOrders = () => {
        axios.get('https://northwind.vercel.app/api/orders')
            .then(res => {
                setOrders(res.data);
            })
    }


    const deleteOrder = (id) => {

        var result = window.confirm("Want to delete?");
        if (result) {

            axios.delete('https://northwind.vercel.app/api/orders/' + id)
                .then(res => {
                    loadOrders();
                })
        }


    }


    return (<>
        <h1>Orders Length: {orders.length}</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Customer Id</th>
                    <th>Employee Id</th>
                    <th>Order Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.customerId}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.orderDate}</td>
                            <td><button onClick={() => deleteOrder(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>


    </>)
}

export default OrderPage