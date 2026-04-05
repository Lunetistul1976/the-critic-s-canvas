import type { ComponentType } from 'react';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export type SocialId = 'instagram' | 'email' | 'youtube' | 'linkedin';

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
  Icon: ComponentType<SvgIconProps>;
}


export const SOCIAL_EMAIL = 'cojocari.sergiu2002@gmail.com';
export const SOCIAL_EMAIL_HREF = `mailto:${SOCIAL_EMAIL}`;


export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/new4ngle/',
    Icon: InstagramIcon,
  },
  {
    id: 'email',
    label: 'Email',
    href: SOCIAL_EMAIL_HREF,
    Icon: EmailOutlinedIcon,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@new4ngle-k7g',
    Icon: YouTubeIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sergiu-cojocari-0a3885393/',
    Icon: LinkedInIcon,
  },
];
