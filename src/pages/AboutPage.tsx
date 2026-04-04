import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
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

const interests = [
  { icon: <MovieIcon />, label: 'Film' },
  { icon: <TheaterComedyIcon />, label: 'Theater' },
  { icon: <RecordVoiceOverIcon />, label: 'Performance' },
  { icon: <BrushIcon />, label: 'Culture' },
  { icon: <AutoStoriesIcon />, label: 'Storytelling' },
];

const values = [
  { title: 'Rigor with Warmth', desc: 'I believe criticism should be honest and exacting, but never cruel. Great analysis invites readers in rather than shutting them out.' },
  { title: 'Curiosity over Consensus', desc: 'I'm drawn to work that challenges, surprises, and resists easy categorization. The most interesting stories are often the ones that don't fit neatly.' },
  { title: 'Context Matters', desc: 'Art doesn't exist in a vacuum. I situate every review and essay within its cultural, historical, and social context.' },
  { title: 'Accessible Depth', desc: 'Complex ideas deserve clear language. I write for anyone who cares about stories, not just for other critics.' },
];

const AboutPage = () => (
  <Page>
    <HeroSection>
      <SectionHeading overline="About" title="The Story Behind the Criticism" />
      <BioGrid>
        <AvatarWrapper initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="A. Morgan" />
        </AvatarWrapper>
        <BioText>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            I'm A. Morgan—a writer and critic working at the intersection of film, theater, and cultural storytelling. Based between New York and London, I spend my time watching, thinking, and writing about how stories move us.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            My work has appeared in The Criterion Observer, IndieWire, Curtain Call Magazine, and Theater Today. I also publish "Reel & Stage," a weekly newsletter reaching nearly 5,000 subscribers who share my fascination with narrative craft.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Whether I'm reviewing a debut feature at a film festival, analyzing a bold new theatrical production, or exploring a cultural trend through an editorial series, my goal is always the same: to help people see more clearly what makes a story resonate.
          </motion.p>
        </BioText>
      </BioGrid>
    </HeroSection>

    <Section>
      <SectionHeading overline="Focus Areas" title="What I Write About" align="center" />
      <InterestsGrid>
        {interests.map((item, i) => (
          <InterestCard key={item.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <InterestIcon>{item.icon}</InterestIcon>
            <InterestLabel>{item.label}</InterestLabel>
          </InterestCard>
        ))}
      </InterestsGrid>
    </Section>

    <ValuesSection>
      <ValuesInner>
        <SectionHeading overline="Philosophy" title="My Approach to Criticism"
          subtitle="The principles that guide how I engage with art and storytelling." align="center" />
        {values.map((v, i) => (
          <ValueItem key={v.title} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <ValueTitle>{v.title}</ValueTitle>
            <ValueDesc>{v.desc}</ValueDesc>
          </ValueItem>
        ))}
      </ValuesInner>
    </ValuesSection>
  </Page>
);

export default AboutPage;
