import React, { useRef, useState } from 'react'

function RefSample() {

    const pRef = useRef(null)

    const changeColor = () => {
        pRef.current.style.color = 'red'
    }

    return (<>

        <p ref={pRef}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quasi maxime animi repellat ab quia in numquam, blanditiis nisi adipisci distinctio? Rem, enim cupiditate? Iste accusantium laboriosam id aut ad.</p>
        <button onClick={changeColor}>Change Color</button>
    </>
    )
}

export default RefSample