import React from 'react'

const ClickAndDoubleClick = () => {

    const handleClick = () => {
        console.log("Single Click")
    }

    const doubleClick = () => {
      console.log("Double Click")
    }
  return (
    <div>
        <div style={{textAlign:'center', height:"100vh", width:"100vw", display:'flex', justifyContent:"center", alignItems:"center"}}>
            <button onClick={handleClick} onDoubleClick={doubleClick} style={{backgroundColor:'green', padding:'12px', borderRadius:'5px', color:'white', fontWeight:'bold'}}>Click Me</button>
        </div>
    </div>
  )
}

export default ClickAndDoubleClick