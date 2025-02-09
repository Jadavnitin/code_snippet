import React from 'react'
import styled from 'styled-components'

const FootBall = () => {
   return (
      <FootMainBallContainer>
     <FootBallContainer>
     </FootBallContainer>
      <FootBallContainer>
    </FootBallContainer>
     <FootBallContainer>
      </FootBallContainer>
         </FootMainBallContainer>
    
  )
}

export default FootBall

const FootMainBallContainer = styled.div`
display: flex;
gap:6px;
box-sizing: border-box;
`;


const FootBallContainer = styled.div`
width:12px;
height:12px;
border-radius: 6px;
background-color:hsla(0, 0%, 100%, .3);
`;
