import React from 'react'
import styled from "styled-components"
import ShortcutConatiner from './ShortcutConatiner'


const AboutPage = () => {
   return (
     <AboutDropdownContainer>
         <AboutDropdownContent className="about-dropdown-content">
            
            <AboutText>
            <h1>About</h1>
            <p>Code Images by CodeSnippet is a tool to create beautiful screenshots of your code.</p>
            <p>Pick a theme from a range of syntax colors and backgrounds, the language of your code and choose between light or dark mode.</p>
            <p>Customize the padding and when you’re ready, click export image in the top-right corner to save the image as a png, svg or share a link to your code.</p>
            <p>You can also change the image resolution in the export menu.</p>
            <p>Note:-(same work done by f) If you want to use your code and take SVG or PNG files, first click, writed  code, and then remove it.</p>
            <p>Paste your code into the input area.</p>
            <p>After pasting, click anywhere outside the input area.</p>
            <p>The code you pasted will remain visible, while the input area (where you typed or pasted) will leave the view.</p> 
            </AboutText>
            
            <span className='hr-span'></span>
            
            
            <AboutBtnInfo>
               <h1>Shortcuts</h1>
               <ShortcutConatiner btnName="Focus text editor" btnicon="F" />
               <ShortcutConatiner btnName="Unfocus text editor" btnicon="Esc" />
               <ShortcutConatiner btnName="Change colors" btnicon="C" />
               <ShortcutConatiner btnName="Toggle background" btnicon="B" />
               <ShortcutConatiner btnName="Toggle dark mode" btnicon="D" />
               <ShortcutConatiner btnName="Change padding" btnicon="P" />
               <ShortcutConatiner btnName="Select language" btnicon="L" />
               <ShortcutConatiner btnName="Highlight line" btnicon="⌥" btnicon1="click" />
               <ShortcutConatiner btnName="Format code" btnicon="⌥" btnicon1="click" btnicon3="F" />
               <ShortcutConatiner btnName="Toggle export menu" btnicon="⌘" btnicon1="K" />
               <ShortcutConatiner btnName="Save PNG" btnicon="⌘" btnicon1="S" />
               <ShortcutConatiner btnName="Save SVG" btnicon="⌘" btnicon1="⇧" btnicon2="S" />
               <ShortcutConatiner btnName="Copy image" btnicon="⌘" btnicon1="C" />
               <ShortcutConatiner btnName="Copy URL" btnicon="⌘" btnicon1="⇧" btnicon2="C" />
               <ShortcutConatiner btnName="Open shorcut" btnicon="?" />
            </AboutBtnInfo>

         </AboutDropdownContent>
      </AboutDropdownContainer>
  )
}

export default AboutPage

const AboutBtnInfo = styled.div`
display: flex;
width:50%;
flex-direction: column;
word-spacing:5px;
line-height:2rem;

h1{
   color: white;
   font-size:2rem;
}


@media (max-width:765px){
  width: 100%;
  
  h1{
   text-align: center;
  }
}

`;


const AboutText = styled.div`
width:40%;
font-size:1.2rem;
text-align: justify;
word-spacing:5px;
line-height:2rem;

h1{
   color: white;
}

p{
  color :#B4B4B4;
}

@media (max-width:765px){
   width: 100%;
   
   h1{
      text-align: center;
   }
}

`;


const AboutDropdownContainer = styled.div`
 display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
`;


const AboutDropdownContent = styled.div`
margin-top:2rem;
width:75%;
min-height:70vh;
font-size: 13px;
background-color: #212121;
border: 1px solid rgb(65, 65, 65);
border-radius: 15px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
position: relative;
padding:1.25rem;
display: flex;
flex-direction:row;
justify-content: space-between;


.hr-span{
   content:"";
   height:94%;
   width:1px;
   top:2rem;
   left:45%;
   border:1px solid rgb(65, 65, 65);
   position: absolute;
   
}


@media (max-width:765px){
   flex-direction: column;
   
   .hr-span{
      display: none;
   }
}

`;