import React from 'react'

function JsxIfElse() {

    var onlineStatus = true;

    //user online değilse ekrana "OFFLINE" online ise "ONLINE" yazsın.
    return (<>
        {
            onlineStatus == true ? <h1>User Online</h1> : <h1>User Offline</h1>
        }
    </>)
}

export default JsxIfElse