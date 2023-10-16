import React, { useState } from 'react'

function StateColorSample5() {
    const [color, setColor] = useState("gray");

    var colors = ["gray", "tomato", "red", "orange", "yellow", "gray", "purple", "brown", "black", "aqua", "pink", "white", "blue"]

   
    const change = () => {
        var randomColor = Math.floor(Math.random() * colors.length);

        setColor(colors[randomColor]);
    }

    return (<>
        <button onClick={change}>Change Color!</button>
        <div style={{ width: 300, height: 300, backgroundColor: color }}>

        </div>
    </>)
}

export default StateColorSample5