import { useState } from 'react';
import styled from 'styled-components';
import { Chip } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import ArticleCard from '../components/ArticleCard';
import { articles, articleCategories } from '../data/data';

const Page = styled.div`
  padding-top: 72px;
  min-height: 100vh;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
`;

const EditorPicksSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px 60px;
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WritingPage = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active);
  const editorPicks = articles.filter(a => a.editorPick);

  return (
    <Page>
      <Section>
        <SectionHeading overline="Writing" title="Featured Reviews & Essays"
          subtitle="A curated archive of criticism, analysis, and cultural commentary." />
        <Filters>
          {articleCategories.map(cat => (
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
        <ArticleList>
          {filtered.map(a => <ArticleCard key={a.id} article={a} />)}
        </ArticleList>
      </Section>

      {editorPicks.length > 0 && (
        <EditorPicksSection>
          <SectionHeading overline="Editor's Picks" title="Recommended Reading" align="center" />
          <ArticleList>
            {editorPicks.map(a => <ArticleCard key={a.id} article={a} />)}
          </ArticleList>
        </EditorPicksSection>
      )}
    </Page>
  );
};

export default WritingPage;
