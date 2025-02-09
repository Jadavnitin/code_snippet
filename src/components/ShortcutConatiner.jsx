import React from 'react'
import styled from 'styled-components'

const ShortcutConatiner = ({ btnName, btnicon, btnicon1, btnicon2 }) => {
  return (
    <ShortcutBtnConatiner>
      <p>{btnName}</p>
      <BtnContainerShortcut>
      <span className='span'>{btnicon}</span>
      {btnicon1 && <span className='span'>{btnicon1}</span>}
        {btnicon2 && <span className='span'>{btnicon2}</span>}
      </BtnContainerShortcut>
    </ShortcutBtnConatiner>
  )
}

export default ShortcutConatiner

const BtnContainerShortcut = styled.div`
display: flex;
align-items: center;
gap:0.5rem;


`;


const ShortcutBtnConatiner = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
gap:1rem;

p{
  font-size:1rem;
  color:#B4B4B4;
}


.span{
  font-weight:600;
  font-size:15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #B4B4B4;
  height:30px;
  width:30px;
  border-radius:4px;
  padding:2px 2px;
  background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
  border: 1px solid rgb(65, 65, 65);
  transition-duration: 0.3s;
}

`;








