import React from 'react'
import styled from 'styled-components'
import ResizableDiv from './ResizeAbleDiv'




const MainSection = ({ selectedTheme, selectedLanguage, backgroundEnabled, darkModeEnabled, selectedPadding}) => {
  return (
    <>
      <SnippetMainContainer >
        <ResizableDiv theme={selectedTheme} language={selectedLanguage}
          backgroundToggle={backgroundEnabled} darkModeToggle={darkModeEnabled}
          padding={selectedPadding} />
      </SnippetMainContainer>
    </>
  )
}

export default MainSection

const SnippetMainContainer = styled.div`
display: flex;
justify-content: center;
margin:100px auto 100px auto;
width:100%;
height:auto;
`;




