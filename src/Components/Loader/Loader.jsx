import React from 'react'
import { CircleLoader } from 'react-spinners'
function Loader() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}}>
        <CircleLoader color="rgba(8, 148, 217, 1)" />
    </div>
  )
}

export default Loader