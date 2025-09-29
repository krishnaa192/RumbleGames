import React, { useEffect, useState ,useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileSlider from '../components/MobileSide';
import { fetchData } from '../../APi';
import { useTranslation } from 'react-i18next';
import CircularColor from '../components/Loader';
import TabController from '../components/TabController';
import LazyImage from '../components/LazyImage';
import { HamIcon } from '../components/Ham.jsx';
import {CategoryDescripton} from '../components/Tab.js';
import RumbleLight from '../assets/rumblelight.svg';
import RumbleDark from '../assets/rumble-dark.svg';
import '../Style/Games.css';
import { ThemeContext } from '../../ThemeContext';

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSlider, setShowSlider] = useState(false);
const { theme,  } = useContext(ThemeContext);
  const [categorydesc, setCategorydesc] = useState('');


  const handleToggleSlider = () => setShowSlider(prev => !prev);

  const categorySlugMap = {
    action: 'Action Games',
    puzzle: 'Puzzle Games',
    arcade: 'Arcade Games',
    casual: 'Casual',
    adventure: 'Adventure Games',
    sports: 'Sports & Racing',
    board: 'Board',
  };

  const { categoryName } = useParams();
  const formattedCategory = categorySlugMap[categoryName.toLowerCase()] || "";

  const Getcategorydesc = (categoryName) => {
    const item = CategoryDescripton.find((item) => item.name === categoryName);
    if (item) {
      setCategorydesc(item.description);
    } else {
      setCategorydesc('Description not found.');
    }
  };
  
  console.log(categorydesc)
  // Usage
  useEffect(() => {
    const formattedName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
    Getcategorydesc(formattedName);
  }, [categoryName]);
  
  

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setLoading(false);
      setData(response);
    };
    getData();
  }, []);
  const getIconTheme = (theme, lightIcon, darkIcon) => {

    return theme === 'dark' ? darkIcon : lightIcon;
  };

  const isImageFile = (path) => /\.(jpg|jpeg|png|gif|webp)$/i.test(path);
  const getRandomGames = (category) => {
    const filtered = data.filter(game =>
      game.category === category && isImageFile(game.imagePath)
    );
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled;
  };

  const games = getRandomGames(formattedCategory);
  const FirstFive = games.slice(0, 5);

  // Remove duplicate games by name
  const uniqueGamesMap = new Map();
  games.forEach(game => {
    if (!uniqueGamesMap.has(game.name)) {
      uniqueGamesMap.set(game.name, game);
    }
  });
  const getCategoryDisplayName = (categoryName) => {
    const formattedName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    return formattedName === 'Sports' ? 'Sports and Racing' : formattedName;
  };
  const uniqueGames = Array.from(uniqueGamesMap.values());

  // Paginate remaining unique games after first 5
  const remainingGames = uniqueGames.slice(5);
  
 
  const { t } = useTranslation();

  if (loading) {
    return <CircularColor />;
  }

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="normal-view">
          <Sidebar />
        </div>
        <div className="mobile-view">
          <div>
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

      <div className='home-content'>
        <div className="main-tab">
          <TabController />
          <div className='Category-desc'>
            <h2>
              {getCategoryDisplayName(categoryName)} Games
            </h2>
          </div>
          <div className='cat-desc'>
           {categorydesc}
          </div>

          {/* Featured section (first 5 games) */}
          <div className='category-1' style={{ marginBottom: '5px' }}>
            <div className='games-content'>
              <div className='game-banner' style={{ overflowX: 'scroll', flexWrap: 'nowrap' }}>
                {FirstFive.map((game, index) => (
                  <div className="image-container" key={index}>
                    <Link
                      to={`/games/game/${game.id}`}
                      state={{ game }}
                      className='game-item'
                    >
                      <LazyImage src={game.imagePath} alt={`Game${index + 1}`} className='big-image' />
                      <div className="hover-text">
                        <strong>{game.name}</strong><br />
                        <span>{game.description}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

   
          <div className='game-library'>
            <div className='library-content'>
              {remainingGames.map((game, index) => (
                <div className="image-container" key={`lib-${index}`}>
                  <Link
                    to={`/games/game/${game.id}`}
                    state={{ game }}
                    className='game-item'
                  >
                    <LazyImage src={game.imagePath} alt='img' className='small' />
                    <div className="hover-text">
                      <strong>{game.name}</strong><br />
                      <span>{game.description}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>



        </div>

       
      </div>
    </div>
  );
};

export default Category;
