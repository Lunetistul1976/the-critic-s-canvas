import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import { projects } from '../data/mockData';

const Page = styled.div`
  min-height: 100vh;
`;

const Hero = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  position: relative;
  overflow: hidden;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 20%, hsl(38, 65%, 50%, 0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, hsl(12, 45%, 55%, 0.04) 0%, transparent 50%);
`;

const HeroContent = styled(motion.div)`
  max-width: 720px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroOverline = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: hsl(38, 65%, 50%);
  margin-bottom: 24px;
  display: block;
`;

const HeroName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 700;
  color: hsl(220, 15%, 13%);
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

const HeroTagline = styled.p`
  font-size: 1.15rem;
  color: hsl(220, 10%, 45%);
  line-height: 1.7;
  margin-bottom: 16px;
  font-weight: 400;
`;

const HeroIntro = styled.p`
  font-size: 0.95rem;
  color: hsl(220, 10%, 55%);
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
`;

const QuoteBanner = styled(motion.section)`
  background: hsl(220, 15%, 13%);
  padding: 80px 24px;
  text-align: center;
`;

const BannerQuote = styled.blockquote`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-style: italic;
  color: hsl(35, 30%, 90%);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.55;
`;

const BannerSource = styled.cite`
  display: block;
  margin-top: 20px;
  font-style: normal;
  font-size: 0.85rem;
  color: hsl(38, 65%, 50%);
  font-weight: 500;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

const CtaSection = styled(motion.section)`
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
`;

const HomePage = () => {
  const featured = projects.slice(0, 3);

  return (
    <Page>
      <Hero>
        <HeroBg />
        <HeroContent initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <HeroOverline>Writer · Critic · Storyteller</HeroOverline>
          <HeroName>A. Morgan</HeroName>
          <HeroTagline>Creative writer and critic focused on film, theater, and cultural storytelling.</HeroTagline>
          <HeroIntro>
            I explore how stories are told—on screen, on stage, and in culture at large. Through reviews, essays, and editorial projects, I examine the craft behind the narratives that shape how we see the world.
          </HeroIntro>
          <HeroButtons>
            <Button component={Link} to="/projects" variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' }, px: 4, py: 1.3, fontSize: '0.95rem' }}>
              Explore My Work
            </Button>
            <Button component={Link} to="/contact" variant="outlined"
              sx={{ borderColor: 'hsl(220, 15%, 13%)', color: 'hsl(220, 15%, 13%)', '&:hover': { borderColor: 'hsl(38, 65%, 50%)', color: 'hsl(38, 65%, 50%)' }, px: 4, py: 1.3, fontSize: '0.95rem' }}>
              Get in Touch
            </Button>
          </HeroButtons>
        </HeroContent>
      </Hero>

      <Section>
        <SectionHeading overline="Featured Work" title="Selected Projects" subtitle="A curated selection of recent reviews, essays, and editorial projects." align="center" />
        <FeaturedGrid>
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </FeaturedGrid>
      </Section>

      <QuoteBanner initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <BannerQuote>"The best criticism doesn't just evaluate—it illuminates. It reveals what we felt but couldn't name."</BannerQuote>
        <BannerSource>A. Morgan</BannerSource>
      </QuoteBanner>

      <Section>
        <SectionHeading overline="What Others Say" title="Kind Words" align="center" />
        <TestimonialGrid>
          <TestimonialCard quote="One of the most thoughtful emerging voices in theater criticism. Their writing has a rare combination of rigor and warmth." source="Senior Editor, Curtain Call Magazine" />
          <TestimonialCard quote="A. Morgan's video essays bring cinematic analysis to life with exceptional visual storytelling and deep insight." source="Editorial Director, Letterboxd" />
          <TestimonialCard quote="Their festival coverage is sharp, insightful, and beautifully written. A genuine talent in cultural criticism." source="Festival Coordinator, Berlinale" />
        </TestimonialGrid>
      </Section>

      <CtaSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <SectionHeading overline="Let's Connect" title="Interested in Collaboration?" subtitle="Whether it's a freelance assignment, editorial opportunity, or a conversation about cinema—I'd love to hear from you." align="center" />
        <Button component={Link} to="/contact" variant="contained"
          sx={{ bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' }, px: 5, py: 1.4, fontSize: '1rem' }}>
          Reach Out
        </Button>
      </CtaSection>
    </Page>
  );
};

export default HomePage;
