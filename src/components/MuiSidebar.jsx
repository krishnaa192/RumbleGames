import React, { useState,useEffect } from 'react'
import HomeIcon from '../assets/HomeIcon.png'
import GamesIcon from '../assets/GamesIcon.png'
import AccountIcon from '../assets/AccountIcon.png'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../Style/Sidebar.css'
import Tab from './Tab'
import Toggleoff from '../assets/Toggleoff.png'
import Sun from '../assets/sun.png'
import Moon from '../assets/moon.png'
import Toggleon from '../assets/Toggleon.png'
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';



const Sidebar = () => {
  
  const location = useLocation();

  const { theme, toggleTheme } = useContext(ThemeContext);

  
  const [gamesDropdown, setGamesDropdown] = React.useState(false);

  const handleGamesDropdown = () => {
    setGamesDropdown(prev => !prev);
  };


  const Categories = Tab;


  const [languageDropdown, setLanguageDropdown] = useState(false)


  const { i18n } = useTranslation();

  const Language = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'عربي' },
    { code: 'pl', label: 'Polski' },
    { code: 'fr', label: 'French' }
  ];
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('Rumble-language') || i18n.language || 'en';
  });
  
  useEffect(() => {
    const storedLang = localStorage.getItem('Rumble-language');
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
      setSelectedLang(storedLang);
    }
  }, []);
  

  const handleLanguageDropdown = () => {
    setLanguageDropdown(!languageDropdown)

  }
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
    localStorage.setItem('Rumble-language', code); // Save selected language
    setLanguageDropdown(false);
  };
  
  const selectedLabel = Language.find(lang => lang.code === selectedLang)?.label || 'Language';

  const isHomeActive = location.pathname === '/';
  const isGamesActive = location.pathname.startsWith('/games');
  const isAccountActive = location.pathname.startsWith('/account');


  return (
    <>
      <div className='sidebar-container'>
        <h1> Rumble</h1>
        <hr />
        <div className='sidebar-menu'>
          <div className='sidebar-top'>
            <ul>
              <li className={isHomeActive ? 'selected-item' : ''}>
                <img src={HomeIcon} />
                <Link to="/" className="tab-link" style={{ textDecoration: 'none', color: 'inherit', background: 'inherit' }}>
                  Home
                </Link>
              </li>
              <ul className="nav">
                <li  className={`dropdown ${isGamesActive ? 'selected-item' : ''} ${gamesDropdown ? 'open' : ''}`}>
             
                  <div
                    className="custom-dropdown-toggle"
                    onClick={handleGamesDropdown}
                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', justifyContent: 'space-between', width: '100%' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center',backgroundColor:'inherit' }}>
                      <img src={GamesIcon} alt="Games" style={{ marginRight: '8px' }} />
                      <span>Games</span>
                    </div>
                    <FontAwesomeIcon icon={gamesDropdown ? faChevronUp : faChevronDown} />
                  </div>

                  {gamesDropdown && (
                    <ul className="dropdown-menu">
                      {Categories.map((cat, index) => (
                        <li key={index} style={{ cursor: 'pointer', padding: '5px 10px' }}>
                          <Link
                            to={cat.path}
                            className="tab-link"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <img
                              src={cat.icon}
                              style={{ width: '20px', height: '20px', marginRight: '10px' }}
                              alt={cat.name}
                            />
                            {cat.name} Games
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>





              <li className={isAccountActive ? 'selected-item' : ''}>
                <Link to="/account" className="tab-link" style={{ textDecoration: 'none', color: 'inherit', background: 'inherit' }}>
                  <img src={AccountIcon} /> My Account
                </Link>
              </li>

            </ul>
          </div>
          <div className='sidebar-bottom'>
            <div className='theme-switching'>
              <p style={{ display: 'flex' }}>Light  <img src={Sun} />
                <div className="switch"  >
                  {
                    theme === 'light' ?
                      (<img src={Toggleoff} onClick={toggleTheme} className='image-btn' />)
                      : (<img src={Toggleon} onClick={toggleTheme} className='image-btn' />
                      )}




                </div>
                <img src={Moon} />    Dark
              </p>

            </div>
            <div className='language'>
              <ul className="nav">
                <li className="dropdown" style={{}}>
                  <span
                    className={`dropdown-toggle ${languageDropdown ? 'open' : ''}`}
                    style={{ justifyContent: "space-around", cursor: "pointer" }}
                    onClick={handleLanguageDropdown}
                  >
                    <span className="label-lang">{selectedLabel}</span>
                  </span>

                  {languageDropdown && (
                    <ul className="dropdown-menu" style={{ top: "auto", bottom: "95%" }}>
                      {Language.map(({ code, label }) => (
                        <li
                          key={code}
                          style={{ cursor: 'pointer', padding: '5px 10px' }}
                          onClick={() => changeLanguage(code)}
                        >
                          {label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>

              <span className='copyright'>
                © Copyright Rumble 2025
              </span>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Sidebar
