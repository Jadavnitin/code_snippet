import React, { useState } from 'react'
import styled from 'styled-components'

const DarkMode = ({ onDarkModeToggle }) => {
  
  const [isDarkMode, setIsDarkMode] = useState(true); // Track the dark mode state

  const handleChange = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    onDarkModeToggle(newValue); // Pass the updated value to the parent
  };
  
  return (
    <DarkModeContainer>
      <strong>Dark Mode</strong>
      <SmallToggleSwitch>
        <SmallSwitchLabel>
          <SmallCheckbox type="checkbox" checked={isDarkMode}
            onChange={handleChange} />
          <SmallSlider />
        </SmallSwitchLabel>
      </SmallToggleSwitch>
  </DarkModeContainer>
  )
}

export default DarkMode

const DarkModeContainer = styled.div`
/* width:13%; */
width:94.65px;
height:100%;
gap:0.8rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



`;


const SmallToggleSwitch = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
`;

const SmallSwitchLabel = styled.label`
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: var(--dark, #28292c);
  border-radius: 15px;
  cursor: pointer;
  border: 2px solid var(--dark, #28292c);
`;

const SmallCheckbox = styled.input`
  position: absolute;
  display: none;

  &:checked ~ span {
    background-color: var(--light, #d8dbe0);
  }

  &:checked ~ span::before {
    transform: translateX(30px);
    background-color: var(--dark, #28292c);
    box-shadow: none;
  }
`;

const SmallSlider = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: inset 8px -3px 0px 0px var(--light, #d8dbe0);
    background-color: var(--dark, #28292c);
    transition: 0.3s;
  }
`;