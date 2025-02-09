import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';


const PaddingsContainer = ({ onPaddingSelect }) => {
   
   const paddings = [16, 32, 64, 128];
   const [selectedPadding, setSelectedPadding] = useState(64);

   useEffect(() => {
      if (onPaddingSelect) {
         onPaddingSelect(64); 
      }
   }, []);
   
   const handlePaddingClick = (value) => {
      setSelectedPadding(value)
      if (onPaddingSelect) {
         onPaddingSelect(value);
      }
   };
   
   
  return (
     <PaddingsMainContainer>
        <strong>Paddings</strong>
        <PaddingsBtnConatiner >
        {paddings.map((num, index) => (
           <PaddingsBtn key={index} onClick={() => handlePaddingClick(num)}
              $isSelected={selectedPadding === num}>{num}</PaddingsBtn>
        ))}
        </PaddingsBtnConatiner>
    </PaddingsMainContainer>
  )
}

export default PaddingsContainer


const PaddingsMainContainer = styled.div`
/* width:29%; */
width:207.53px;
height:100%;
gap:0.8rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


strong{
   align-self: flex-start;
}

`;

const PaddingsBtnConatiner = styled.div`
width:100%;
display: flex;
flex-direction: row;
gap:0.35rem;

`;
   
const PaddingsBtn = styled.span`
border: 1px solid rgb(65, 65, 65);
transition-duration: 0.3s;
border-radius:0.35rem;
display: flex;
align-items: center;
justify-content: center;
height:35px;
padding:0.15rem;
width:35px;
background: ${({ $isSelected }) =>
      $isSelected
         ? 'linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34))'
         : 'transparent'};
  color: ${({ $isSelected }) => ($isSelected ? 'white' : 'inherit')};

&:hover{
  cursor: pointer; 
  background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
}

`;
