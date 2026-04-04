import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MovieIcon from '@mui/icons-material/Movie';
import BrushIcon from '@mui/icons-material/Brush';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const Page = styled.div`
  padding-top: 72px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 24px 40px;
`;

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const AvatarWrapper = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-card);

  img {
    width: 100%;
    height: 360px;
    object-fit: cover;
  }
`;

const BioText = styled.div`
  p {
    font-size: 1rem;
    color: hsl(220, 10%, 35%);
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 24px;
`;

const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
`;

const InterestCard = styled(motion.div)`
  background: hsl(35, 25%, 98%);
  border-radius: 10px;
  padding: 24px 20px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-3px);
  }
`;

const InterestIcon = styled.div`
  color: hsl(38, 65%, 50%);
  margin-bottom: 10px;
`;

const InterestLabel = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: hsl(220, 15%, 20%);
`;

const ValuesSection = styled.section`
  background: hsl(220, 15%, 13%);
  padding: 80px 24px;
  color: hsl(35, 30%, 90%);
`;

const ValuesInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ValueItem = styled(motion.div)`
  margin-bottom: 32px;
  padding-left: 20px;
  border-left: 2px solid hsl(38, 65%, 50%, 0.4);
`;

const ValueTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: hsl(35, 30%, 96%);
  margin-bottom: 8px;
`;

const ValueDesc = styled.p`
  font-size: 0.92rem;
  color: hsl(35, 15%, 70%);
  line-height: 1.7;
`;

const AboutPage = () => {
  const { t } = useTranslation();

  const interests = [
    { icon: <MovieIcon />, labelKey: 'about.interestFilm' as const },
    { icon: <RecordVoiceOverIcon />, labelKey: 'about.interestPerformance' as const },
    { icon: <BrushIcon />, labelKey: 'about.interestCulture' as const },
    { icon: <AutoStoriesIcon />, labelKey: 'about.interestStorytelling' as const },
  ];

  const values = [
    { titleKey: 'about.value1Title' as const, descKey: 'about.value1Desc' as const },
    { titleKey: 'about.value2Title' as const, descKey: 'about.value2Desc' as const },
    { titleKey: 'about.value3Title' as const, descKey: 'about.value3Desc' as const },
    { titleKey: 'about.value4Title' as const, descKey: 'about.value4Desc' as const },
  ];

  return (
    <Page>
      <HeroSection>
        <SectionHeading overline={t('about.overline')} title={t('about.title')} />
        <BioGrid>
          <AvatarWrapper initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <img src="/sergiu-headshot.png" alt={t('about.headshotAlt')} />
          </AvatarWrapper>
          <BioText>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {t('about.bio1')}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {t('about.bio2')}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {t('about.bio3')}
            </motion.p>
          </BioText>
        </BioGrid>
      </HeroSection>

      <Section>
        <SectionHeading overline={t('about.focusOverline')} title={t('about.focusTitle')} align="center" />
        <InterestsGrid>
          {interests.map((item, i) => (
            <InterestCard key={item.labelKey} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <InterestIcon>{item.icon}</InterestIcon>
              <InterestLabel>{t(item.labelKey)}</InterestLabel>
            </InterestCard>
          ))}
        </InterestsGrid>
      </Section>

      <ValuesSection>
        <ValuesInner>
          <SectionHeading
            overline={t('about.valuesOverline')}
            title={t('about.valuesTitle')}
            subtitle={t('about.valuesSubtitle')}
            align="center"
          />
          {values.map((v, i) => (
            <ValueItem key={v.titleKey} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <ValueTitle>{t(v.titleKey)}</ValueTitle>
              <ValueDesc>{t(v.descKey)}</ValueDesc>
            </ValueItem>
          ))}
        </ValuesInner>
      </ValuesSection>
    </Page>
  );
};

export default AboutPage;
