import React, { useState } from 'react'
import styled from 'styled-components'

const SizeDropDown = ({ sizename, sizename1, sizename2, className, onSizeSelect }) => {
   const [isDropdownVisible, setDropdownVisible] = useState(false);

   // Toggle visibility on hover
   const handleHoverAfter = () => {
      setDropdownVisible(prevState => !prevState);
   }

   return (
      <SideDropDownLink
         className={className}
         onMouseEnter={handleHoverAfter}
         onMouseLeave={handleHoverAfter}
         $isVisible={isDropdownVisible}
      >
         <a className='top' onClick={() => onSizeSelect(sizename)}>{sizename}</a>
         <a                 onClick={() => onSizeSelect(sizename1)}>{sizename1}</a>
         <a className='bottom' onClick={() => onSizeSelect(sizename2)}>{sizename2}</a>
      </SideDropDownLink>
   )
}

export default SizeDropDown

const SideDropDownLink = styled.div`
  font-size: 13px;
  position: absolute;
  right: 99.7%;
  top: 90%;
  /* Visibility and opacity to control dropdown */
  visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease; /* Smooth transition */
  flex-direction: column;
  z-index: 1;
  min-width: 100px;
  background-color: #212121;
  border: 1px solid rgb(65, 65, 65);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  /* Hover effect */
  &:hover {
    visibility: visible;
    opacity: 1;
  }

  a {
    padding: 10px 12px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  a:hover {
    background: linear-gradient(to right, rgb(59, 59, 59), rgb(34, 34, 34));
    --blue: #1B9CFD;
    color: var(--blue);
  }

  .top:hover {
    border-radius: 13px 13px 0 0;
  }

  .bottom:hover {
    border-radius: 0 0 13px 13px;
  }
`;
