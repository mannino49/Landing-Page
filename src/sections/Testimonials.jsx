import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import assets from '../utils/assetUtils';

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

const TestimonialsWrapper = styled.div`
  position: relative;
  padding: 0 var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialSlider = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

const TestimonialSlide = styled.div`
  min-width: 100%;
  transform: translateX(${props => props.offset}%);
  transition: transform 0.5s ease;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease, transform 0.5s ease;
`;

const TestimonialCard = styled.div`
  background-color: var(--bg-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-blue);
  opacity: 0.3;
  margin-bottom: var(--spacing-md);
  line-height: 1;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: var(--text-dark);
  margin-bottom: var(--spacing-lg);
  line-height: 1.8;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: var(--spacing-sm);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  color: var(--primary-dark);
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: var(--text-medium);
  margin-bottom: 0;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-lg);
  gap: var(--spacing-md);
`;

const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary-blue)' : '#ddd'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-blue)' : '#bbb'};
    transform: scale(1.2);
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  font-size: 1.2rem;
  color: var(--primary-dark);
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: var(--bg-light);
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: 0;
  }
  
  &.next {
    right: 0;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const testimonials = [
  {
    id: 1,
    text: "Misophonia Companion has been life-changing for me. Before using this app, I struggled daily with my sound triggers. Now I have tools to understand and manage my reactions. The research-backed strategies have made a real difference in my quality of life.",
    name: "Sarah J.",
    role: "Living with misophonia for 15 years",
    image: assets.avatar1
  },
  {
    id: 2,
    text: "As the parent of a teenager with misophonia, I've found this app incredibly helpful for understanding what my daughter is going through. The educational resources are excellent, and the strategies have helped our whole family adapt and support her better.",
    name: "Michael T.",
    role: "Parent of child with misophonia",
    image: assets.avatar2
  },
  {
    id: 3,
    text: "I recommend Misophonia Companion to all my patients with sound sensitivity issues. The evidence-based approach aligns perfectly with clinical best practices, and the tracking features provide valuable insights that help guide our therapy sessions.",
    name: "Dr. Rebecca L.",
    role: "Clinical Psychologist",
    image: assets.avatar3
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <SectionContainer id="testimonials">
      <Container>
        <SectionHeader>
          <SectionTitle>Stories from Our Community</SectionTitle>
          <SectionDescription>
            Hear from people who have found relief and support through Misophonia Companion.
          </SectionDescription>
        </SectionHeader>
        
        <TestimonialsWrapper>
          <SliderArrow className="prev" onClick={prevSlide}>
            &#8249;
          </SliderArrow>
          
          <TestimonialSlider>
            {testimonials.map((testimonial, index) => (
              <TestimonialSlide 
                key={testimonial.id}
                active={index === activeIndex}
                offset={(index - activeIndex) * 100}
              >
                <TestimonialCard>
                  <QuoteIcon>"</QuoteIcon>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <TestimonialAuthor>
                    <AuthorImage>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </AuthorImage>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </TestimonialAuthor>
                </TestimonialCard>
              </TestimonialSlide>
            ))}
          </TestimonialSlider>
          
          <SliderArrow className="next" onClick={nextSlide}>
            &#8250;
          </SliderArrow>
          
          <SliderControls>
            {testimonials.map((_, index) => (
              <SliderDot 
                key={index} 
                active={index === activeIndex} 
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </SliderControls>
        </TestimonialsWrapper>
      </Container>
    </SectionContainer>
  );
};

export default Testimonials;
