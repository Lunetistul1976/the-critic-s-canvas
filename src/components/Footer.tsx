import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS } from '../data/socials';

const FooterWrapper = styled.footer`
  background: hsl(220, 15%, 13%);
  color: hsl(35, 15%, 75%);
  padding: 64px 24px 32px;
`;

/** Set true to show the Explore links column again. */
const SHOW_FOOTER_EXPLORE = false;

const FooterInner = styled.div<{ $twoColumn: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${p => (p.$twoColumn ? '2fr 1fr' : '2fr 1fr 1fr')};
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const FooterLogo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: hsl(35, 30%, 96%);
  margin-bottom: 12px;
  span { color: hsl(38, 65%, 50%); }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;
  max-width: 340px;
`;

const FooterHeading = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(35, 30%, 96%);
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  display: block;
  font-size: 0.875rem;
  color: hsl(35, 15%, 65%);
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s;
  &:hover { color: hsl(38, 65%, 50%); }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.25rem;
    min-height: 2.25rem;
    color: hsl(35, 15%, 65%);
    transition: color 0.2s;
    &:hover { color: hsl(38, 65%, 50%); }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 48px auto 0;
  padding-top: 24px;
  border-top: 1px solid hsl(220, 10%, 22%);
  font-size: 0.8rem;
  text-align: center;
`;

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterInner $twoColumn={!SHOW_FOOTER_EXPLORE}>
        <div>
          <FooterLogo>{t('common.siteName')}</FooterLogo>
          <FooterText>{t('footer.tagline')}</FooterText>
          <SocialRow>
            {SOCIAL_LINKS.map(({ id, href, Icon }) => (
              <a
                key={id}
                href={href}
                aria-label={t(`social.${id}`)}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon fontSize="small" />
              </a>
            ))}
          </SocialRow>
        </div>
        <div>
          <FooterHeading>{t('footer.navigate')}</FooterHeading>
          <FooterLink to="/about">{t('nav.about')}</FooterLink>
          <FooterLink to="/projects">{t('nav.work')}</FooterLink>
          <FooterLink to="/contact">{t('nav.contact')}</FooterLink>
        </div>
        {SHOW_FOOTER_EXPLORE && (
          <div>
            <FooterHeading>{t('footer.explore')}</FooterHeading>
            <FooterLink to={`/projects?category=${encodeURIComponent('Movie Reviews')}`}>
              {t('footer.movieReviews')}
            </FooterLink>
            <FooterLink to={`/projects?category=${encodeURIComponent('Video Content')}`}>
              {t('footer.videoContent')}
            </FooterLink>
            <FooterLink to={`/projects?category=${encodeURIComponent('Video essay')}`}>
              {t('footer.videoEssay')}
            </FooterLink>
          </div>
        )}
      </FooterInner>
      <BottomBar>{t('footer.rights', { year })}</BottomBar>
    </FooterWrapper>
  );
};

export default Footer;
