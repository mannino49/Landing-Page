import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary-dark);
  color: var(--bg-light);
  padding: var(--spacing-xl) 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  color: white;
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
`;

const FooterLink = styled.a`
  color: var(--bg-light);
  margin-bottom: var(--spacing-sm);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-blue);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
`;

const SocialIcon = styled.a`
  color: var(--bg-light);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-blue);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  font-size: 0.9rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Misophonia Companion</FooterTitle>
          <p>A digital companion for managing sound sensitivity, backed by research from 134+ academic papers.</p>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink href="#what-is-misophonia">About Misophonia</FooterLink>
          <FooterLink href="#features">Features</FooterLink>
          <FooterLink href="#how-it-works">How It Works</FooterLink>
          <FooterLink href="#research">Research</FooterLink>
          <FooterLink href="#testimonials">Testimonials</FooterLink>
          <FooterLink href="#faq">FAQ</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Research Database</FooterLink>
          <FooterLink href="#">Support Center</FooterLink>
          <FooterLink href="#">Community Forum</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© 2025 Misophonia Companion. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
