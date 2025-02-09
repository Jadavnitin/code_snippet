import React, {  useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import BallUntitled from './BallUntitled'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prismStyles from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useCodeFormat } from '../context/CodeFormatContext';  
const CodeLibraryStrings = [
   {
      name: "generateBackground",
      func: `function (theme) {
               if (theme.type === "svg") {
               if (theme?.images && theme?.backdrounds) {
                  return \`\${theme.backdrounds} url(\${theme.images}) no-repeat center center / cover\`;
               } else if (theme?.backdrounds) {
                  return \`\${theme.backdrounds} no-repeat center center / cover\`;
               } else {
                  return "none";
               }
            } else {
               if (theme?.images) {
                  return \`url(\${theme.images}) no-repeat center center / cover\`;
               } else {
                  return \`linear-gradient(140deg, \${theme.value[0]}, \${theme.value[1]})\`;
               }
            }
         }
      `,
   },
   {
      name: "capitalizeFirstLetter",
      func: `function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
         }
      `,
   },
   {
      name: "getRandomNumber",
      func: `function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
         }
      `,
   },
   {
      name: "isPalindrome",
      func: `function (str) {
            const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            return cleaned === cleaned.split("").reverse().join("");
         }
      `,
   },
   {
      name: "calculateSum",
      func: `function (numbers) {
            return numbers.reduce((sum, num) => sum + num, 0);
         }
      `,
   },
   {
      name: "convertToCamelCase",
      func: `function (str) {
            return str
               .split(" ")
               .map((word, index) =>
                  index === 0
                     ? word.toLowerCase()
                     : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
               )
               .join("");
         }
      `,
   },
   {
      name: "filterEvenNumbers",
      func: `function (numbers) {
            return numbers.filter((num) => num % 2 === 0);
         }
      `,
   },
   {
      name: "reverseString",
      func: `function (str) {
            return str.split("").reverse().join("");
         }
      `,
   },
   {
      name: "sortArray",
      func: `function (arr) {
            return [...arr].sort((a, b) => a - b);
         }
      `,
   },
   {
      name: "countVowels",
      func: `
         function (str) {
            const vowels = "aeiouAEIOU";
            return str.split("").filter((char) => vowels.includes(char)).length;
         }
      `,
   },
];

const CodeContentDiv = ({ language,theme ,darkModeToggle}) => {
   
   
   const { code } = useCodeFormat();
   
  
   
   
   const [showFunction, setShowFunction] = useState(() => {
      
      const randomIndex = Math.floor(Math.random() * CodeLibraryStrings.length);
      return CodeLibraryStrings[randomIndex].func;
   });
   
   
   
   const [ignoreNextBlur, setIgnoreNextBlur] = useState(false);
   const [isEditing, setIsEditing] = useState(false);
   const [editedFunction, setEditedFunction] = useState(showFunction);

   const textareaRef = useRef(null); 
   
   const handleEditToggle = () => {
      setIsEditing(!isEditing);
   };

   const handleInputChange = (e) => {
      setEditedFunction(e.target.value);
   };

   const handleSave = () => {
      if (editedFunction.trim() === "") {
         setShowFunction(""); // Reset if empty
      } else {
         setShowFunction(editedFunction); // Save the updated function
      }
      setIsEditing(false);
   };
   
   
   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === "f" || e.key === "F") {
            e.preventDefault(); 
            handleEditToggle(); 
         }
      };

      // Add event listener
      document.addEventListener("keydown", handleKeyDown);

      // Clean up event listener
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   }, []);
  
   useEffect(() => {
      if (isEditing && textareaRef.current) {
         textareaRef.current.focus();
      }
   }, [isEditing]);
   
   
   
   
   
 
   
   
   const handleTextareaBlur = () => {
      if (!ignoreNextBlur) {
         handleSave();
      }
      setIgnoreNextBlur(false); // Reset flag
   };
   
   
   useEffect(() => {
      const handleMouseDown = (e) => {
         // Check if click is inside navbar (adjust selector as needed)
         if (e.target.closest('.navbar')) {
            setIgnoreNextBlur(true);
         }
      };

      document.addEventListener('mousedown', handleMouseDown);
      return () => document.removeEventListener('mousedown', handleMouseDown);
   }, []); 
   
   
   useEffect(() => {
      if (code) {
         setShowFunction(code);
         setEditedFunction(code); // Sync the editing state with formatted code
      }
   }, [code]);
   
   
   return (
     
      <CodeContainer theme={theme} $darkModeToggle={darkModeToggle} >
         <BallUntitled />
         <CodeContentContainer onClick={!isEditing ? handleEditToggle : null}
          >
            {isEditing ? (
               <textarea
                  ref={textareaRef}
                  value={editedFunction}
                  onChange={handleInputChange}
                  onBlur={handleTextareaBlur}  // Save when the user clicks outside
                  style={textareaStyle}
                  spellCheck={false}
                  
               />
            ) 
            : (
                  <SyntaxHighlighter 
                  className="syntax-highlighter-custom"
                  language={language.toLowerCase()}
                  style={prismStyles.vscDarkPlus}
                  showLineNumbers={false}
               
                  customStyle={{
                     borderRadius: "0 0 10px 10px",
                     padding: "16px 16px 16px 8px",
                     fontSize: "25px",
                     lineHeight: "1.5",
                     color: "red",
                     overflowX: "auto",
                     backgroundColor: "transparent",
                     maxWidth: "100%",
                     scrollbarWidth: "thin",
                     scrollbarColor: "#888 #1E1E1E",
                     WebkitOverflowScrolling: "touch",
                  }}>
            
                  {showFunction}
               </SyntaxHighlighter>
            )}
         </CodeContentContainer>
     </CodeContainer>
  )
}

