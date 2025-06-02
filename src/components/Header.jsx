import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { scrollToSection } from '../utils/scrollUtils';
import assets from '../utils/assetUtils';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none'};
  padding: ${props => props.scrolled ? 'var(--spacing-sm) 0' : 'var(--spacing-md) 0'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const Logo = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  img {
    height: 40px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${props => props.mobileMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--bg-white);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: ${props => props.scrolled ? 'var(--primary-dark)' : 'var(--primary-dark)'};
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-purple);
  }
  
  @media (max-width: 768px) {
    color: var(--primary-dark);
    padding: 0.5rem 0;
  }
`;

const GetStartedButton = styled.a`
  background-color: var(--accent-purple);
  color: var(--primary-dark);
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(212, 191, 255, 0.3);
  
  &:hover {
    background-color: var(--accent-teal);
    color: var(--primary-dark);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    display: ${props => props.mobileMenuOpen ? 'inline-block' : 'none'};
    margin-top: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-dark);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo scrolled={scrolled}><img src={assets.logo} alt="Misophonia Companion Logo" /></Logo>
        
        <MobileMenuButton 
          scrolled={scrolled} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavLinks mobileMenuOpen={mobileMenuOpen}>
          <NavLink href="#what-is-misophonia" scrolled={scrolled} onClick={(e) => {
            e.preventDefault();
            scrollToSection('what-is-misophonia');
            setMobileMenuOpen(false);
          }}>About</NavLink>
          <NavLink href="#features" scrolled={scrolled} onClick={(e) => {
            e.preventDefault();
            scrollToSection('features');
            setMobileMenuOpen(false);
          }}>Features</NavLink>
          <NavLink href="#research" scrolled={scrolled} onClick={(e) => {
            e.preventDefault();
            scrollToSection('research');
            setMobileMenuOpen(false);
          }}>Research</NavLink>
          <NavLink href="#faq" scrolled={scrolled} onClick={(e) => {
            e.preventDefault();
            scrollToSection('faq');
            setMobileMenuOpen(false);
          }}>FAQ</NavLink>
          <GetStartedButton href="#cta" mobileMenuOpen={mobileMenuOpen} onClick={(e) => {
            e.preventDefault();
            scrollToSection('cta');
            setMobileMenuOpen(false);
          }}>Join Waitlist</GetStartedButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
