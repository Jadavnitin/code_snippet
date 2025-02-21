import React, {  useEffect, useRef, useState } from 'react';
import { GoChevronUp } from 'react-icons/go';
import styled from 'styled-components';
import ThemeContent from './ThemeContent';

const ThemeDropDown = ({ onThemeSelect }) => {
   const [selectedTheme, setSelectedTheme] = useState({
      type: "gradient",
      value: ['rgb(165, 142, 251)', 'rgb(233, 191, 248)'],
      images: "",
      backdrounds:"",
      childbackgrounds: "rgba(0, 0, 0, .75)",
      whitebackgrounds: "hsla(0, 0%, 100%, .75)",
   });

   
  
   const [showThemeDropDown, setShowThemeDropDown] = useState(false);
   const dropdownRef = useRef(null);
   
   
   const toggleDropdown = () => {
      setShowThemeDropDown((prev) => !prev);
   };
   

   const disableScroll = (event) => {
      event.preventDefault();
   };
 
    useEffect(() => {
       const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
             setShowLanguageDropDown(false);
          }
       };
 
       if (showThemeDropDown) {
          document.body.style.overflow = "hidden"; // Disable scrolling
          document.addEventListener("wheel", disableScroll, { passive: false });
          document.addEventListener("touchmove", disableScroll, { passive: false });
       } else {
          document.body.style.overflow = "auto"; // Enable scrolling again
          document.removeEventListener("wheel", disableScroll);
          document.removeEventListener("touchmove", disableScroll);
       }
 
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
          document.removeEventListener("wheel", disableScroll);
          document.removeEventListener("touchmove", disableScroll);
       };
    }, [showThemeDropDown]);
   
   const handleThemeSelect = (theme) => {
      setSelectedTheme(theme); useEffect(() => {
         const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
               setShowLanguageDropDown(false);
            }
         };

         if (showLanguageDropDown) {
            document.body.style.overflow = "hidden"; // Disable scrolling
            document.addEventListener("wheel", disableScroll, { passive: false });
            document.addEventListener("touchmove", disableScroll, { passive: false });
         } else {
            document.body.style.overflow = "auto"; // Enable scrolling again
            document.removeEventListener("wheel", disableScroll);
            document.removeEventListener("touchmove", disableScroll);
         }

         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
            document.removeEventListener("wheel", disableScroll);
            document.removeEventListener("touchmove", disableScroll);
         };
      }, [showLanguageDropDown]);
      console.log(theme)
      onThemeSelect(theme);  // Pass the selected theme to the parent
      setShowThemeDropDown(false);
   };

   return (
      <ThemeMainContainer ref={dropdownRef}>
         <strong>Theme</strong>
         <ThemeContainer onClick={toggleDropdown}>
            {selectedTheme.type === "svg" ? (
               selectedTheme.value
            ) : (
               <ThemeImageContainer
                  style={{
                     backgroundImage: `linear-gradient(140deg, ${selectedTheme.value[0]}, ${selectedTheme.value[1]})`,
                  }}
               ></ThemeImageContainer>
            )}
            <GoChevronUp />
         </ThemeContainer>
         {showThemeDropDown && <ThemeContent onThemeSelect={handleThemeSelect} />}
      </ThemeMainContainer>
   );
};

export default ThemeDropDown;

const ThemeMainContainer = styled.div`
  width:150px;
  gap: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  
  
 @media (max-width:765px) {
   margin-left:10px;
 }
`;

const ThemeContainer = styled.button`
  border: 1px solid rgb(65, 65, 65);
  transition-duration: 0.3s;
  border-radius: 0.35rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  width:80px;
  color: white;
  padding: 0.6rem;
  background-color: transparent;
  position: relative;
`;

const ThemeImageContainer = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-image: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));
`;
