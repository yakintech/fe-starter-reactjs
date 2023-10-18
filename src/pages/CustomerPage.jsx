import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CustomerPage() {

    const [customers, setcustomers] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data)
            })

    }, [])


    return (<>
        <table className='w3-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default CustomerPage