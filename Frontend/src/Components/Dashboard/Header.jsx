import React from 'react'
import logo from '../../assets/finallogo.png'
import { StyledDiv, StyledPara, StyledHeader, StyledHeaderWrapper } from './StyledDashboard'

const Header = () => {
  return (<StyledHeaderWrapper> 
  
    <img src={logo} style={{height:"7%",width:"4%",marginLeft:"0%",marginTop:"0%"}}></img>
    <StyledDiv>
        <StyledHeader>Welcome back <span>User</span></StyledHeader>
        <StyledPara>Ready to achieve your fitness goals today?</StyledPara>
    </StyledDiv>
    </StyledHeaderWrapper>
  )
}

export default Header