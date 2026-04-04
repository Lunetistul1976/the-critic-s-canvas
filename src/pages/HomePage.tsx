import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/data';

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
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), min(100%, 400px)));
  gap: 28px;
  justify-content: center;
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

const CtaSection = styled(motion.section)`
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
`;

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero>
        <HeroBg />
        <HeroContent initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <HeroOverline>{t('home.heroOverline')}</HeroOverline>
          <HeroName>{t('common.siteName')}</HeroName>
          <HeroTagline>{t('home.heroTagline')}</HeroTagline>
          <HeroIntro>{t('home.heroIntro')}</HeroIntro>
          <HeroButtons>
            <Button component={Link} to="/projects" variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' }, px: 4, py: 1.3, fontSize: '0.95rem' }}>
              {t('home.ctaExplore')}
            </Button>
            <Button component={Link} to="/contact" variant="outlined"
              sx={{ borderColor: 'hsl(220, 15%, 13%)', color: 'hsl(220, 15%, 13%)', '&:hover': { borderColor: 'hsl(38, 65%, 50%)', color: 'hsl(38, 65%, 50%)' }, px: 4, py: 1.3, fontSize: '0.95rem' }}>
              {t('home.ctaTouch')}
            </Button>
          </HeroButtons>
        </HeroContent>
      </Hero>

      <Section>
        <SectionHeading
          overline={t('home.featuredOverline')}
          title={t('home.featuredTitle')}
          subtitle={t('home.featuredSubtitle')}
          align="center"
        />
        <FeaturedGrid>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </FeaturedGrid>
      </Section>

      <QuoteBanner initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <BannerQuote>&ldquo;{t('home.quote')}&rdquo;</BannerQuote>
        <BannerSource>{t('home.quoteSource')}</BannerSource>
      </QuoteBanner>

      <CtaSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <SectionHeading
          overline={t('home.ctaOverline')}
          title={t('home.ctaTitle')}
          subtitle={t('home.ctaSubtitle')}
          align="center"
        />
        <Button component={Link} to="/contact" variant="contained"
          sx={{ bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' }, px: 5, py: 1.4, fontSize: '1rem' }}>
          {t('home.reachOut')}
        </Button>
      </CtaSection>
    </Page>
  );
};

export default HomePage;
