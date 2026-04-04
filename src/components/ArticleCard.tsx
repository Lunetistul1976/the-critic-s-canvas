import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Article } from '../data/data';
import StarIcon from '@mui/icons-material/Star';

const Card = styled(motion.article)<{ $featured?: boolean }>`
  display: flex;
  gap: 24px;
  padding: 24px;
  background: hsl(35, 25%, 98%);
  border-radius: 10px;
  box-shadow: var(--shadow-soft);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  ${p => p.$featured ? 'border-left: 3px solid hsl(38, 65%, 50%);' : ''}

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Thumb = styled.div`
  flex-shrink: 0;
  width: 160px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 180px;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const Category = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(38, 65%, 50%);
`;

const PickBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.68rem;
  font-weight: 600;
  color: hsl(38, 55%, 38%);
  background: hsl(38, 65%, 50%, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: hsl(220, 15%, 13%);
  line-height: 1.35;
  margin-bottom: 8px;
`;

const Excerpt = styled.p`
  font-size: 0.85rem;
  color: hsl(220, 10%, 45%);
  line-height: 1.65;
  margin-bottom: 10px;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.75rem;
  color: hsl(220, 10%, 55%);
`;

const ArticleCard = ({ article }: { article: Article }) => (
  <Card $featured={article.editorPick} initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
    <Thumb><img src={article.thumbnail} alt={article.title} loading="lazy" /></Thumb>
    <Content>
      <TopRow>
        <Category>{article.category}</Category>
        {article.editorPick && <PickBadge><StarIcon sx={{ fontSize: 12 }} /> Editor's Pick</PickBadge>}
      </TopRow>
      <Title>{article.title}</Title>
      <Excerpt>{article.excerpt}</Excerpt>
      <MetaRow>
        <span>{article.readTime}</span>
        <span>{article.date}</span>
      </MetaRow>
    </Content>
  </Card>
);

export default ArticleCard;
