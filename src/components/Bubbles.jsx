import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for bubble rising animation
const rise = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-1000%);
    opacity: 0;
  }
`;

// Keyframes for bubble wobble animation
const wobble = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(-5px);
  }
  66% {
    transform: translateX(5px);
  }
`;

const BubblesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

const Bubble = styled.div`
  position: absolute;
  bottom: -50px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: ${rise} ${props => props.duration || '15s'} infinite ease-in;
  animation-delay: ${props => props.delay || '0s'};
  width: ${props => props.size || '30px'};
  height: ${props => props.size || '30px'};
  left: ${props => props.position || '50%'};
  
  &::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 15%;
    width: 40%;
    height: 40%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }
  
  &:nth-child(even) {
    animation: ${rise} ${props => props.duration || '15s'} infinite ease-in,
               ${wobble} 3s infinite ease-in-out;
  }
`;

const Bubbles = () => {
  // Generate random bubble properties
  const bubbles = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    size: `${Math.floor(Math.random() * 50) + 10}px`,
    position: `${Math.floor(Math.random() * 100)}%`,
    duration: `${Math.floor(Math.random() * 20) + 10}s`,
    delay: `${Math.floor(Math.random() * 10)}s`
  }));

  return (
    <BubblesContainer>
      {bubbles.map(bubble => (
        <Bubble 
          key={bubble.id}
          size={bubble.size}
          position={bubble.position}
          duration={bubble.duration}
          delay={bubble.delay}
        />
      ))}
    </BubblesContainer>
  );
};

export default Bubbles;
