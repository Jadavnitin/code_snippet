   import React from 'react'
import styled from 'styled-components';

const LanguageContent = ({ onLangSelect }) => {
   
   const languages = [
      "Auto-Detect", "Bash", "Astro", "C++", "C#", "Clojure", "Crystal", "Css",
      "Dart", "Diff", "Docker", "Elm", "ERB", "Elixir", "Erlang", "Gleam",
      "GraphQL", "Go", "Haskell", "Html", "Java", "Javascript", "Julia", "JSON",
      "JSX", "Kotlin", "LaTeX", "Lisp", "Lua", "Markdown", "MATLAB", "Move",
      "Plaintext", "Powershell", "Objective-C", "OCaml", "PHP", "Prisma", "Python",
      "R", "Ruby", "Rust", "Scala", "SCSS", "Solidity", "SQL", "Swift", "Svelte",
      "TOML", "Typescript", "TSX", "Vue", "XML", "YAML", "Zig"
   ];
   
  return (
    <LanguageDropDownContent>
      {languages.map((language) => (
        <a key={language} onClick={() => onLangSelect(language)}>
          {language}
        </a>
      ))}
    </LanguageDropDownContent>
  )
}

export default LanguageContent


const LanguageDropDownContent = styled.div`
display:flex;
gap: 0.25rem;
height: auto;
bottom: 0;
flex-direction: column;
overflow-y: auto; 
max-height:590px; 
position:fixed;
padding: 0.6rem;
z-index:100;
font-size:0.8rem;
letter-spacing: 2px;
color:#B1B1B1;
cursor: pointer;
border-radius: 8px;
background: #191919;
border: 1px solid rgb(65, 65, 65);
transition-duration: 0.3s;
border-radius: 0.35rem;


 @media (max-width:765px) {
   right:10px;
 }


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
    background: #191919;
    border-radius: 4px; 
  }
  
  
    
a{
   padding: 0.6rem;
   text-decoration: none;
   display: flex;
   justify-content:space-between;
   align-items: center;
}

  a:hover{
    background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
     --blue: #1B9CFD;
     color: var(--blue);
  }
  
   @media (max-width: 765px) {
    scroll-margin: 20px;
    scroll-snap-align: start;
    margin-left:10px;
  } 
  
`;  