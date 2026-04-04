import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { accomplishments } from '../data/data';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CampaignIcon from '@mui/icons-material/Campaign';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Page = styled.div`
  padding-top: 72px;
  min-height: 100vh;
`;

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: hsl(35, 15%, 85%);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 36px;
  padding: 24px;
  background: hsl(35, 25%, 98%);
  border-radius: 10px;
  box-shadow: var(--shadow-soft);

  &::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 30px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: hsl(38, 65%, 50%);
    border: 2px solid hsl(35, 30%, 96%);
  }
`;

const ItemType = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(38, 65%, 50%);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

const ItemTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: hsl(220, 15%, 13%);
  margin-bottom: 6px;
`;

const ItemDesc = styled.p`
  font-size: 0.88rem;
  color: hsl(220, 10%, 45%);
  line-height: 1.65;
  margin-bottom: 6px;
`;

const ItemYear = styled.span`
  font-size: 0.78rem;
  color: hsl(220, 10%, 55%);
  font-weight: 500;
`;

const TestimonialSection = styled.section`
  background: hsl(220, 15%, 13%);
  padding: 80px 24px;
`;

const TestimonialInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

const iconMap: Record<string, JSX.Element> = {
  Publication: <ArticleIcon sx={{ fontSize: 14 }} />,
  Recognition: <EmojiEventsIcon sx={{ fontSize: 14 }} />,
  Competition: <EmojiEventsIcon sx={{ fontSize: 14 }} />,
  'Audience Growth': <TrendingUpIcon sx={{ fontSize: 14 }} />,
  'Event Coverage': <CampaignIcon sx={{ fontSize: 14 }} />,
  Partnership: <HandshakeIcon sx={{ fontSize: 14 }} />,
  Testimonial: <GroupsIcon sx={{ fontSize: 14 }} />,
};

const AccomplishmentsPage = () => (
  <Page>
    <Section>
      <SectionHeading overline="Highlights" title="Accomplishments & Recognition"
        subtitle="Milestones, publications, and collaborations that have shaped my journey as a critic and writer." />
      <Timeline>
        {accomplishments.map((a, i) => (
          <TimelineItem key={a.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <ItemType>{iconMap[a.type] || <EmojiEventsIcon sx={{ fontSize: 14 }} />} {a.type}</ItemType>
            <ItemTitle>{a.title}</ItemTitle>
            <ItemDesc>{a.description}</ItemDesc>
            <ItemYear>{a.year}</ItemYear>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>

    <TestimonialSection>
      <TestimonialInner>
        <SectionHeading overline="Testimonials" title="What Editors & Collaborators Say" align="center" />
        <TestimonialGrid>
          <TestimonialCard quote="Their festival coverage is sharp, insightful, and beautifully written. A genuine talent in cultural criticism." source="Festival Coordinator, Berlinale" />
          <TestimonialCard quote="Sergiu Cojocari brings a unique blend of academic depth and genuine passion to every piece. A pleasure to work with." source="Editor-in-Chief, Theater Today" />
        </TestimonialGrid>
      </TestimonialInner>
    </TestimonialSection>
  </Page>
);

export default AccomplishmentsPage;
