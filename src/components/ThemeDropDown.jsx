import React, {  useState } from 'react';
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

   const toggleDropdown = () => {
      setShowThemeDropDown((prev) => !prev);
   };
 
 
   
   const handleThemeSelect = (theme) => {
      setSelectedTheme(theme);
      console.log(theme)
      onThemeSelect(theme);  // Pass the selected theme to the parent
      setShowThemeDropDown(false);
   };

   return (
      <ThemeMainContainer>
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
  width: 22%;
  gap: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
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
  width: 55%;
  color: white;
  padding: 0.6rem;
  background-color: transparent;
`;

const ThemeImageContainer = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-image: linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248));
`;