export default CodeContentDiv

const CodeContainer = styled.div`
height:auto;
width:100%;
background: ${(props) => (props.$darkModeToggle ? props.theme.childbackgrounds : props.theme.whitebackgrounds)};
border-radius:10px;
padding-top:10px;
overflow: hidden;
box-shadow:${(props) => (props.$darkModeToggle ? "0 0 0 1px hsla(0, 0 %, 100 %, .3), 0 0 0 1.5px rgba(0, 0, 0, .8), 0 2.8px 2.2px rgba(0, 0, 0, .034), 0 6.7px 5.3px rgba(0, 0, 0, .048), 0 12.5px 10px rgba(0, 0, 0, .06), 0 22.3px 17.9px rgba(0, 0, 0, .072), 0 41.8px 33.4px rgba(0, 0, 0, .086), 0 100px 80px rgba(0, 0, 0, .12)" :
   "0 0 0 1px hsla(0, 0 %, 100 %, 0.75), 0 0 0 1.5px rgba(0, 0, 0, .1), 0 2.8px 2.2px rgba(0, 0, 0, .034), 0 6.7px 5.3px rgba(0, 0, 0, .048), 0 12.5px 10px rgba(0, 0, 0, .06), 0 22.3px 17.9px rgba(0, 0, 0, .072), 0 41.8px 33.4px rgba(0, 0, 0, .086), 0 100px 80px rgba(0, 0, 0, .12)")};
  
  

`;


const CodeContentContainer = styled.div`
z-index: 2;
font-family: "'Courier New', Courier, monospace";
min-height:125px;
letter-spacing: 1.10px;
line-height: 33.5px;
tab-size: 2;
color:${(props) => (props.$darkModeToggle ? "black": "white")};
text-align:left;
transition: padding .2s;
padding:16px;
white-space: pre-wrap;



@media (max-width:765px) {
   font-size:30px;
   letter-spacing:2px;
   line-height: 45px;
}



`;


const textareaStyle = {
   width: "100%",
   minHeight: "125px",
   fontFamily: "'Courier New', Courier, monospace",
   fontSize: "16px",
   borderRadius: "10px", 
   padding: "16px",
   border: "1px solid transparent", 
   outline: "none",
   overflowX: "auto", 
   background: "inherit", 
   boxShadow: "inherit",
   color: "inherit", 
   resize: "none", 
   whiteSpace: "inherit", 
   transition: "background 0.3s ease, box-shadow 0.3s ease", 
   scrollbarWidth: "thin",
   scrollbarColor: "#888 #1E1E1E",
   WebkitOverflowScrolling: "touch",
   fontWight: "600",
   spellCheck:"false"
   
};

