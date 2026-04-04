import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterWrapper = styled.footer`
  background: hsl(220, 15%, 13%);
  color: hsl(35, 15%, 75%);
  padding: 64px 24px 32px;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const FooterLogo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: hsl(35, 30%, 96%);
  margin-bottom: 12px;
  span { color: hsl(38, 65%, 50%); }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;
  max-width: 340px;
`;

const FooterHeading = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(35, 30%, 96%);
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  display: block;
  font-size: 0.875rem;
  color: hsl(35, 15%, 65%);
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s;
  &:hover { color: hsl(38, 65%, 50%); }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  a {
    color: hsl(35, 15%, 65%);
    transition: color 0.2s;
    &:hover { color: hsl(38, 65%, 50%); }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 48px auto 0;
  padding-top: 24px;
  border-top: 1px solid hsl(220, 10%, 22%);
  font-size: 0.8rem;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <div>
        <FooterLogo>A<span>.</span> Morgan</FooterLogo>
        <FooterText>Creative writer and critic exploring the intersections of film, theater, and cultural storytelling.</FooterText>
        <SocialRow>
          <a href="#" aria-label="Email"><EmailOutlinedIcon fontSize="small" /></a>
          <a href="#" aria-label="Twitter"><TwitterIcon fontSize="small" /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon fontSize="small" /></a>
          <a href="#" aria-label="YouTube"><YouTubeIcon fontSize="small" /></a>
        </SocialRow>
      </div>
      <div>
        <FooterHeading>Navigate</FooterHeading>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/projects">Work</FooterLink>
        <FooterLink to="/writing">Writing</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
      </div>
      <div>
        <FooterHeading>Explore</FooterHeading>
        <FooterLink to="/accomplishments">Highlights</FooterLink>
        <FooterLink to="/projects">Film Reviews</FooterLink>
        <FooterLink to="/projects">Theater Reviews</FooterLink>
        <FooterLink to="/writing">Essays</FooterLink>
      </div>
    </FooterInner>
    <BottomBar>© {new Date().getFullYear()} A. Morgan. All rights reserved.</BottomBar>
  </FooterWrapper>
);

export default Footer;
