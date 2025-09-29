import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {  HamIcon } from '../components/Ham.jsx';
import Sidebar from '../components/Sidebar';
import Action from '../assets/Action.svg';
import '../Style/Games.css';
import MobileSlider from '../components/MobileSide';
import { fetchData } from '../../APi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import LazyImage from '../components/LazyImage';
import { ThemeContext } from '../../ThemeContext.jsx';
import RumbleLight from '../assets/rumblelight.svg';
import RumbleDark from '../assets/rumble-dark.svg';

const GamePage = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [data, setData] = useState([]);
 const {  t } = useTranslation();
 
  const { state } = useLocation();  // <- gets the state passed during navigation

  const { game } = state || {};
 const { theme } = useContext(ThemeContext);
  const handleToggleSlider = () => setShowSlider(prev => !prev);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setData(response);
    };
    getData();
  }, []);
  const isImageFile = (path) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(path);
  };
  const getRandomGamesByCategory = (category, count) => {
    const filtered = data.filter(
      game =>
        game.category?.toLowerCase() === category.toLowerCase() &&
        isImageFile(game.imagePath)
    );
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
console.log(game,"selectred game")
  if (!game) {
    return (
      <div className="home-content">
        <h2>Game not found</h2>
        <p>This page was accessed directly or game data was not passed.</p>
      </div>
    );
  }
  const getIconTheme = (theme, lightIcon, darkIcon) => {

    return theme === 'dark' ? darkIcon : lightIcon;
  };
  const iframeSrc = game.cpUrl || '';


  const randomGames = getRandomGamesByCategory(game.category, 9);

  return (
    <div className="home-container">
         <div className="sidebar">
        <div className="normal-view">
          <Sidebar />
        </div>
        <div className="mobile-view header-wrapper">
          <div className="mobile-title">
                       
          <img  src={getIconTheme(
                            
                            theme,
                            RumbleLight,
                            RumbleDark
                        
                          )} alt="Logo" className='logo' />

          </div>
          <HamIcon className="hamburger-icon" onClick={handleToggleSlider} />
        </div>

        {showSlider && <MobileSlider />}
      </div>


      <div className='home-content'>
        <div className='game-page-overview'>
          <div className='image-wrapper'>
            <LazyImage src={game.imagePath} alt={game.name} className='cor1' />
            <div className="overlay"></div>
            {iframeSrc && (
              <a href={iframeSrc} target="_blank" rel="noopener noreferrer">
                <button className="play-now-btn"> {t('playNow')}</button>
              </a>
            )}
          </div>
          <h4>{game.name}</h4>
          <p className="game-description">{game.description}</p>
        </div>

        {randomGames.length > 0 && (
  <>
    <p style={{ fontWeight: 700 }}>
      <LazyImage src={Action} alt="action" /> {t('similarGames')}
    </p>
    <div className='game-library'>
      <div className='library-content'>
        {randomGames.map((g,index) => (
          <Link
          key={`${g.id}-${index}`}
            to={`/games/game/${g.id}`}
            state={{ game: g }}
            className="image-container-play"
          >
            <LazyImage src={g.imagePath} alt={g.name} />
            <div className="hover-text">
              <strong>{g.name}</strong><br />
              <span>{g.description?.slice(0, 50)}...</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
)}
       
      </div>
    </div>
  );
};

export default GamePage;
