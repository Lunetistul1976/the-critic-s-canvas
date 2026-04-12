import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../data/data';

const categoryParamValues = new Set<string>(projectCategories);

const enabledFilterCategories = new Set<string>(['All', 'Video essay']);

const categoryToTKey: Record<string, string> = {
  All: 'projects.categories.all',
  'Movie Reviews': 'projects.categories.movieReviews',
  'Video Content': 'projects.categories.videoContent',
  'Video essay': 'projects.categories.videoEssay',
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
  gap: 12px;
  align-items: center;
  margin-bottom: 40px;
`;

const ChipWrapper = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

const ComingSoonBadge = styled.span`
  position: absolute;
  top: -7px;
  right: -6px;
  z-index: 2;
  max-width: calc(100% + 12px);
  padding: 3px 7px;
  border-radius: 4px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.58rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  text-align: center;
  color: hsl(35, 30%, 98%);
  background: hsl(220, 18%, 24%);
  box-shadow: 0 1px 5px hsla(220, 20%, 10%, 0.22);
  pointer-events: none;
  white-space: nowrap;
`;

const Grid = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), min(100%, 400px)));
  gap: 28px;
  justify-content: center;
`;

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const raw = searchParams.get('category');
    if (raw && categoryParamValues.has(raw) && !enabledFilterCategories.has(raw)) {
      const next = new URLSearchParams(searchParams);
      next.delete('category');
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const active = useMemo(() => {
    const raw = searchParams.get('category');
    if (raw && categoryParamValues.has(raw) && enabledFilterCategories.has(raw)) return raw;
    return 'All';
  }, [searchParams]);

  const setFilter = (cat: string) => {
    if (!enabledFilterCategories.has(cat)) return;
    const next = new URLSearchParams(searchParams);
    if (cat === 'All') next.delete('category');
    else next.set('category', cat);
    setSearchParams(next, { replace: true });
  };

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  const chipSx = (cat: string, isEnabled: boolean) => ({
    textTransform: 'capitalize' as const,
    fontWeight: 500,
    fontSize: '0.82rem',
    ...(isEnabled
      ? active === cat
        ? { bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' } }
        : { borderColor: 'hsl(35, 15%, 78%)', color: 'hsl(220, 10%, 40%)', '&:hover': { borderColor: 'hsl(38, 65%, 50%)' } }
      : {
          borderColor: 'hsl(35, 12%, 88%)',
          color: 'hsl(220, 8%, 55%)',
          bgcolor: 'hsl(35, 20%, 97%)',
        }),
  });

  return (
    <Page>
      <Section>
        <SectionHeading
          overline={t('projects.pageOverline')}
          title={t('projects.pageTitle')}
          subtitle={t('projects.pageSubtitle')}
        />
        <Filters>
          {projectCategories.map(cat => {
            const isEnabled = enabledFilterCategories.has(cat);
            const chip = (
              <Chip
                label={t(categoryToTKey[cat] ?? cat)}
                onClick={isEnabled ? () => setFilter(cat) : undefined}
                disabled={!isEnabled}
                variant={active === cat ? 'filled' : 'outlined'}
                sx={chipSx(cat, isEnabled)}
              />
            );

            if (!isEnabled) {
              const label = t(categoryToTKey[cat] ?? cat);
              return (
                <ChipWrapper
                  key={cat}
                  role="group"
                  aria-label={`${label}, ${t('projects.comingSoon')}`}
                >
                  {chip}
                  <ComingSoonBadge aria-hidden>{t('projects.comingSoon')}</ComingSoonBadge>
                </ChipWrapper>
              );
            }

            return <span key={cat}>{chip}</span>;
          })}
        </Filters>
        <Grid>
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </Grid>
      </Section>
    </Page>
  );
};

export default ProjectsPage;
