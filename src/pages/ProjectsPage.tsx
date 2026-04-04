import { useState } from 'react';
import styled from 'styled-components';
import { Chip } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, categories } from '../data/mockData';

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
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
`;

const ProjectsPage = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <Page>
      <Section>
        <SectionHeading overline="Portfolio" title="Work & Projects"
          subtitle="A collection of reviews, essays, video content, and editorial projects spanning film, theater, and culture." />
        <Filters>
          {categories.map(cat => (
            <Chip key={cat} label={cat} onClick={() => setActive(cat)}
              variant={active === cat ? 'filled' : 'outlined'}
              sx={{
                fontWeight: 500, fontSize: '0.82rem',
                ...(active === cat
                  ? { bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' } }
                  : { borderColor: 'hsl(35, 15%, 78%)', color: 'hsl(220, 10%, 40%)', '&:hover': { borderColor: 'hsl(38, 65%, 50%)' } }
                ),
              }} />
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
