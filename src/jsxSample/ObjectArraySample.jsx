import React from 'react'
import { categoriesData } from '../data/categoriesData'


function ObjectArraySample() {


  return (<>
  <table className='w3-table'>
      <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
          {
              categoriesData.map((item) => {
                  return <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                  </tr>
              })
          }
      </tbody>
  </table>
  </>)
}

export default ObjectArraySample