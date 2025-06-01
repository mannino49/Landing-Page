import React from 'react';
import styled from 'styled-components';
import Bubbles from '../components/Bubbles';

const SectionContainer = styled.section`
  padding: var(--spacing-xxl) 0;
  background-color: rgba(245, 250, 255, 0.8);
  position: relative;
  overflow: hidden;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at bottom left, rgba(165, 216, 255, 0.3) 0%, transparent 60%);
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
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

const ResearchPoint = styled.div`
  margin-bottom: var(--spacing-lg);
  background-color: rgba(255, 255, 255, 0.8);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 5px 15px rgba(165, 216, 255, 0.2);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(165, 216, 255, 0.3);
  }
`;

const ResearchTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary-dark);
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--accent-purple);
    margin-right: var(--spacing-sm);
  }
`;

const ResearchText = styled.p`
  color: var(--text-medium);
  line-height: 1.6;
`;

const CredibilityBadge = styled.div`
  background: linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-purple) 100%);
  color: var(--primary-dark);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-lg);
  box-shadow: 0 8px 20px rgba(160, 228, 224, 0.3);
  
  p {
    margin-bottom: 0;
    font-style: italic;
    font-weight: 500;
  }
`;

const ImageContainer = styled.div`
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(165, 216, 255, 0.2);
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

const ResearchFoundation = () => {
  return (
    <SectionContainer id="research">
      <BackgroundDecoration />
      <Bubbles />
      <Container>
        <SectionHeader>
          <SectionTitle>Built on Science</SectionTitle>
          <SectionDescription>
            Our approach to misophonia management is grounded in rigorous research and evidence-based practices.
          </SectionDescription>
        </SectionHeader>
        
        <ContentGrid>
          <TextContent>
            <ResearchPoint>
              <ResearchTitle>Comprehensive Research Database</ResearchTitle>
              <ResearchText>
                Our app is powered by a vector database containing 134+ academic papers and research documents on misophonia, sound sensitivity, and related conditions. This ensures that all information and strategies are backed by the latest scientific evidence.
              </ResearchText>
            </ResearchPoint>
            
            <ResearchPoint>
              <ResearchTitle>Research-Informed Features</ResearchTitle>
              <ResearchText>
                Every feature in Misophonia Companion is designed based on research findings. From our trigger tracking system to our coping strategies, we incorporate evidence-based approaches that have been shown to help manage sound sensitivity.
              </ResearchText>
            </ResearchPoint>
            
            <ResearchPoint>
              <ResearchTitle>Continuous Updates</ResearchTitle>
              <ResearchText>
                As new research emerges, we update our database and refine our approaches. This commitment to staying current with scientific developments ensures you always have access to the most effective, up-to-date strategies.
              </ResearchText>
            </ResearchPoint>
            
            <CredibilityBadge>
              <p>"Our recommendations and tools are informed by the latest research in misophonia treatment and management"</p>
            </CredibilityBadge>
          </TextContent>
          
          <ImageContainer>
            <Image>
              {/* Research visualization */}
              <img src="/src/assets/research-visualization.svg" alt="Visual representation of the research database and academic sources" />
            </Image>
          </ImageContainer>
        </ContentGrid>
      </Container>
    </SectionContainer>
  );
};

export default ResearchFoundation;
