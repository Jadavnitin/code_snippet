import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { GoChevronUp } from "react-icons/go";
import LanguageContent from './LanguageContent';

const LanguageDropDown = ({onLangSelect}) => {
   
   const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);
   const [selectedLanguage, setSelectedLanguage] = useState('Ruby'); // Default language
   const dropdownRef = useRef(null);
   
   const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
      onLangSelect(language); 
      setShowLanguageDropDown(false); 
   };
   
   
  
   

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowLanguageDropDown(false);
         }
      };

      const handleBodyScroll = (event) => {
         // Allow scrolling inside the dropdown, prevent on the rest of the page
         if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
            return;
         }
         event.preventDefault();
      };

      if (showLanguageDropDown) {
         document.body.style.overflow = "hidden"; // Prevent page scrolling
         document.addEventListener("wheel", handleBodyScroll, { passive: false });
         document.addEventListener("touchmove", handleBodyScroll, { passive: false });
      } else {
         document.body.style.overflow = "auto"; // Re-enable page scrolling
         document.removeEventListener("wheel", handleBodyScroll);
         document.removeEventListener("touchmove", handleBodyScroll);
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
         document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
         document.removeEventListener("wheel", handleBodyScroll);
         document.removeEventListener("touchmove", handleBodyScroll);
      };
   }, [showLanguageDropDown]);
   
   return (
   <>
         
      <LanguageMainContainer ref={dropdownRef}>
         <strong>Language</strong>
         <LanguageContainer onClick={() => setShowLanguageDropDown((prev) => !prev)}>
            <strong>{selectedLanguage}</strong>
            <GoChevronUp />
         </LanguageContainer>
         {showLanguageDropDown && (
            <LanguageContent onLangSelect={handleLanguageSelect} />
         )}
         </LanguageMainContainer>
      </>
  )
}

export default LanguageDropDown



const LanguageMainContainer = styled.div`
width:154px;
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



 @media (max-width:765px) {
   margin-right:10px;
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
width:150px;
color:white;
padding:0.6rem;
background-color: transparent;



`;