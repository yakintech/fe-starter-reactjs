import React from 'react'

function JsxArraySample() {

    var cities = ["İstanbul", "İzmir", "Ankara", "Aydın", "Diyarbakır", "Edirne", "Erzurum", "Trabzon"];

    return (<>
        <h1>Length: {cities.length}</h1>
        <ul>
            {
                cities.map((item) => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default JsxArraySample