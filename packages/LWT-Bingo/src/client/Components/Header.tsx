import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Stack, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import BurgerMenu from './Menu';
import User from './User';
import Title from '../../assets/svg/pbr/title.svg';
import TitleSmall from '../../assets/svg/pbr/titleSmall.svg';
// import Unofficial from '../../assets/svg/unofficial.svg';
// import UnofficialSmall from '../../assets/svg/unofficialSmall.svg';
// import PresentedByInCo from '../../assets/svg/presentedByInCo.svg';
// import PresentedByInCoSmall from '../../assets/svg/presentedByInCoSmall.svg';

interface HeaderProps {
  toggleTheme?: () => void;
}

const Header = React.forwardRef(function ({ toggleTheme }: HeaderProps, ref) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const theme = useTheme();

  const isDark: boolean = theme.palette.mode === 'dark';

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isLandscape: boolean = useMediaQuery('(orientation: landscape)');

  const isTablet: boolean = useMediaQuery(theme.breakpoints.down('lg'));

  const isLandscapeMobile: boolean = isLandscape && isTablet;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      // gap={isMobile || isLandscapeMobile ? 1 : 5}
      py={1}
      px={isMobile ? 2 : ''}
      width="100vw"
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ backgroundColor: 'transparent', zIndex: 99 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={'center'}
        justifyContent={isMobile ? 'flex-start' : 'space-between'}
        zIndex={-5}
        sx={{ backgroundColor: 'transparent' }}
      >
        {isMobile ? (
          <TitleSmall aria-label="The People's Battle of Richmond" />
        ) : (
          <Title aria-label="The People's Battle of Richmond" />
        )}

        {/* <Typography
          variant="h1"
          fontFamily={'Roboto'}
          color={theme.palette.primaryPink.main}
          textTransform={'uppercase'}
          align="center"
          zIndex={-10}
        >
          THE PEOPLE'S BATTLE OF RICHMOND
        </Typography> */}

        <Typography
          variant="h1"
          fontFamily={'KC Neue Teeth'}
          color={
            isDark
              ? theme.palette.secondary.contrastText
              : theme.palette.primary.main
          }
          align="center"
          zIndex={-10}
          sx={{
            WebkitTextStroke: `${isMobile ? '.25px' : '1px'} ${
              theme.palette.primary.main
            }`,
            fontSize: '3rem',
          }}
        >
          an online bingo game presented by
        </Typography>

        {/* {isMobile ? (
            <PresentedByInCoSmall aria-hidden="true" />
          ) : (
            <PresentedByInCo aria-hidden="true" />
          )} */}

        <Typography
          variant="h2"
          fontFamily={'KC Neue Teeth'}
          color={
            isDark
              ? theme.palette.secondary.contrastText
              : theme.palette.primary.main
          }
          align="center"
          zIndex={-10}
          sx={{
            WebkitTextStroke: `${isMobile ? '.25px' : '1px'} ${
              isDark
                ? theme.palette.primary.main
                : theme.palette.primaryGray.main
            }`,
          }}
        >
          InCo. and River City Roller Derby
        </Typography>
      </Box>

      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        {/* BURGER MENU - OPTIONAL */}
        {/* <IconButton
          size="large"
          edge="start"
          aria-label="menu-button"
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ color: theme.palette.background.secondary }} />
        </IconButton>
        <BurgerMenu
          handleClose={handleClose}
          toggleTheme={toggleTheme}
          anchorEl={anchorEl}
          open={open}
        /> */}
        <User />
      </Box>
    </Box>
  );
});

export default Header;
