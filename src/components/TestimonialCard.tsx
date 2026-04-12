import styled from 'styled-components';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: hsl(35, 25%, 98%);
  border-radius: 10px;
  padding: 32px;
  box-shadow: var(--shadow-soft);
  position: relative;
`;

const QuoteIcon = styled.div`
  color: hsl(38, 65%, 50%, 0.3);
  margin-bottom: 12px;
`;

const Quote = styled.blockquote`
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  font-style: italic;
  color: hsl(220, 15%, 20%);
  line-height: 1.65;
  margin-bottom: 16px;
`;

const Source = styled.cite`
  margin-top: auto;
  padding-top: 12px;
  font-style: normal;
  font-size: 0.82rem;
  color: hsl(220, 10%, 45%);
  font-weight: 500;
`;

interface Props {
  quote: string;
  source: string;
}

const TestimonialCard = ({ quote, source }: Props) => (
  <Card initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.4 }}>
    <QuoteIcon><FormatQuoteIcon sx={{ fontSize: 36 }} /></QuoteIcon>
    <Quote>{quote}</Quote>
    <Source>{source}</Source>
  </Card>
);

export default TestimonialCard;
