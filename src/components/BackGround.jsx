import React, { useState } from 'react'
import styled from 'styled-components'

const BackGround = ({ onBackgroundToggle }) => {
  
  const [isChecked, setIsChecked] = useState(true); // Track the checkbox state

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onBackgroundToggle(newValue); // Pass the updated value to the parent
  };
  
  return (
     <BackGroundContainer>
        <strong>Background</strong>
        <SwitchWrapper>
        <HiddenCheckbox type="checkbox" checked={isChecked}
          onChange={handleChange} />
           <Slider />
        </SwitchWrapper>
    </BackGroundContainer>
  )
}

export default BackGround;

const BackGroundContainer = styled.div`
/* width:13%; */
width:94.65px;
gap:0.8rem;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



`;
const SwitchWrapper = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
`;

const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
    border: 2px solid #0974f1;
  }

  &:checked + span::before {
    transform: translateX(1.5em);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid #414141;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    left: 0.2em;
    bottom: 0.2em;
    background-color: white;
    border-radius: inherit;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;



// background-image: linear-gradient(45deg, #1d1d1d 25%, transparent 0), linear-gradient(-45deg, #1d1d1d 25%, transparent 0), linear-gradient(45deg, transparent 75%, #1d1d1d 0), linear-gradient(-45deg, transparent 75%, #1d1d1d 0);
//   background - position: 0 0, 0 10px, 10px - 10px, -10px 0;
// background - size: 20px 20px;