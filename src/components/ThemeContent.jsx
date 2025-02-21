import React from 'react'
import styled from 'styled-components';
import Partners from './Partners';
import NonPartners from './NonPartners';


const ThemeContent = ({ onThemeSelect }) => {

  return (
     <ThemeDropDownContent>
      <Partners onThemeSelect={onThemeSelect} />
        <Horizontalline></Horizontalline>
      <NonPartners onThemeSelect={onThemeSelect} />
     </ThemeDropDownContent>
  )
}

export default ThemeContent

const Horizontalline = styled.span`
content: "";
width:98.8%;
height:1px;
border:1px solid rgb(65, 65, 65);
`;

const ThemeDropDownContent = styled.div`
display:flex;
gap:0.25rem;
height: auto;
bottom: 0;
flex-direction: column;
overflow-y: auto; 
max-height:590px; 
position:fixed;
padding: 0.6rem;
z-index:100;
font-size: 0.7em;
letter-spacing: 2px;
color:#B1B1B1;
cursor: pointer;
border-radius: 8px;
background: #191919;
border: 1px solid rgb(65, 65, 65);
transition-duration: 0.3s;
border-radius: 0.35rem;


  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background: #333; /* Scrollbar color */
    border-radius: 4px; /* Rounded scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Darker color on hover */
  }

  &::-webkit-scrollbar-track {
    background: #191919; /* Scrollbar track color */
    border-radius: 4px; /* Match thumb rounding */
  }
  
    
  @media (max-width:765px) {
   left:10px;
 }
 
 
  @media (max-width: 765px) {
    scroll-margin: 20px;
    scroll-snap-align: start;
    margin-left:10px;
  } 
  
  
  
  
  
  
  
  
  

  
`;



