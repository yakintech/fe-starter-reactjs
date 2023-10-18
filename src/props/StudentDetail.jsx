import React from 'react'

function StudentDetail(props) {

    const {name, email, country, city = "İzmir", hello} = props;
  return (<>
            <h1>Name: {name}</h1>
            <h1>EMail: {email}</h1>
            <h1>City: {city}</h1>
            <h1>Country: {country}</h1>
            <button onClick={hello}>Hello</button>
  </>
  )
}

export default StudentDetail


// StudentDetail.defaultProps = {
//     country: "Türkiye",
//     city: "İstanbul"
//   };