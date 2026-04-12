import styled from 'styled-components';
import { Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Project } from '../data/data';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Card = styled(motion.article)`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: hsl(35, 25%, 98%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-elevated);
    transform: translateY(-4px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const CardShell = styled.span`
  display: block;
  height: 100%;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: hsla(220, 15%, 13%, 0.85);
  color: hsl(35, 30%, 96%);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 4px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 20px 24px 24px;
`;

const ContentBottom = styled.div`
  margin-top: auto;
`;

const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: hsl(220, 15%, 13%);
  line-height: 1.35;
  margin-bottom: 8px;
`;

const Desc = styled.p`
  font-size: 0.875rem;
  color: hsl(220, 10%, 45%);
  line-height: 1.65;
  margin-bottom: 14px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  color: hsl(220, 10%, 55%);
  margin-bottom: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const ImpactBadge = styled.div`
  margin-top: 14px;
  padding: 10px 14px;
  background: hsl(38, 65%, 50%, 0.08);
  border-radius: 6px;
  font-size: 0.8rem;
  color: hsl(38, 55%, 38%);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const categoryToTKey: Record<string, string> = {
  'Movie Reviews': 'projects.categories.movieReviews',
  'Video Content': 'projects.categories.videoContent',
  'Video essay': 'projects.categories.videoEssay',
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const base = `projects.items.${project.id}`;
  const title = t(`${base}.title`, { defaultValue: project.title });
  const description = t(`${base}.description`, { defaultValue: project.description });
  const platform = t(`${base}.platform`, { defaultValue: project.platform });
  const date = t(`${base}.date`, { defaultValue: project.date });
  const impact = project.impact
    ? t(`${base}.impact`, { defaultValue: project.impact })
    : undefined;
  const tagsRaw = t(`${base}.tags`, { returnObjects: true });
  const tags = Array.isArray(tagsRaw) ? (tagsRaw as string[]) : project.tags;
  const categoryLabel = categoryToTKey[project.category]
    ? t(categoryToTKey[project.category])
    : project.category;

  const href =
    project.link && project.link !== '#' && /^https?:\/\//i.test(project.link)
      ? project.link
      : undefined;

  const cardInner = (
    <>
      <ImageWrapper>
        <img src={project.thumbnail} alt={title} loading="lazy" />
        <CategoryBadge>{categoryLabel}</CategoryBadge>
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <ContentBottom>
          <Meta>
            <span>{platform}</span>
            <span>{date}</span>
          </Meta>
          <Tags>
            {tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                onClick={href ? e => e.stopPropagation() : undefined}
                sx={{ fontSize: '0.7rem', height: 24, borderColor: 'hsl(35, 15%, 80%)', color: 'hsl(220, 10%, 45%)' }}
              />
            ))}
          </Tags>
          {impact && (
            <ImpactBadge>
              <OpenInNewIcon sx={{ fontSize: 14 }} />
              {impact}
            </ImpactBadge>
          )}
        </ContentBottom>
      </Content>
    </>
  );

  const card = (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {cardInner}
    </Card>
  );

  return href ? (
    <CardLink href={href} target="_blank" rel="noopener noreferrer">
      {card}
    </CardLink>
  ) : (
    <CardShell>{card}</CardShell>
  );
};

export default ProjectCard;
