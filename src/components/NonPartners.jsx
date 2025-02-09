import React from 'react'
import styled from 'styled-components'

const NonPartners = ({onThemeSelect}) => {
   
   
   const themes = [
      { name: "Bitmap", colors: ["rgb(136, 22, 22)", "rgb(241, 57, 63)"], image: "/images/bitmaptheme.png", childbackground: "rgba(0, 0, 0, .88)", whitebackground: "hsla(0, 0%, 100%, .95)" },
      { name: "Noir", colors: ["rgb(177, 177, 177)", "rgb(24, 24, 24)"], image: "/images/noirtheme.png", childbackground: "rgba(0, 0, 0, .9)", whitebackground: "hsla(0, 0%, 100%, .95)" },
      { name: "Ice", colors: ["rgb(255, 255, 255)", "rgb(128, 222, 234)"], background: "#0e0e0e radial-gradient(hsla(0, 0%, 100%, 0.15) 1px, transparent 0)", childbackground: "rgba(0, 0, 0, .75)", whitebackground: "hsla(0, 0%, 100%, .75)" },
      { name: "Sand", colors: ["rgb(238, 213, 182)", "rgb(175, 136, 86)"], childbackground: "rgba(0, 0, 0, .75)", whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Forest", colors: ["rgb(80, 104, 83)", "rgb(33, 50, 35)"], childbackground: "rgba(0, 0, 0, .75)"      ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Mono", colors: ["rgb(51, 51, 51)", "rgb(24, 24, 24)"],         childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Breeze", colors: ["rgb(207, 47, 152)", "rgb(106, 61, 236)"],   childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Candy", colors: ["rgb(165, 142, 251)", "rgb(233, 191, 248)"],  childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Crimson", colors: ["rgb(255, 99, 99)", "rgb(115, 52, 52)"],    childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Falcon", colors: ["rgb(189, 227, 236)", "rgb(54, 54, 84)"],    childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Meadow", colors: ["rgb(89, 212, 153)", "rgb(160, 135, 45)"],   childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Midnight", colors: ["rgb(76, 200, 200)", "rgb(32, 32, 51)"],   childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Raindrop", colors: ["rgb(142, 199, 251)", "rgb(28, 85, 170)"], childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
      { name: "Sunset", colors: ["rgb(255, 207, 115)", "rgb(255, 122, 47)"],  childbackground: "rgba(0, 0, 0, .75)" ,whitebackground:"hsla(0, 0%, 100%, .75)"},
   ];
   
   const handleSelect = (theme) => {
      onThemeSelect({ type: "gradient", value: theme.colors, images: theme.image, backdrounds: theme.background, childbackgrounds: theme.childbackground, whitebackgrounds: theme.whitebackground });
   };
   
  
   
  return (
     <>
        {themes.map((theme, index) => (
           <ThemeNonParteners key={index} onClick={() => handleSelect(theme)}>
              <NonPartnersImgContainer style={{
                 backgroundImage: `linear-gradient(140deg, ${theme.colors[0]}, ${theme.colors[1]})`,
              }}  ></NonPartnersImgContainer>
              <span>{theme.name}</span>
              {theme.image && ""}
              {theme.background && ""}
              {theme.childbackground && ""}
              {theme.whitebackground && ""}
           </ThemeNonParteners>
        ))}
     </>
  )
}

export default NonPartners


const ThemeNonParteners = styled.div`
padding: 0.6rem;
text-decoration: none;
display: flex;
gap:0.5rem;
align-items:center;
text-align: center;


  &:hover{
    background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
  }
  
  span{
   font-size:0.8rem;
  }
`;


const NonPartnersImgContainer = styled.span`
height:25px;
width:25px;
border-radius:50%;
`;
