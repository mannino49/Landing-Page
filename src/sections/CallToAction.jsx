import React from 'react';
import styled from 'styled-components';
import { scrollToSection } from '../utils/scrollUtils';
import Bubbles from '../components/Bubbles';

const SectionContainer = styled.section`
  padding: var(--spacing-xxl) 0;
  background: linear-gradient(135deg, #A5D8FF 0%, #D4BFFF 100%);
  color: var(--primary-dark);
  position: relative;
  overflow: hidden;
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: white;
  color: var(--primary-blue);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    color: var(--primary-blue);
  }
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: var(--primary-dark);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-md);
  border: 2px solid var(--primary-dark);
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: rgba(110, 140, 160, 0.1);
    transform: translateY(-3px);
    color: var(--primary-dark);
  }
`;

const FeatureHighlights = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`;

const FeatureText = styled.p`
  font-weight: 500;
  margin-bottom: 0;
`;

const CallToAction = () => {
  return (
    <SectionContainer id="cta">
      <BackgroundDecoration />
      <Bubbles />
      <Container>
        <SectionTitle>Join Our Waitlist</SectionTitle>
        <SectionSubtitle>
          Be among the first to experience our evidence-based misophonia management tools
        </SectionSubtitle>
        
        <CTAButtons>
          <PrimaryButton href="#" onClick={(e) => {
            e.preventDefault();
            // This would link to waitlist signup form in a real implementation
            alert('Waitlist signup functionality would be implemented here');
          }}>Join Waitlist</PrimaryButton>
          <SecondaryButton href="#research" onClick={(e) => {
            e.preventDefault();
            scrollToSection('research');
          }}>Learn More About Our Research</SecondaryButton>
        </CTAButtons>
        
        <FeatureHighlights>
          <FeatureItem>
            <FeatureIcon>
              <i className="fas fa-lock"></i>
            </FeatureIcon>
            <FeatureText>Secure & Private</FeatureText>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>
              <i className="fas fa-book"></i>
            </FeatureIcon>
            <FeatureText>Research-Backed</FeatureText>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>
              <i className="fas fa-user-friends"></i>
            </FeatureIcon>
            <FeatureText>Supportive Community</FeatureText>
          </FeatureItem>
        </FeatureHighlights>
      </Container>
    </SectionContainer>
  );
};

export default CallToAction;
