import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: hsla(35, 30%, 96%, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid hsl(35, 15%, 85%);
  transition: all 0.3s ease;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(220, 15%, 13%);
  text-decoration: none;
  letter-spacing: -0.02em;
  
  span {
    color: hsl(38, 65%, 50%);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(Link)<{ $active?: boolean }>`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${p => p.$active ? 'hsl(38, 65%, 50%)' : 'hsl(220, 10%, 45%)'};
  text-decoration: none;
  letter-spacing: 0.02em;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: hsl(38, 65%, 50%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${p => p.$active ? '100%' : '0'};
    height: 1.5px;
    background: hsl(38, 65%, 50%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const navPaths = ['/', '/about', '/projects', '/contact'] as const;
const navKeys = ['home', 'about', 'work', 'contact'] as const;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = useMemo(
    () => navPaths.map((path, i) => ({ path, label: t(`nav.${navKeys[i]}`) })),
    [t],
  );

  return (
    <Nav>
      <NavInner>
        <Logo to="/">{t('common.siteName')}</Logo>
        <NavLinks>
          {navItems.map(item => (
            <StyledNavLink key={item.path} to={item.path} $active={location.pathname === item.path}>
              {item.label}
            </StyledNavLink>
          ))}
          <LanguageSwitcher />
        </NavLinks>
        <MobileMenuButton>
          <LanguageSwitcher />
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'hsl(220, 15%, 13%)' }}>
            <MenuIcon />
          </IconButton>
        </MobileMenuButton>
      </NavInner>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, background: 'hsl(35, 30%, 96%)', pt: 2 } }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px 16px' }}>
          <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
        </div>
        <List>
          {navItems.map(item => (
            <ListItemButton key={item.path} component={Link} to={item.path}
              onClick={() => setDrawerOpen(false)}
              selected={location.pathname === item.path}
              sx={{ fontFamily: "'DM Sans', sans-serif", '&.Mui-selected': { color: 'hsl(38, 65%, 50%)' } }}>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Nav>
  );
};

export default Navbar;
