import React from 'react';
import styled from 'styled-components';

const Ball = ({ onMouseDown, isLeft }) => {
  return (
    <>
      {/* Left Ball */}
      {isLeft && <LeftBallContainer onMouseDown={onMouseDown} />}
      {/* Right Ball */}
      {!isLeft && <RightBallContainer onMouseDown={onMouseDown} />}
    </>
  );
};

export default Ball;

const LeftBallContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 0;  // Always on the left side
  width: 6px;
  height: 6px;
  border-radius:50%;
  background: #fff;
  cursor: col-resize;
  content: "";
  transform: translate(-50%, -50%);
  
@media (max-width:765px) {
  width:12px;
  height:12px;
}
`;

const RightBallContainer = styled.span`
  position: absolute;
  top: 50%;
  right:-6px;  // Always on the right side
  width: 6px;
  height: 6px;
  border-radius:50%;
  cursor: col-resize;
  background: #fff;
  content: "";
  transform: translate(-50%, -50%);
  
  @media (max-width:765px) {
    
  right:-12px;
  width:12px;
  height:12px;

}
`;
