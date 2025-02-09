import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import codeSnippetLogo from "../assets/codesnippet.svg"
import { FaInfoCircle, FaMagic, FaAngleRight } from 'react-icons/fa';
import { BsFileEarmarkImage, BsFileEarmarkImageFill, BsClipboard2Heart, BsArrowsAngleExpand, BsCCircle } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import MenuOption from './Menuoption';
import SizeDropDown from './SizeDropDown';
import html2canvas from 'html2canvas';
import { useCodeFormat } from '../context/CodeFormatContext';


const Navbar = () => {
  
  
  const { formatCode } = useCodeFormat();

  const handleFormatClick = () => {
    // Here you would get the current code to format
    const newFormattedCode = 'formatted code'; // Replace with actual formatting logic
    formatCode(newFormattedCode);
  };
  
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const [selectedSize, setSelectedSize] = useState("4x"); // Default to 4x

  const handleSizeChange = (size) => {
    event.preventDefault();
    setSelectedSize(size);
  };
  
  
  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };
 
 
  
  const handleClickOutside = (event) => {
    if (
      isDropdownVisible && // Only check when dropdown is visible
      event.target instanceof Element &&
      !event.target.closest(".paste-button-container") && // Outside of the container
      !event.target.closest(".dropdown-content") // Clicking inside dropdown shouldn't close it
    ) {
      setDropdownVisible(false);
    }
  };
  
  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible]); 
  
  
  
  const onExportClick = (e) => {
    e.preventDefault();
    const resizableDiv = document.querySelector('.resizable-div'); // Target the scrollable div

    if (resizableDiv) {
      const originalStyle = {
        width: resizableDiv.style.width,
        height: resizableDiv.style.height,
        overflow: resizableDiv.style.overflow,
        display: resizableDiv.style.display,
      };

      // Temporarily expand the div
      resizableDiv.style.width = 'auto';
      resizableDiv.style.height = 'auto';
      resizableDiv.style.overflow = 'visible';
      resizableDiv.style.display = 'block'; // Ensure block display for full width

      // Determine scale based on selected size
      let scale = 2; // Default to 2x
      if (selectedSize === '2x') {
        scale = 2;
      } else if (selectedSize === '4x') {
        scale = 4;
      } else if (selectedSize === '6x') {
        scale = 6;
      }

      html2canvas(resizableDiv, {
        width: resizableDiv.scrollWidth,
        height: resizableDiv.scrollHeight,
        scale: scale,
        backgroundColor: null,
        useCORS: true,
      }).then((canvas) => {
        // Restore original styles
        resizableDiv.style.width = originalStyle.width;
        resizableDiv.style.height = originalStyle.height;
        resizableDiv.style.overflow = originalStyle.overflow;
        resizableDiv.style.display = originalStyle.display;

        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'code-snippet.png';
        link.click();
      }).catch((error) => {
        console.error('Error capturing image:', error);

        // Ensure styles are restored even if an error occurs
        resizableDiv.style.width = originalStyle.width;
        resizableDiv.style.height = originalStyle.height;
        resizableDiv.style.overflow = originalStyle.overflow;
        resizableDiv.style.display = originalStyle.display;
      });
    }
  };


  
  const onSvgExportClick = (e) => {
    e.preventDefault();
    const resizableDiv = document.querySelector('.resizable-div');

    if (resizableDiv) {
      const originalStyle = {
        width: resizableDiv.style.width,
        height: resizableDiv.style.height,
        overflow: resizableDiv.style.overflow,
        display: resizableDiv.style.display,
        backgroundColor: resizableDiv.style.backgroundColor,
      };

      // Temporarily adjust styles
      resizableDiv.style.width = 'auto';
      resizableDiv.style.height = 'auto';
      resizableDiv.style.overflow = 'visible';
      resizableDiv.style.display = 'block';

      // Extract numeric scale
      let scale = parseInt(selectedSize) || 2;
      console.log('Selected Size:', selectedSize);
      console.log('Applied Scale:', scale);

      // Calculate width increase based on scale
      let padding = 0;
      if (scale === 2) padding = 20;  // 20px padding
      if (scale === 4) padding = 40;  // 40px padding
      if (scale === 6) padding = 60;  // 60px padding

      const rect = resizableDiv.getBoundingClientRect();
      const originalWidth = rect.width;
      const originalHeight = rect.height;
      const newWidth = originalWidth + padding * 2;
      const newHeight = originalHeight + padding * 2;

      console.log('New SVG Dimensions:', newWidth, 'x', newHeight);

      // Create SVG wrapper
      const svgWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgWrapper.setAttribute('width', newWidth);
      svgWrapper.setAttribute('height', newHeight);
      svgWrapper.setAttribute('viewBox', `0 0 ${newWidth} ${newHeight}`);
      svgWrapper.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      // Background rectangle
      const backgroundRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      backgroundRect.setAttribute('width', newWidth);
      backgroundRect.setAttribute('height', newHeight);
      backgroundRect.setAttribute('fill', getComputedStyle(resizableDiv).backgroundColor || '#fff');
      svgWrapper.appendChild(backgroundRect);

      // Clone the content
      const clonedDivContent = resizableDiv.cloneNode(true);
      clonedDivContent.style.width = `${originalWidth}px`;
      clonedDivContent.style.height = `${originalHeight}px`;

      // Copy computed styles (without affecting position)
      function copyComputedStyles(source, target) {
        const computedStyle = window.getComputedStyle(source);
        for (let prop of computedStyle) {
          target.style[prop] = computedStyle.getPropertyValue(prop);
        }

        Array.from(source.children).forEach((child, index) => {
          copyComputedStyles(child, target.children[index]);
        });
      }
      copyComputedStyles(resizableDiv, clonedDivContent);

      // Wrap content inside foreignObject
      const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
      foreignObject.setAttribute('width', originalWidth);
      foreignObject.setAttribute('height', originalHeight);
      foreignObject.setAttribute('x', padding); // Center inside new larger canvas
      foreignObject.setAttribute('y', padding);

      // Create container div
      const containerDiv = document.createElement('div');
      containerDiv.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
      containerDiv.style.width = `${originalWidth}px`;
      containerDiv.style.height = `${originalHeight}px`;

      containerDiv.appendChild(clonedDivContent);

      foreignObject.appendChild(containerDiv);
      svgWrapper.appendChild(foreignObject);

      // Serialize the SVG content
      const svgString = new XMLSerializer().serializeToString(svgWrapper);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
      const svgUrl = URL.createObjectURL(svgBlob);

      // Download the file
      const link = document.createElement('a');
      link.href = svgUrl;
      link.download = `div-content-${selectedSize}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Restore original styles
      resizableDiv.style.width = originalStyle.width;
      resizableDiv.style.height = originalStyle.height;
      resizableDiv.style.overflow = originalStyle.overflow;
      resizableDiv.style.display = originalStyle.display;
      resizableDiv.style.backgroundColor = originalStyle.backgroundColor;
    }
  };

  
  
  const copyImage = async () => {
    const resizableDiv = document.querySelector('.resizable-div');

    if (!resizableDiv) {
      console.error("Resizable div not found.");
      return;
    }

    // Save original styles
    const originalStyle = {
      width: resizableDiv.style.width,
      height: resizableDiv.style.height,
      overflow: resizableDiv.style.overflow,
      display: resizableDiv.style.display,
    };

    // Temporarily expand the div
    resizableDiv.style.width = 'auto';
    resizableDiv.style.height = 'auto';
    resizableDiv.style.overflow = 'visible';
    resizableDiv.style.display = 'block';

    let scale = 2; // Default to 2x
    if (selectedSize === '2x') {
      scale = 2;
    } else if (selectedSize === '4x') {
      scale = 4;
    } else if (selectedSize === '6x') {
      scale = 6;
    }
    
    try {
      const canvas = await html2canvas(resizableDiv, {
        width: resizableDiv.scrollWidth,
        height: resizableDiv.scrollHeight,
        scale: scale,
        backgroundColor: null,
        useCORS: true,
      });

      // Restore original styles
      resizableDiv.style.width = originalStyle.width;
      resizableDiv.style.height = originalStyle.height;
      resizableDiv.style.overflow = originalStyle.overflow;
      resizableDiv.style.display = originalStyle.display;

      // Convert canvas to Blob
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            const item = new ClipboardItem({ "image/png": blob });
            await navigator.clipboard.write([item]);
            alert("Image copied to clipboard!");
          } catch (clipboardError) {
            console.error("Clipboard API error:", clipboardError);
            alert("Failed to copy image. Your browser may not support this feature.");
          }
        }
      });
    } catch (error) {
      console.error("Failed to capture image:", error);
    }
  };









 

  

  
  return (
    <HeadersContainer className='navbar'>

      <LogoContainer>
        <img src={codeSnippetLogo} alt="Logo" />
        <h1>Code Snippet</h1>
      </LogoContainer>

      <AllNavbarLinks>


    
        <MenuOption Icon={FaInfoCircle} label="About" to="/about" />
        <MenuOption Icon={FaMagic} label="Format Code" onClick={handleFormatClick} />

     

        <ExportMainCOntainer>
          <Button onClick={onExportClick}> {/* add here handlerbar or event listener for exportimg  */}
            <ButtonText className="button__text">Export Img</ButtonText>
            <ButtonIcon className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                className="svg"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </ButtonIcon>
          </Button>
          <PasteButtonContainer>
            <PasteButton onClick={toggleDropdown} className="paste-button-container" >▼</PasteButton>


           
            <DropdownContent $isVisible={isDropdownVisible} className='dropdown-content'>
              
              <DropdownLink id="top" onClick={onExportClick}>
                <LeftSideDropDownLink >
                  <BsFileEarmarkImage style={{ pointerEvents: "none" }} />Save PNG
                </LeftSideDropDownLink>

                <RightSideDropDownLink >
                  <span>⌘</span>
                  <span>S</span>
                </RightSideDropDownLink>

              </DropdownLink>

              <DropdownLink id="middle" onClick={onSvgExportClick}>

                <LeftSideDropDownLink>
                  <BsFileEarmarkImageFill/>Save SVG
                </LeftSideDropDownLink>


                <RightSideDropDownLink >
                  <span>⌘</span>
                  <span>⇧</span>
                  <span>S</span>
                </RightSideDropDownLink>

              </DropdownLink>

              <DropdownLink id="middle" onClick={copyImage}>
                <LeftSideDropDownLink>
                  <BsClipboard2Heart  />
                  Copy Image
                </LeftSideDropDownLink>

                <RightSideDropDownLink>
                  <span>⌘</span>
                  <span>C</span>
                </RightSideDropDownLink>
              </DropdownLink>


              <DropdownLink id="middle" >

                <LeftSideDropDownLink>
                  <AiOutlineLink />Copy URL
                </LeftSideDropDownLink>

                <RightSideDropDownLink>
                  <span>⌘</span>
                  <span>⇧</span>
                  <span>C</span>
                </RightSideDropDownLink>

              </DropdownLink>

              <DropdownLink id="bottom" >
                <LeftSideDropDownLink>
                  <BsArrowsAngleExpand/>Size
                </LeftSideDropDownLink>

                <RightSideDropDownLink>
                  <span>{selectedSize}</span>
                  <FaAngleRight />
                </RightSideDropDownLink>
              </DropdownLink>
              <SizeDropDown sizename="2x" sizename1="4x" sizename2="6x" className="sizedropdown" onSizeSelect={handleSizeChange} />
            </DropdownContent>
            

          
          </PasteButtonContainer>

        </ExportMainCOntainer>

      </AllNavbarLinks>
    </HeadersContainer>
  )
}

export default Navbar






const HeadersContainer = styled.header`
  background-color: #181818;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays on top of other content */
  
  @media (max-width: 460px) {
    padding-inline: 1rem;
  }
`;


const AllNavbarLinks = styled.div`
display: flex;
gap: 1rem;
`;


const ExportMainCOntainer = styled.div`
display: flex;
height:40px;
margin-right: 3rem;


`;


const LogoContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
gap:1rem;

img{
  height:2rem;
  width:2rem;
}

h1{
  margin: 0;
  padding: 0;
  font-size:2rem;
  background: linear-gradient(to right,#1408b6, #0fb5be); 
  font-weight: bold;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 785px){

  h1{
    font-size:1.5rem;
  }
}

 @media (max-width: 460px) {
     gap:0.5rem;
    
    h1{
    font-size:1.25rem;
    }
    
   img{
    height:1rem;
    width:1rem;
  }
  }

`;


const Button = styled.button`
  --blue: #1B9CFD;
  width: 150px;
  height:100%;
  font-size: 15px;
  font-family: inherit;
  letter-spacing: 0.06em;
  position: relative;
  border-radius: 0.6em 0em 0em 0.6em;
  overflow: hidden;
  line-height: 1.4em;
  border: 2px solid var(--blue); 
  background: linear-gradient(to right, rgba(0, 123, 255, 0.4) 0.5%, transparent 40%, transparent 60%, rgba(0, 123, 255, 0.4) 100%);
  color: var(--blue);
  box-shadow: inset 0 0 10px rgba(0, 123, 255, 0.4), 0 0 9px 3px rgba(0, 123, 255, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(to right, rgba(0, 123, 255, 0.4) 0.5%, transparent 40%, transparent 60%, rgba(0, 123, 255, 0.4) 100%);
  }
  

  &:hover .button__text {
    color: transparent;
  }

  &:hover .button__icon {
    width:100%;
    transform: translateX(-6px);
  }

  &:active {
  background: linear-gradient(to right, rgba(0, 123, 255, 0.4) 0.5%, transparent 40%, transparent 60%, rgba(0, 123, 255, 0.4) 100%);
  }

  &:active .button__icon {
  background: linear-gradient(to right, rgba(0, 123, 255, 0.4) 0.5%, transparent 40%, transparent 60%, rgba(0, 123, 255, 0.4) 100%);
  }
`;

const ButtonText = styled.span`
  transform: translateX(50px);
  font-weight: 600;
  transition: all 0.3s;
`;

const ButtonIcon = styled.span`
  position: absolute;
  transform: translateX(-6px);
  height: 100%;
  fill: var(--blue);
  width: 39px;
  background: linear-gradient(to right, rgba(0, 123, 255, 0.4) 0.5%, transparent 40%, transparent 60%, rgba(0, 123, 255, 0.4) 100%);
  box-shadow: inset 0 0 10px rgba(0, 123, 255, 0.4), 0 0 9px 3px rgba(0, 123, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  .svg {
    width: 20px;
  }
`;


const PasteButtonContainer = styled.div`
  position: relative;
  display: block;

 
   
`;

const PasteButton = styled.button`
  --blue: #1B9CFD;
  font-size: 15px;
  letter-spacing: 0.06em;
  border-radius: 0em 0.6em 0.6em 0em;
  line-height: 1.4em;
  border: 2px solid var(--blue); 
  border-left: none;
  background: linear-gradient(to right, rgba(0, 123, 255, 0.4) 1%, transparent 40%, transparent 60%, rgba(0, 123, 255, 0.4) 100%);
  color: var(--blue);
  box-shadow: inset 0 0 10px rgba(0, 123, 255, 0.4), 0 0 9px 3px rgba(0, 123, 255, 0.1);
  height:100%;
  padding-inline:0.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const DropdownContent = styled.div`
 visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  font-size: 13px;
  position: absolute;
  right:10px;
  top:45px;
  z-index:100;
  min-width:250px;
  background-color: #212121;
  border: 1px solid rgb(65, 65, 65);
  border-radius: 15px 0px 15px 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;


const DropdownLink = styled.div`
  padding: 10px 12px;
  text-decoration: none;
  display:flex;
  justify-content:space-between;
  align-items: center;
  color:white;
  transition: 0.1s;

  &:hover {
    background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
     --blue: #1B9CFD;
     color: var(--blue);
  }

  /* &:focus {
    background-color: #212121;
    color: #4caf50;
  } */
  
  &#top:hover {
    border-radius: 13px 0px 0 0;
  }

  &#bottom:hover {
     border-radius: 0 0 13px 13px;
  }

  
  &#bottom:hover + .sizedropdown{
    visibility: visible;
    opacity: 1;
  }


`;


const LeftSideDropDownLink = styled.span`
  display:flex;
  align-items: center;
  gap:0.5rem;
  font-size:1rem;
 
  


`;


const RightSideDropDownLink = styled.span`
display:flex;
align-items: center;
gap:0.5rem;

span{
  font-weight:600;
  display: flex;
  justify-content: center;
  align-items: center;
  height:20px;
  width:20px;
  border-radius:4px;
  padding:2px 2px;
  background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
  border: 1px solid rgb(65, 65, 65);
  transition-duration: 0.3s;
}
`;



