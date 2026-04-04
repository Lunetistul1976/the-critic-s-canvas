import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)<{ $align?: string }>`
  text-align: ${p => p.$align || 'left'};
  margin-bottom: 48px;
`;

const Overline = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: hsl(38, 65%, 50%);
  display: block;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 600;
  color: hsl(220, 15%, 13%);
  line-height: 1.2;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: hsl(220, 10%, 45%);
  line-height: 1.7;
  max-width: 600px;
  ${(p: any) => p.style?.textAlign === 'center' ? 'margin: 0 auto;' : ''}
`;

interface Props {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ overline, title, subtitle, align = 'left' }: Props) => (
  <Wrapper $align={align} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.5 }}>
    {overline && <Overline>{overline}</Overline>}
    <Title>{title}</Title>
    {subtitle && <Subtitle style={{ textAlign: align, margin: align === 'center' ? '0 auto' : undefined }}>{subtitle}</Subtitle>}
  </Wrapper>
);

export default SectionHeading;
