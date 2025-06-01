import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: var(--spacing-xxl) 0;
  background-color: var(--bg-white);
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

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto;
`;

const StepRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    text-align: center;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-dark);
`;

const StepDescription = styled.p`
  color: var(--text-medium);
  line-height: 1.6;
`;

const StepImage = styled.div`
  flex: 1;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 250px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HowItWorks = () => {
  return (
    <SectionContainer id="how-it-works">
      <Container>
        <SectionHeader>
          <SectionTitle>Your Journey with Misophonia Companion</SectionTitle>
          <SectionDescription>
            Our step-by-step approach helps you understand, manage, and improve your relationship with sound triggers.
          </SectionDescription>
        </SectionHeader>
        
        <StepsContainer>
          <StepRow>
            <StepContent>
              <StepNumber>1</StepNumber>
              <StepTitle>Learn about your condition</StepTitle>
              <StepDescription>
                Start by exploring our evidence-based resources to understand misophonia, its triggers, and how it affects your brain and body. Knowledge is the first step toward effective management.
              </StepDescription>
            </StepContent>
            <StepImage>
              <img src="/src/assets/step1-placeholder.svg" alt="Learn about misophonia through evidence-based resources" />
            </StepImage>
          </StepRow>
          
          <StepRow reverse>
            <StepImage>
              <img src="/src/assets/step2-placeholder.svg" alt="Person logging a trigger in the app" />
            </StepImage>
            <StepContent>
              <StepNumber>2</StepNumber>
              <StepTitle>Track triggers and responses</StepTitle>
              <StepDescription>
                Use our simple logging system to record your triggers and emotional responses in just 30 seconds. This helps you become more aware of your patterns and reactions.
              </StepDescription>
            </StepContent>
          </StepRow>
          
          <StepRow>
            <StepContent>
              <StepNumber>3</StepNumber>
              <StepTitle>Receive personalized strategies</StepTitle>
              <StepDescription>
                Based on your specific triggers and responses, our AI companion will suggest personalized coping strategies backed by research. These strategies are tailored to your unique experience of misophonia.
              </StepDescription>
            </StepContent>
            <StepImage>
              <img src="/src/assets/step3-placeholder.svg" alt="App showing personalized coping strategies" />
            </StepImage>
          </StepRow>
          
          <StepRow reverse>
            <StepImage>
              <img src="/src/assets/step4-placeholder.svg" alt="Progress tracking dashboard in the app" />
            </StepImage>
            <StepContent>
              <StepNumber>4</StepNumber>
              <StepTitle>Monitor your progress</StepTitle>
              <StepDescription>
                Track your journey over time with our progress monitoring tools. See how your responses to triggers change, identify patterns, and celebrate your improvements along the way.
              </StepDescription>
            </StepContent>
          </StepRow>
        </StepsContainer>
      </Container>
    </SectionContainer>
  );
};

export default HowItWorks;
