import React from 'react';
import styled from 'styled-components';
import { scrollToSection } from '../utils/scrollUtils';
import Bubbles from '../components/Bubbles';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #A5D8FF 0%, #D4BFFF 100%);
  color: var(--primary-dark);
  position: relative;
  overflow: hidden;
  padding-top: 80px; /* Account for fixed header */
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  animation: fadeInUp 1s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    margin: 0 auto;
    order: 2;
  }
`;

const HeroHeadline = styled.h1`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
  color: var(--primary-dark);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroTagline = styled.p`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
`;

const HeroDescription = styled.p`
  margin-bottom: var(--spacing-xl);
  font-size: 1.1rem;
  opacity: 0.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  animation: fadeIn 1s ease-out 0.6s;
  animation-fill-mode: both;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: white;
  color: var(--primary-blue);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    color: var(--primary-blue);
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: var(--primary-dark);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  border: 2px solid var(--primary-dark);
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: rgba(110, 140, 160, 0.1);
    transform: translateY(-3px);
    color: var(--primary-dark);
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  animation: fadeInRight 1s ease-out 0.3s;
  animation-fill-mode: both;
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: var(--spacing-lg);
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  z-index: 1;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <BackgroundDecoration />
      <Bubbles />
      <HeroContainer>
        <HeroContent>
          <HeroHeadline>Misophonia Companion: Evidence-Based Support in Your Pocket</HeroHeadline>
          <HeroTagline>Empowering you to manage sound triggers with evidence-based tools</HeroTagline>
          <HeroDescription>
            A digital companion for managing sound sensitivity, backed by research from 134+ academic papers
          </HeroDescription>
          <ButtonGroup>
            <PrimaryButton href="#cta" onClick={(e) => {
              e.preventDefault();
              scrollToSection('cta');
            }}>Join Waitlist</PrimaryButton>
            <SecondaryButton href="#what-is-misophonia" onClick={(e) => {
              e.preventDefault();
              scrollToSection('what-is-misophonia');
            }}>Learn More</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        
        <HeroImageContainer>
          <HeroImage>
            {/* Hero image */}
            <img src="/src/assets/hero-image-placeholder.svg" alt="Person using Misophonia Companion app in a calm environment" />
          </HeroImage>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
