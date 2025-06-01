import React from 'react';
import styled from 'styled-components';
import { FaBook, FaRobot, FaSyncAlt } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: var(--spacing-xxl) 0;
  background-color: var(--bg-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h2`
  color: var(--primary-dark);
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-medium);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || 'var(--primary-blue)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  color: white;
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-dark);
`;

const FeatureDescription = styled.p`
  color: var(--text-medium);
  line-height: 1.6;
`;

const CoreFeatures = () => {
  return (
    <SectionContainer id="features">
      <Container>
        <SectionHeader>
          <SectionTitle>How Misophonia Companion Helps</SectionTitle>
          <SectionDescription>
            Our app combines cutting-edge technology with evidence-based approaches to help you manage misophonia in your daily life.
          </SectionDescription>
        </SectionHeader>
        
        <FeaturesGrid>
          <FeatureCard>
            <IconContainer bgColor="var(--primary-blue)">
              <FaBook />
            </IconContainer>
            <FeatureTitle>Evidence-Based Knowledge</FeatureTitle>
            <FeatureDescription>
              Access trusted information from our comprehensive database of 134+ academic papers and research documents on misophonia.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <IconContainer bgColor="var(--accent-purple)">
              <FaRobot />
            </IconContainer>
            <FeatureTitle>Compassionate AI Companion</FeatureTitle>
            <FeatureDescription>
              Chat anytime with our AI companion that understands misophonia and provides personalized, science-based support.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <IconContainer bgColor="var(--primary-green)">
              <FaSyncAlt />
            </IconContainer>
            <FeatureTitle>Track & Improve</FeatureTitle>
            <FeatureDescription>
              Log triggers in just 30 seconds, identify patterns, and develop better coping mechanisms over time.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </SectionContainer>
  );
};

export default CoreFeatures;
