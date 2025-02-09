import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BackGround from './BackGround'
import DarkMode from './DarkMode'
import PaddingsContainer from './PaddingsContainer'
import LanguageDropDown from './LanguageDropDown'
import ThemeDropDown from './ThemeDropDown'
import MainSection from './MainSection'


const SettingsCodeSnippet = () => {
  
  const [selectedTheme, setSelectedTheme] = useState({
    type: "gradient",
    value: ['rgb(165, 142, 251)', 'rgb(233, 191, 248)'],
    images: "",
    backdrounds: "",
    childbackgrounds: "rgba(0, 0, 0, .75)",
    whitebackgrounds: "hsla(0, 0%, 100%, .75)",
  });
  
  useEffect(() => {
    setSelectedTheme(selectedTheme)
  },[]);
  
  
  const [selectedLanguage, setSelectedLanguage] = useState('Ruby');
  const [backgroundEnabled, setBackgroundEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [selectedPadding, setSelectedPadding] = useState(64);
  
  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };
  
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };
 
  const handleBackgroundToggle = (backgroundValue) => {
    setBackgroundEnabled(backgroundValue); 
  
  };
  
  const handleDarkModeToggle = (darkmodeValue) => {
    setDarkModeEnabled(darkmodeValue); 
  };
  
  const handlePaddingSelect = (padding) => {
    setSelectedPadding(padding);

  };
  
  return (
    <CodeSnippetSettingsConatiner>
      <MainSection selectedTheme={selectedTheme} selectedLanguage={selectedLanguage}
        backgroundEnabled={backgroundEnabled} darkModeEnabled={darkModeEnabled}
        selectedPadding={selectedPadding} />
      <SettingContainer>
        <ThemeDropDown onThemeSelect={handleThemeSelect} />
        <BackGround onBackgroundToggle={handleBackgroundToggle} />
        <DarkMode onDarkModeToggle={handleDarkModeToggle} />
        <PaddingsContainer onPaddingSelect={handlePaddingSelect} />
        <LanguageDropDown onLangSelect={handleLanguageSelect} />
      </SettingContainer>
    </CodeSnippetSettingsConatiner>
  )
}

export default SettingsCodeSnippet

const CodeSnippetSettingsConatiner = styled.div`
min-height: calc(100vh - 60px);
width:100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:1rem;

`;

const SettingContainer = styled.div`
width:750px;
position:fixed;
bottom: 0;
padding:1rem;
color:#B4B4B4;
justify-self: flex-end;
margin-bottom:0.1rem;
display: flex;
gap:0.98rem;
height:110px;
border: 1px solid rgb(65, 65, 65);
transition-duration: 0.3s;
border-radius:0.35rem;
background:#191919;
white-space: nowrap;


 @media (max-width:765px) {
   width:100%;
   gap:2rem;
   overflow-x: auto;
 }

 
   &::-webkit-scrollbar {
    height:8px; 
}
  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px; 
}

&::-webkit-scrollbar-thumb:hover {
    background: #555; 
}

&::-webkit-scrollbar-track {
    background: #191919; 
    border-radius: 4px; 
} 
`;