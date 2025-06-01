import React, { useState } from 'react';
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
  background: radial-gradient(circle at bottom right, rgba(184, 230, 207, 0.3) 0%, transparent 60%);
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
  animation: fadeIn 1s ease-out;
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.7)'};
  color: ${props => props.active ? 'var(--primary-dark)' : 'var(--text-medium)'};
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: ${props => props.active ? '600' : '500'};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 5px 15px rgba(212, 191, 255, 0.3)' : '0 2px 5px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(212, 191, 255, 0.3);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  animation: fadeIn 1.2s ease-out;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCategory = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-dark);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  
  &::before {
    content: '${props => props.icon}';
    margin-right: var(--spacing-sm);
    font-size: 1.8rem;
  }
`;

const FeatureCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(165, 216, 255, 0.2);
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  color: var(--primary-dark);
  margin-bottom: var(--spacing-sm);
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

const FeatureDescription = styled.p`
  color: var(--text-medium);
  line-height: 1.6;
  flex-grow: 1;
`;

const Features = () => {
  const [activeTab, setActiveTab] = useState('sufferers');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <SectionContainer id="features">
      <BackgroundDecoration />
      <Bubbles />
      <Container>
        <SectionHeader>
          <SectionTitle>Tailored Features</SectionTitle>
          <SectionDescription>
            Misophonia Companion offers specialized support for everyone affected by misophonia.
          </SectionDescription>
        </SectionHeader>
        
        <TabsContainer>
          <Tab 
            active={activeTab === 'sufferers'} 
            onClick={() => handleTabChange('sufferers')}
          >
            🧠 For Sufferers
          </Tab>
          <Tab 
            active={activeTab === 'loved-ones'} 
            onClick={() => handleTabChange('loved-ones')}
          >
            ❤️ For Loved Ones
          </Tab>
          <Tab 
            active={activeTab === 'clinicians'} 
            onClick={() => handleTabChange('clinicians')}
          >
            🩺 For Clinicians
          </Tab>
        </TabsContainer>
        
        {activeTab === 'sufferers' && (
          <>
            <FeatureCategory>
              <CategoryTitle icon="🤝">Emotional & Social Support</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>AI Mediation</FeatureTitle>
                  <FeatureDescription>
                    Acts as a buffer or translator between you and others (spouse, parent, friend, colleague) to reduce misunderstandings and emotional stress.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Reduces Emotional Load</FeatureTitle>
                  <FeatureDescription>
                    Provides a safe, nonjudgmental space to process and express what you're experiencing without needing to justify or explain yourself constantly.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
            
            <FeatureCategory>
              <CategoryTitle icon="📚">Research Translation</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>Layperson Guidance</FeatureTitle>
                  <FeatureDescription>
                    Offers easy-to-understand explanations of clinical research, phrased like "Here's what a clinician might say."
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Custom Insights</FeatureTitle>
                  <FeatureDescription>
                    Breaks down research findings and applies them to your specific situation, helping you make informed decisions.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
            
            <FeatureCategory>
              <CategoryTitle icon="🔄">Behavior & Habit Support</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>Interactive Exercises</FeatureTitle>
                  <FeatureDescription>
                    Personalized "Try this" suggestions with behavior tracking and progress monitoring.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Adaptive Learning</FeatureTitle>
                  <FeatureDescription>
                    The AI learns from your usage patterns to improve recommendations over time (e.g., identifying triggers, refining support).
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Habit Loops</FeatureTitle>
                  <FeatureDescription>
                    Encourages micro-habit formation to gradually build emotional regulation and coping strategies.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
            
            <FeatureCategory>
              <CategoryTitle icon="📊">Progress Tracking</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>Personal Dashboard</FeatureTitle>
                  <FeatureDescription>
                    Tracks usage, emotional responses, triggers, and positive changes over time.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Self-reflection Tools</FeatureTitle>
                  <FeatureDescription>
                    Prompts and logs help users notice patterns and moments of improvement or difficulty.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
          </>
        )}
        
        {activeTab === 'loved-ones' && (
          <>
            <FeatureCategory>
              <CategoryTitle icon="💬">Communication Help</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>Explains Misophonia Simply</FeatureTitle>
                  <FeatureDescription>
                    Offers digestible explanations so loved ones can better understand what the sufferer is going through.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Suggested Responses</FeatureTitle>
                  <FeatureDescription>
                    Guides loved ones on what to say or do in common scenarios that might trigger conflict or misunderstanding.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Empathy Training</FeatureTitle>
                  <FeatureDescription>
                    Offers perspective-taking prompts to help loved ones feel and respond more empathetically.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
            
            <FeatureCategory>
              <CategoryTitle icon="🔍">Behavior Insight</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>Parental Tools</FeatureTitle>
                  <FeatureDescription>
                    Especially for parents of children with misophonia—explains mimicry, validates behaviors, and offers constructive responses.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Progress Awareness</FeatureTitle>
                  <FeatureDescription>
                    Shows how their support is helping or where it might be unintentionally making things worse.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
            
            <FeatureCategory>
              <CategoryTitle icon="🌉">Mediated Support</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>AI as Relationship Bridge</FeatureTitle>
                  <FeatureDescription>
                    Helps couples, roommates, or family members work through trigger-related conflicts together—constructively and without blame.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Role-Playing Scenarios</FeatureTitle>
                  <FeatureDescription>
                    Simulates conversations or situations to help loved ones prepare supportive responses.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
          </>
        )}
        
        {activeTab === 'clinicians' && (
          <>
            <FeatureCategory>
              <CategoryTitle icon="🔄">Client Support Extension</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>24/7 Companion</FeatureTitle>
                  <FeatureDescription>
                    Acts as an emotional support and behavior tracking tool between therapy sessions.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Progress Reports</FeatureTitle>
                  <FeatureDescription>
                    Offers summaries and data visualizations (usage, mood, triggers) that clinicians can review to inform treatment.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
            
            <FeatureCategory>
              <CategoryTitle icon="📚">Psychoeducation Tools</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>Guided Explanations</FeatureTitle>
                  <FeatureDescription>
                    Delivers accurate, up-to-date research in accessible language, tailored to client needs.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Validated Techniques</FeatureTitle>
                  <FeatureDescription>
                    Supports clients in practicing exposure, regulation, and behavioral exercises aligned with therapeutic goals.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
            
            <FeatureCategory>
              <CategoryTitle icon="👥">Collaborative Interface</CategoryTitle>
              <FeatureGrid>
                <FeatureCard>
                  <FeatureTitle>Family & Couples Guidance</FeatureTitle>
                  <FeatureDescription>
                    Assists clinicians by facilitating education and structured communication for loved ones of sufferers.
                  </FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                  <FeatureTitle>Custom Protocols</FeatureTitle>
                  <FeatureDescription>
                    Enables clinicians to recommend exercises or content directly through the platform.
                  </FeatureDescription>
                </FeatureCard>
              </FeatureGrid>
            </FeatureCategory>
          </>
        )}
      </Container>
    </SectionContainer>
  );
};

export default Features;
