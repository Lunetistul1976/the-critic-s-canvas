import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../data/data';

const categoryParamValues = new Set<string>(projectCategories);

const categoryToTKey: Record<string, string> = {
  All: 'projects.categories.all',
  'Movie Reviews': 'projects.categories.movieReviews',
  'Video Content': 'projects.categories.videoContent',
};

const Page = styled.div`
  padding-top: 72px;
  min-height: 100vh;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), min(100%, 400px)));
  gap: 28px;
  justify-content: center;
`;

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const active = useMemo(() => {
    const raw = searchParams.get('category');
    if (raw && categoryParamValues.has(raw)) return raw;
    return 'All';
  }, [searchParams]);

  const setFilter = (cat: string) => {
    const next = new URLSearchParams(searchParams);
    if (cat === 'All') next.delete('category');
    else next.set('category', cat);
    setSearchParams(next, { replace: true });
  };

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <Page>
      <Section>
        <SectionHeading
          overline={t('projects.pageOverline')}
          title={t('projects.pageTitle')}
          subtitle={t('projects.pageSubtitle')}
        />
        <Filters>
          {projectCategories.map(cat => (
            <Chip
              key={cat}
              label={t(categoryToTKey[cat] ?? cat)}
              onClick={() => setFilter(cat)}
              variant={active === cat ? 'filled' : 'outlined'}
              sx={{
                fontWeight: 500, fontSize: '0.82rem',
                ...(active === cat
                  ? { bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' } }
                  : { borderColor: 'hsl(35, 15%, 78%)', color: 'hsl(220, 10%, 40%)', '&:hover': { borderColor: 'hsl(38, 65%, 50%)' } }
                ),
              }}
            />
          ))}
        </Filters>
        <Grid>
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </Grid>
      </Section>
    </Page>
  );
};

export default ProjectsPage;
