import React from 'react'
import { StyledFilterbar,StyledWrapper2 } from './Styledfilterbar'

const Filterbar = () => {
  return (
    <div>
        <StyledWrapper2>
         <StyledFilterbar>
            <div style={{fontSize:"1em"}}>Cardio</div>
            <div style={{fontSize:"1em"}}>Strength</div>
            <div style={{fontSize:"1em"}}>Yoga</div>
            <div style={{fontSize:"1em"}}>Flexibility</div>
            <div style={{fontSize:"1em"}}>Male</div>
            <div style={{fontSize:"1em"}}>Female</div>
         </StyledFilterbar>
        </StyledWrapper2>
       

    </div>
  )
}
export default Filterbar
