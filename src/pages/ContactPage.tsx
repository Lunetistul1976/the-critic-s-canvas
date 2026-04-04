import { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const Page = styled.div`
  padding-top: 72px;
  min-height: 100vh;
`;

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled(motion.div)``;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: hsl(220, 10%, 40%);
  line-height: 1.75;
  margin-bottom: 28px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: hsl(220, 10%, 35%);
  text-decoration: none;
  margin-bottom: 16px;
  transition: color 0.2s;

  &:hover {
    color: hsl(38, 65%, 50%);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;

  .MuiIconButton-root {
    color: hsl(220, 10%, 45%);
    transition: all 0.2s;
    border: 1px solid hsl(35, 15%, 85%);

    &:hover {
      color: hsl(38, 65%, 50%);
      border-color: hsl(38, 65%, 50%);
    }
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NewsletterSection = styled(motion.section)`
  background: hsl(220, 15%, 13%);
  padding: 64px 24px;
  text-align: center;
`;

const NewsletterInner = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const NewsletterTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: hsl(35, 30%, 96%);
  margin-bottom: 12px;
`;

const NewsletterDesc = styled.p`
  font-size: 0.9rem;
  color: hsl(35, 15%, 70%);
  margin-bottom: 24px;
  line-height: 1.65;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    fontFamily: "'DM Sans', sans-serif",
    '& fieldset': { borderColor: 'hsl(35, 15%, 82%)' },
    '&:hover fieldset': { borderColor: 'hsl(38, 65%, 50%)' },
    '&.Mui-focused fieldset': { borderColor: 'hsl(38, 65%, 50%)' },
  },
  '& .MuiInputLabel-root': { fontFamily: "'DM Sans', sans-serif", color: 'hsl(220, 10%, 50%)' },
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Page>
      <Section>
        <SectionHeading overline="Contact" title="Let's Work Together"
          subtitle="Open to freelance assignments, editorial collaborations, and creative partnerships." />
        <Grid>
          <ContactInfo initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <InfoText>
              Whether you're looking for a film critic, theater reviewer, editorial contributor, or creative collaborator—I'd love to hear about the opportunity.
            </InfoText>
            <ContactItem href="mailto:hello@amorgan.com">
              <EmailOutlinedIcon sx={{ fontSize: 20, color: 'hsl(38, 65%, 50%)' }} />
              hello@amorgan.com
            </ContactItem>
            <SocialRow>
              <IconButton size="small" aria-label="Twitter"><TwitterIcon fontSize="small" /></IconButton>
              <IconButton size="small" aria-label="Instagram"><InstagramIcon fontSize="small" /></IconButton>
              <IconButton size="small" aria-label="YouTube"><YouTubeIcon fontSize="small" /></IconButton>
              <IconButton size="small" aria-label="LinkedIn"><LinkedInIcon fontSize="small" /></IconButton>
            </SocialRow>
          </ContactInfo>

          <Form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'hsl(220, 15%, 13%)', marginBottom: 8 }}>Thank you!</p>
                <p style={{ fontSize: '0.9rem', color: 'hsl(220, 10%, 45%)' }}>I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <>
                <TextField label="Name" fullWidth size="small" required sx={textFieldSx} />
                <TextField label="Email" type="email" fullWidth size="small" required sx={textFieldSx} />
                <TextField label="Subject" fullWidth size="small" sx={textFieldSx} />
                <TextField label="Message" fullWidth multiline rows={4} required sx={textFieldSx} />
                <Button type="submit" variant="contained" endIcon={<SendIcon />}
                  sx={{ bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' }, alignSelf: 'flex-start', px: 4 }}>
                  Send Message
                </Button>
              </>
            )}
          </Form>
        </Grid>
      </Section>

      <NewsletterSection initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <NewsletterInner>
          <NewsletterTitle>Subscribe to Reel & Stage</NewsletterTitle>
          <NewsletterDesc>Weekly insights on film, theater, and cultural storytelling. Join 4,800+ readers.</NewsletterDesc>
          <NewsletterForm onSubmit={e => e.preventDefault()}>
            <TextField size="small" placeholder="Your email" variant="outlined"
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'hsl(220, 10%, 18%)', color: 'hsl(35, 30%, 90%)', '& fieldset': { borderColor: 'hsl(220, 10%, 28%)' } }, minWidth: 240 }} />
            <Button variant="contained" sx={{ bgcolor: 'hsl(38, 65%, 50%)', color: 'hsl(35, 30%, 96%)', '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' } }}>
              Subscribe
            </Button>
          </NewsletterForm>
        </NewsletterInner>
      </NewsletterSection>
    </Page>
  );
};

export default ContactPage;
