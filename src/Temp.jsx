import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Temp = () => {
    let [data,setData]=useState([])

  
  return (
    <div>
        {
            data.map((v,i)=>(
                <h5>{v.login}</h5>
            ))
        }
    </div>
  )
}

export default Temp