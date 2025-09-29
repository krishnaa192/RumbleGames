import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LazyImage from '../components/LazyImage';
import HomeIcon from '../assets/Homenav.svg';
import HomeUnAxtive from '../assets/Home_Icon.svg';
import Home_dark from '../assets/Home_dark.svg';
import Game_dark from '../assets/Game_dark.svg';
import Account_dark from '../assets/Account_dark.svg';
import GameActive from '../assets/Games_blue.svg';
import AccountActive from '../assets/MyAccount_active.svg';
import GamesIcon from '../assets/GamesIcon.svg';
import AccountIcon from '../assets/AccountIcon.svg';
import Toggleoff from '../assets/Toggleoff.svg';
import Toggleon from '../assets/Toggleon.svg';
import RumbleLight from '../assets/rumblelight.svg';
import RumbleDark from '../assets/rumble-dark.svg';
import Sun from '../assets/SunL.svg';
import Moon from '../assets/MoonL.svg';
import Sun_dark from '../assets/Sun_dark.svg';
import Moon_dark from '../assets/Moon_dark.svg';
import '../Style/Sidebar.css';
import { Categories } from './Tab';
import { ThemeContext } from '../../ThemeContext';

const Sidebar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { i18n, t } = useTranslation();
  const [gamesDropdown, setGamesDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const categories = Categories;

  const Language = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'عربي' },
    { code: 'pl', label: 'Polski' },
    { code: 'fr', label: 'Français' }
  ];
  const getIcon = (isActive, theme, lightIcon, darkIcon, lightActive, darkActive) => {
    if (isActive) {
      return theme === 'dark' ? darkActive : lightActive;
    }
    return theme === 'dark' ? darkIcon : lightIcon;
  };
  const getIconTheme = (theme, lightIcon, darkIcon) => {

    return theme === 'dark' ? darkIcon : lightIcon;
  };

  const toggleLanguageDropdown = () => setLanguageDropdown(prev => !prev);

  const handleGamesDropdown = () => setGamesDropdown(prev => !prev);

  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('Rumble-language') || i18n.language || 'en';
  });

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
    localStorage.setItem('Rumble-language', code);
    setLanguageDropdown(false);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('Rumble-language');
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
      setSelectedLang(storedLang);
    }
  }, []);

  const isHomeActive = location.pathname === '/';
  const isGamesActive = categories.some(cat =>
    location.pathname.toLowerCase().startsWith(cat.path.toLowerCase())
  );
  const isAccountActive = location.pathname.startsWith('/account');
  const selectedLabel = Language.find(lang => lang.code === selectedLang)?.label || 'Language';

  return (
    <div className='sidebar-container'>
      <img src={getIconTheme(

        theme,
        RumbleLight,
        RumbleDark

      )} alt="Logo" className='logo' />


      <span className='hr-head'><hr /></span>

      <div className='sidebar-menu'>
        <div className='sidebar-top'>
          <ul>
            {/* Home */}
            <Link to="/" className="tab-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className={isHomeActive ? 'selected-item' : ''}>
                <LazyImage
                  src={getIcon(
                    isHomeActive,
                    theme,
                    HomeUnAxtive,
                    Home_dark,
                    HomeIcon,
                    HomeIcon
                  )}
                  alt="Home"
                />

                <span className='home' >{t('home')}</span>

              </li>
            </Link>
            {/* Games */}
            <li className="dropdown">
              <div
                className={`dropdown-toggle custom-dropdown-toggle ${isGamesActive ? 'selected-item' : ''}`}
                onClick={handleGamesDropdown}
              >
                <LazyImage
                  src={getIcon(
                    isGamesActive,
                    theme,
                    GamesIcon,         // Light normal
                    Game_dark,         // Dark normal
                    GameActive,
                    GameActive

                  )}
                  alt="Game"
                />


                <span className="nav-text">{t('games')}</span>
                <FontAwesomeIcon icon={gamesDropdown ? faChevronUp : faChevronDown} className="arrow-indicator" />
              </div>

              {gamesDropdown && (
                <ul className="expanded-menu">
                  {Categories.map((cat, index) => {
                    const isSubActive = location.pathname.toLowerCase().startsWith(cat.path.toLowerCase());
                    return (
                      <li key={index} className={`dropdown-item ${isSubActive ? 'selected-item' : ''}`}>
                        <Link to={cat.path} className="tab-link">
                          <LazyImage
                            src={getIcon(
                              isSubActive,
                              theme,
                              cat.icon,         // Light normal
                              cat.actite_tab,         // Dark normal
                              cat.activeicon,
                              cat.activeicon

                            )}
                            alt={cat.name}
                            className="tab-icon"
                          />

                          <span className="nav-text" style={{
                            marginLeft: '10px', fontSize: "14px"
                          }}>{t(`categories.${cat.name}`)}</span>
                        </Link>
                      </li>
                    );
                  })}

                </ul>


              )}
            </li>


            {/* Account */}
            <Link to="/account" className="tab-link" style={{ textDecoration: 'none', background: 'transparent' }}>
              <li className={isAccountActive ? 'selected-item' : ''}>

                <LazyImage
                  style={
                    {
                      width: '33px'
                    }}
                  src={getIcon(
                    isAccountActive,
                    theme,
                    AccountIcon,         // Light normal
                    Account_dark,         // Dark normal
                    AccountActive,
                    AccountActive

                  )}
                  alt="Account"
                />

                <span className='' account style={{
                  marginLeft: '1rem', fontSize: '16px', fontWeight: 600, background: 'transparent', color: '#9e9e9e'
                }}>{t('account') || 'My Account'}</span>

              </li>
            </Link>
          </ul>
        </div>

        {/* Bottom */}
        <div className='sidebar-bottom'>
          {/* Theme Switcher */}
          <div className='theme-switching'>
            <div style={{ display: 'flex', fontSize: '14px', marginLeft: '20px' }}>
              {t('light')}
              <LazyImage
                src={getIconTheme(

                  theme,
                  Sun,
                  Sun_dark

                )}
                alt="Sum"
              />
              <div className="switch">
                {theme === 'light' ? (
                  <LazyImage src={Toggleoff} onClick={toggleTheme} className='image-btn' />
                ) : (
                  <LazyImage src={Toggleon} onClick={toggleTheme} className='image-btn' />
                )}
              </div>
              <LazyImage
                src={getIconTheme(

                  theme,
                  Moon,
                  Moon_dark
                )}
                alt="Moon"
              />  {t('dark')}
            </div>
          </div>

          {/* Language Dropdown */}
          <li className="dropdown">
            <div
              className={`dropdown-toggle custom-dropdown-toggle ${languageDropdown ? 'selected-item' : ''}`}
              onClick={toggleLanguageDropdown}
              style={{ border: "1px solid rgb(230 231 231)", marginTop: '25px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '10px', width: '80%' }}
            >
              <span className="nav-text"
              >{selectedLabel}</span>
              <FontAwesomeIcon icon={languageDropdown ? faChevronUp : faChevronDown} className="arrow-indicator" />
            </div>

            {languageDropdown && (
              <ul className="expanded-menu">
                {Language.map(({ code, label }) => (
                  <li
                    key={code}
                    className={`dropdown-item ${i18n.language === code ? 'selected-item' : ''}`}
                    onClick={() => changeLanguage(code)}
                    style={{
                      cursor: "pointer", width: '182px'
                    }}
                  >
                    <span className="nav-text">{label}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
