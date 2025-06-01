import React, { useState } from 'react';
import styled from 'styled-components';

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

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-md);
  background-color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: var(--spacing-lg);
  background-color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--primary-dark);
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--bg-light);
  }
  
  &:focus {
    outline: none;
    background-color: var(--bg-light);
  }
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? 'var(--spacing-lg)' : '0 var(--spacing-lg)'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: ${props => props.isOpen ? '1px solid var(--border-color)' : 'none'};
  opacity: ${props => props.isOpen ? 1 : 0};
  
  p {
    margin-bottom: 0;
    color: var(--text-medium);
    line-height: 1.6;
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
`;

const faqData = [
  {
    id: 1,
    question: "What is misophonia?",
    answer: "Misophonia is a neurological condition characterized by strong emotional reactions to specific sounds. These 'trigger sounds' often include oral sounds (eating, chewing, breathing), repetitive sounds (tapping, clicking), and environmental sounds. People with misophonia may experience anger, anxiety, panic, or an urgent need to escape when exposed to their trigger sounds. It's more than just being annoyed by sounds—it's an involuntary response that can significantly impact daily life."
  },
  {
    id: 2,
    question: "How is Misophonia Companion different from other mental health apps?",
    answer: "Misophonia Companion is specifically designed for sound sensitivity issues and is built on a foundation of scientific research. Unlike general mental health apps, we focus exclusively on misophonia and related conditions, with all features informed by our database of 134+ academic papers. Our AI companion is trained specifically on misophonia research, and our tracking tools are designed to capture the unique aspects of sound trigger experiences."
  },
  {
    id: 3,
    question: "Is my data private and secure?",
    answer: "Yes, we take your privacy very seriously. All your personal data is encrypted and stored securely. We never share your individual data with third parties. The information you provide about your triggers and responses is used only to personalize your experience and, if you opt in, to contribute anonymously to research that helps advance our understanding of misophonia."
  },
  {
    id: 4,
    question: "Can this replace therapy for misophonia?",
    answer: "Misophonia Companion is designed to complement professional treatment, not replace it. While our app provides evidence-based information and tools that can help manage misophonia symptoms, we recommend working with healthcare professionals who specialize in misophonia or related conditions. Our app can be a valuable addition to therapy, providing day-to-day support and tracking that enhances your treatment plan."
  },
  {
    id: 5,
    question: "How does the AI chat support work?",
    answer: "Our AI companion is powered by advanced natural language processing and has been trained on our comprehensive database of misophonia research. It can provide evidence-based information, suggest coping strategies tailored to your specific triggers, and offer emotional support when you're struggling with sound sensitivity. The AI learns from your interactions to provide increasingly personalized support over time, while always basing its recommendations on scientific evidence."
  },
  {
    id: 6,
    question: "What research supports the app's features?",
    answer: "Misophonia Companion is built on a foundation of 134+ academic papers and research documents on misophonia and related conditions. This includes studies on the neurological basis of misophonia, research on effective coping strategies, and clinical approaches to sound sensitivity management. Our research database is continuously updated as new studies are published, ensuring that our app reflects the latest scientific understanding of misophonia."
  },
  {
    id: 7,
    question: "How do I get started?",
    answer: "Getting started with Misophonia Companion is simple! Download the app from your device's app store, create an account, and complete a brief onboarding process that helps us understand your specific misophonia experience. You'll then have access to all our features, including the research database, AI companion, and trigger tracking tools. We recommend starting with the 'Understanding Misophonia' section to build a foundation of knowledge about your condition."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);
  
  const toggleItem = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  return (
    <SectionContainer id="faq">
      <Container>
        <SectionHeader>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionDescription>
            Find answers to common questions about misophonia and our app.
          </SectionDescription>
        </SectionHeader>
        
        <FAQContainer>
          {faqData.map(item => (
            <FAQItem key={item.id}>
              <FAQQuestion 
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
                aria-controls={`faq-answer-${item.id}`}
              >
                {item.question}
                <Icon isOpen={openItems.includes(item.id)}>+</Icon>
              </FAQQuestion>
              <FAQAnswer 
                isOpen={openItems.includes(item.id)}
                id={`faq-answer-${item.id}`}
              >
                <p>{item.answer}</p>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </SectionContainer>
  );
};

export default FAQ;
