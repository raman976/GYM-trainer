import React from 'react'

const Card = (props) => {
  return (
    <div>
         <div key={props.props.id} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
                        <h2>{props.props.name}</h2>
                        <p>{props.props.description}</p>
                        <img src={props.props.image} alt={props.props.name} style={{width:"100px", height:"100px"}}/>
                    </div>
    </div>
  )
}
export default Card