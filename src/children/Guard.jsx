import React from 'react'

function Guard({ children }) {

  if(5 < 3){
    return children
  }
  else{
    return <p>Yetkisiz erişim...</p>
  }

  
}

export default Guard