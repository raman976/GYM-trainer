import React from 'react'
import { StyledDashboardCard, StyledDashboardInnerWrapper, StyledDashboardOuterWrapper } from './StyledDashboard'

const Features = () => {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <StyledDashboardOuterWrapper>
            <h2 style={{color:"white",fontWeight:"bold"}}>AI Fitness Tools</h2>
            <StyledDashboardInnerWrapper>
                <StyledDashboardCard>
                    <h3>Calorie Tracker</h3>
                    <p>Track your daily calorie intake and expenditure.</p>
                </StyledDashboardCard>
                <StyledDashboardCard>
                    <h3>Calorie Tracker</h3>
                    <p>Track your daily calorie intake and expenditure.</p>
                </StyledDashboardCard>
                <StyledDashboardCard>
                    <h3>Calorie Tracker</h3>
                    <p>Track your daily calorie intake and expenditure.</p>
                </StyledDashboardCard>
                <StyledDashboardCard>
                    <h3>Calorie Tracker</h3>
                    <p>Track your daily calorie intake and expenditure.</p>
                </StyledDashboardCard>
            </StyledDashboardInnerWrapper>
        </StyledDashboardOuterWrapper>
    </div>
          
    
  )
}

export default Features