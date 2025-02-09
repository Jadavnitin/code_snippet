import React, { useState } from "react";
import styled from "styled-components";

const Untitled = () => {
  const [inputValue, setInputValue] = useState("");
  const [showSpan, setShowSpan] = useState(true);

  const handleFocus = () => {
    setShowSpan(false);
  };

  const handleBlur = () => {
    if (!inputValue.trim()) {
      setInputValue("");
      setShowSpan(true);
    } else {
      setShowSpan(false);
    }
  };

  return (
    <UntitledInputContainer>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showSpan && <Placeholder>{inputValue.trim() || "Untitled-1"}</Placeholder>}
    </UntitledInputContainer>
  );
};

export default Untitled;

const UntitledInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 30px; /* Increased height for better visibility */
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  color:hsla(0, 0%, 100%, 0.5);
  background-color: transparent;
  font-family: "Inter", sans-serif;
  font-size: 14px; /* Increased font size */
  font-weight: 500;
  text-align: center;
  outline: none;
  z-index: 2;
`;

const Placeholder = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.5); /* Adjusted color for better visibility */
  position: absolute;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
`;
