import React, { useState, useRef } from 'react';
import Ball from './Ball';
import styled from 'styled-components';
import CodeContentDiv from './CodeContentDiv';



const ResizableDiv = ({ theme, language, backgroundToggle, darkModeToggle, padding}) => {
 
   
   
   
   
   const [dimensions, setDimensions] = useState({ width: 520 });
   const isResizingRef = useRef(false);
   const lastMousePosRef = useRef({ x: 0 });
   const resizeDirectionRef = useRef(null); // Tracks whether we are resizing from the left or right

   const minWidth = 520;
   const maxWidth = 920;

  
   const handleMouseMove = (e) => {
      if (!isResizingRef.current) return;

      const dx = e.clientX - lastMousePosRef.current.x;

      setDimensions((prevDimensions) => {
         let newWidth;

         if (resizeDirectionRef.current === 'right') {
            newWidth = prevDimensions.width + dx;
         } else if (resizeDirectionRef.current === 'left') {
            newWidth = prevDimensions.width - dx;
         }

         // Apply min and max width constraints
         newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));

         return { width: newWidth }; // Only width changes
      });

      lastMousePosRef.current = { x: e.clientX };
   };

   // Function to handle the mouse down event
   const handleMouseDown = (e, direction) => {
      isResizingRef.current = true;
      resizeDirectionRef.current = direction;
      lastMousePosRef.current = { x: e.clientX };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
   };

   // Function to handle the mouse up event
   const handleMouseUp = () => {
      isResizingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
   };

   return (
      <ResizableContainer className='resizable-div'  $dimensions={dimensions} theme={theme}
         $backgroundToggle={backgroundToggle} $padding={padding} 
         
        >
         <CodeContentDiv language={language} theme={theme} darkModeToggle={darkModeToggle} />
         {/* Left resizing ball */}
         <Ball onMouseDown={(e) => handleMouseDown(e, 'left')} isLeft={true} />
         {/* Right resizing ball */}
         <Ball onMouseDown={(e) => handleMouseDown(e, 'right')} isLeft={false} />
      </ResizableContainer>
   );
};

export default ResizableDiv;

const ResizableContainer = styled.div`
   width: ${(props) => props.$dimensions.width}px;
 background: ${(props) => (
   props.$backgroundToggle
     ? props.theme.type === 'svg'
         ? props.theme?.images && props.theme?.backdrounds
            ? `${props.theme?.backdrounds} url(${props.theme?.images}) no-repeat center center / cover`
            : props.theme?.backdrounds
               ? `${props.theme?.backdrounds} no-repeat center center / cover`
               : 'none'
         : props.theme?.images
            ? `url(${props.theme?.images}) no-repeat center center / cover`
            : props.theme?.images && props.theme?.backdrounds
               ? `${props.theme?.backdrounds} url(${props.theme?.images}) no-repeat center center / cover`
               : props.theme?.backdrounds ? `${props.theme?.backdrounds} repeat -8.5px -8.5px / 17px 17px`
                  : `linear-gradient(140deg, ${props.theme.value[0]}, ${props.theme.value[1]})`
      : `linear-gradient(45deg, #1d1d1d 25%, transparent 0) 0 0 / 20px 20px, 
         linear-gradient(-45deg, #1d1d1d 25%, transparent 0) 0 10px / 20px 20px, 
         linear-gradient(45deg, transparent 75%, #1d1d1d 0) 10px -10px / 20px 20px, 
        linear-gradient(-45deg, transparent 75%, #1d1d1d 0) -10px 0 / 20px 20px `
   )};


   border:none;
   position: relative;
   height:auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction:column;
   transition: width 0.2s ease;
   transform:scale(1);
   padding: ${(props) => props.$padding || '64px'}px;
   user-select:none;
   margin-bottom:4rem;
   @media (max-width: 765px) {
      transform: scale(0.6);
   }
`;
