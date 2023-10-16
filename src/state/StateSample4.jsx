import React, { useState } from 'react'

function StateSample4() {

    const [name, setName] = useState("");
    const [users, setusers] = useState(["Çağatay", "Mustafa"]);


    const add = () => {
        setusers([...users, name])
    }

    return (<>
        <button onClick={() => setusers([])}>Clear</button>
        <h3>Length: {users.length}</h3>
        <div>
            <label htmlFor="">Name: </label>
            <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
        <div>
            <ul>
                {
                    users.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    </>
    )
}

export default StateSample4