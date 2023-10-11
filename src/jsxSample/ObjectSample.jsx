import React from 'react'

function ObjectSample() {

    var user = {
        name: "Çağatay",
        surname: "Yıldız",
        address: {
            city:"İstanbul"
        }
    }

    return (<>
        <h1>{user.name}</h1>
        <h1>{user.surname}</h1>
        <h1>{user.address.city}</h1>
    </>)
}

export default ObjectSample