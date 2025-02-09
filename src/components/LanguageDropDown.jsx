import React, { useState } from 'react'
import styled from 'styled-components'
import { GoChevronUp } from "react-icons/go";
import LanguageContent from './LanguageContent';

const LanguageDropDown = ({onLangSelect}) => {
   
   const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);
   const [selectedLanguage, setSelectedLanguage] = useState('Ruby'); // Default language

   const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
      onLangSelect(language); 
      setShowLanguageDropDown(false); 
   };
   
   return (
     
      <LanguageMainContainer>
         <strong>Language</strong>
         <LanguageContainer onClick={() => setShowLanguageDropDown((prev) => !prev)}>
            <strong>{selectedLanguage}</strong>
            <GoChevronUp />
         </LanguageContainer>
         {showLanguageDropDown && (
            <LanguageContent onLangSelect={handleLanguageSelect} />
         )}
      </LanguageMainContainer>
  )
}

export default LanguageDropDown




const LanguageMainContainer = styled.div`
width:22%;
gap:0.8rem;
height:100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
position: relative;

strong{
   align-self: flex-start;
  
}

`;

const LanguageContainer = styled.button`
border: 1px solid rgb(65, 65, 65);
transition-duration: 0.3s;
border-radius:0.35rem;
font-size: 1rem;
font-weight:600;
display: flex;
justify-content: space-between;
align-items: center;
height:35px;
width:98%;
color:white;
padding:0.6rem;
background-color: transparent;


`;