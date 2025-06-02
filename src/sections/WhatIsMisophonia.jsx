import React from 'react';
import styled from 'styled-components';
import Bubbles from '../components/Bubbles';
import assets from '../utils/assetUtils';

const SectionContainer = styled.section`
  padding: var(--spacing-xxl) 0;
  background-color: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  animation: fadeInLeft 1s ease-out;
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const InfoPoint = styled.div`
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--border-radius-md);
  box-shadow: 0 5px 15px rgba(184, 230, 207, 0.2);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(184, 230, 207, 0.3);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary-dark);
`;

const InfoText = styled.p`
  color: var(--text-medium);
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(184, 230, 207, 0.2);
  animation: fadeInRight 1s ease-out;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: var(--spacing-lg);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WhatIsMisophonia = () => {
  return (
    <SectionContainer id="what-is-misophonia">
      <Bubbles />
      <Container>
        <SectionHeader>
          <SectionTitle>Understanding Misophonia</SectionTitle>
          <SectionDescription>
            Misophonia is more than just being annoyed by sounds—it's a neurological condition that affects millions of people worldwide.
          </SectionDescription>
        </SectionHeader>
        
        <ContentGrid>
          <TextContent>
            <InfoPoint>
              <InfoTitle>What is Misophonia?</InfoTitle>
              <InfoText>
                Misophonia, literally meaning "hatred of sound," is a condition where specific sounds trigger strong emotional or physiological responses. These responses are involuntary and can range from anxiety and anger to panic and the need to escape.
              </InfoText>
            </InfoPoint>
            
            <InfoPoint>
              <InfoTitle>Common Triggers</InfoTitle>
              <InfoText>
                Trigger sounds often include oral sounds (eating, chewing, breathing), repetitive sounds (tapping, clicking), and environmental sounds (clocks ticking, refrigerator humming). Each person with misophonia has their own unique set of triggers.
              </InfoText>
            </InfoPoint>
            
            <InfoPoint>
              <InfoTitle>Impact on Daily Life</InfoTitle>
              <InfoText>
                For the estimated 15-20% of people who experience some form of misophonia, the condition can significantly impact relationships, work performance, social interactions, and overall quality of life. Many report avoiding certain situations or environments entirely.
              </InfoText>
            </InfoPoint>
          </TextContent>
          
          <ImageContainer>
            <Image>
              {/* Infographic */}
              <img src={assets.misophoniaInfographic} alt="Infographic showing common misophonia triggers and emotional responses" />
            </Image>
          </ImageContainer>
        </ContentGrid>
      </Container>
    </SectionContainer>
  );
};

export default WhatIsMisophonia;
