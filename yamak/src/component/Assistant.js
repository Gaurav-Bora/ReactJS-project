import React from 'react'
import Dropdown from './Dropdown'
import TextChange from './TextChange'
const Assistant = () => {
  return (
    <>
    <div style={{display:'flex'}}>
        <Dropdown name= 'Prompt'/>
        <Dropdown name= 'creativity'/>

    </div>
    <TextChange/>
    </>
  )
}

export default Assistant