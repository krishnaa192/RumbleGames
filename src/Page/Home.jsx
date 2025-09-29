import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import '../Style/Home.css';
import MobileSlider from '../components/MobileSide.jsx';
import TopGame from '../assets/topgame.svg';
import Mostplayed from '../assets/Most_Playe.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from '../../APi.jsx';
import { useTranslation } from 'react-i18next';
import CircularColor from '../components/Loader.jsx';
import LazyImage from '../components/LazyImage.jsx';
import { HamIcon } from '../components/Ham.jsx';
import Top_gameDark from '../assets/top_gamedark.svg';
import CustomCarousel from '../components/CustomCorosoul.jsx';
import Most_playDark from '../assets/Most_playdark.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.jsx';
import RumbleLight from '../assets/rumblelight.svg';
import RumbleDark from '../assets/rumble-dark.svg';





const Home = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [carouselGames, setCarouselGames] = useState([]);
  const [topGames, setTopGames] = useState([]);
  const [mostPlayed, setMostPlayed] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const getIconTheme = (theme, lightIcon, darkIcon) => {

    return theme === 'dark' ? darkIcon : lightIcon;
  };
  const handleToggleSlider = () => setShowSlider(prev => !prev);


  const isImageFile = (path) => /\.(jpg|jpeg|png|gif|webp)$/i.test(path);

  const getRandomGames = (games, count) => {
    const filtered = games.filter(game => isImageFile(game.imagePath));
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchData();
      const top = getRandomGames(response, 6);
      const most = getRandomGames(response, 6);
      const carousel = getRandomGames(response, 3);
      const trendings = getRandomGames(response, 6)
      setTrending(trendings)
      setTopGames(top);
      setMostPlayed(most);

      // Delay carouselGames just slightly (to let layout stabilize)
      setTimeout(() => {
        setCarouselGames(carousel);
        setLoading(false);
      }, 100); // 100ms is usually enough
    };

    loadData();
  }, []);


  const sliderRef = useRef();




  if (loading) return <CircularColor />;

  return (
    <div className="home-container">

      <div className="sidebar">
        <div className="normal-view">
          <Sidebar />
        </div>
        <div className="mobile-view header-wrapper">
          <div className="mobile-title">

            <img src={getIconTheme(

              theme,
              RumbleLight,
              RumbleDark

            )} alt="Logo" className='logo' />

          </div>
          <HamIcon className="hamburger-icon" onClick={handleToggleSlider} />
        </div>

        {showSlider && <MobileSlider />}
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Carousel */}

        <div className="carousel-container" ref={sliderRef}>

          <CustomCarousel games={carouselGames} />

        </div>

        {/* Top Games */}
        <div className="category">
          <div className="cat-head">
            <span style={{
              fontSize: '17px',
              fontWeight: '600'
            }}>
              <LazyImage
                src={getIconTheme(
                  theme,
                  TopGame,
                  Top_gameDark
                )}
                alt="Top Game"
              />
              {t('topGames')}
            </span>
          </div>
          <div className="games-content">
            <div className="game-banner">
              {topGames.map((game, index) => (
                <Link key={index} to={`/games/game/${game.id}`} state={{ game }} className="game-item">
                  <span>{index + 1}</span>
                  <LazyImage src={game.imagePath} alt={game.name} />
                  <p>{game.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Most Played */}
        <div className="category no-scroll">
          <div className="cat-head ">
            <span style={{
              fontSize: '17px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center'
            }}>
              <LazyImage
                src={getIconTheme(
                  theme,
                  Mostplayed,
                  Most_playDark
                )}
                alt="Top Game" 
              />
              {t('mostPlayed')}
            </span>
          </div>
          <div className="games-content">
            <div className="game-banner">
              {mostPlayed.map((game, index) => (
                <Link key={index} to={`/games/game/${game.id}`} state={{ game }} className="game-item">
                  <LazyImage src={game.imagePath} alt={game.name} />
                  <p>{game.name}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
        <div className="category">
          <div className="cat-head">
            <span style={{
              fontSize: '17px',
              fontWeight: '600'
            }}>
              <LazyImage
                src={getIconTheme(
                  theme,
                  TopGame,
                  Top_gameDark
                )}
                alt="Top Game"
              />
              {t('trending')} {t('games')}
            </span>
          </div>
          <div className="games-content">
            <div className="game-banner">
              {trending.map((game, index) => (
                <Link key={index} to={`/games/game/${game.id}`} state={{ game }} className="game-item">

                  <LazyImage src={game.imagePath} alt={game.name} />
                  <p>{game.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
