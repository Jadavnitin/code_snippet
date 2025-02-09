import React from 'react'
import styled from 'styled-components'
import FootBall from './FootBall'
import Untitled from './Untitled'


const BallUntitled = () => {
   return (
      <BallUntitledContainer>
         <FootBall/>
         <Untitled />
      </BallUntitledContainer>
  )
}

export default BallUntitled

const BallUntitledContainer = styled.div`
display: flex;
width:100%;
padding:0 16px;
gap:12px;
box-sizing: border-box;
align-items: center;
justify-content: center;
height:24px;
overflow:inherit;


`;