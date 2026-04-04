import { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, IconButton, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendIcon from '@mui/icons-material/Send';
import { SOCIAL_EMAIL, SOCIAL_EMAIL_HREF, SOCIAL_LINKS } from '../data/socials';
import { submitContactForm } from '../lib/contactFormSubmit';

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
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitContactForm({ name, email, subject, message });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : t('contact.errorGeneric'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Page>
      <Section>
        <SectionHeading
          overline={t('contact.overline')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />
        <Grid>
          <ContactInfo initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <InfoText>{t('contact.infoText')}</InfoText>
            <ContactItem href={SOCIAL_EMAIL_HREF}>
              <EmailOutlinedIcon sx={{ fontSize: 20, color: 'hsl(38, 65%, 50%)' }} />
              {SOCIAL_EMAIL}
            </ContactItem>
            <SocialRow>
              {SOCIAL_LINKS.filter(({ id }) => id !== 'email').map(({ id, href, Icon }) => (
                <IconButton
                  key={id}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label={t(`social.${id}`)}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </SocialRow>
          </ContactInfo>

          <Form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            aria-busy={submitting}
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'hsl(220, 15%, 13%)', marginBottom: 8 }}>{t('contact.thankYou')}</p>
                <p style={{ fontSize: '0.9rem', color: 'hsl(220, 10%, 45%)' }}>{t('contact.thankYouSub')}</p>
              </motion.div>
            ) : (
              <>
                {submitError ? (
                  <Alert severity="error" onClose={() => setSubmitError(null)} sx={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {submitError}
                  </Alert>
                ) : null}
                <TextField
                  label={t('contact.name')}
                  name="name"
                  autoComplete="name"
                  fullWidth
                  size="small"
                  required
                  disabled={submitting}
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  sx={textFieldSx}
                />
                <TextField
                  label={t('contact.email')}
                  name="email"
                  type="email"
                  autoComplete="email"
                  fullWidth
                  size="small"
                  required
                  disabled={submitting}
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  sx={textFieldSx}
                />
                <TextField
                  label={t('contact.subject')}
                  name="subject"
                  fullWidth
                  size="small"
                  disabled={submitting}
                  value={subject}
                  onChange={(ev) => setSubject(ev.target.value)}
                  sx={textFieldSx}
                />
                <TextField
                  label={t('contact.message')}
                  name="message"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  disabled={submitting}
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  sx={textFieldSx}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={submitting}
                  endIcon={submitting ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                  sx={{
                    bgcolor: 'hsl(38, 65%, 50%)',
                    color: 'hsl(35, 30%, 96%)',
                    '&:hover': { bgcolor: 'hsl(38, 65%, 42%)' },
                    alignSelf: 'flex-start',
                    px: 4,
                  }}
                >
                  {submitting ? t('contact.sending') : t('contact.send')}
                </Button>
              </>
            )}
          </Form>
        </Grid>
      </Section>
    </Page>
  );
};

export default ContactPage;
