import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HamIcon } from '../components/Ham.jsx';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import {
    Categories
} from '../components/Tab';
import TabController from '../components/TabController';
import Action from '../assets/action_tab.svg';
import Adventure from '../assets/Adventure_tab.svg';
import Arcade from '../assets/Arcade_Category.svg';
import Board from '../assets/board_tab.svg';
import Casual from '../assets/casual_tab.svg';
import Puzzle from '../assets/Puzzle_tab.svg';
import Sports from '../assets/sport_tab.svg';
import Action_cat from '../assets/Action_Category.svg';
import adv_active from '../assets/adv.svg';
import Sports_cat from '../assets/Sports_Category.svg';
import Arcade_cat from '../assets/Arcade_Cat.svg';
import board_active from '../assets/board-active.svg';
import casual_atab from '../assets/casual_activetab.svg';
import Puzzle_cat from '../assets/Puzzle_Category.svg';
import RumbleLight from '../assets/rumblelight.svg';
import RumbleDark from '../assets/rumble-dark.svg';
import '../Style/Games.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from '../../APi';

import MobileSlider from '../components/MobileSide';
import { useTranslation } from 'react-i18next';
import CircularColor from '../components/Loader';
import LazyImage from '../components/LazyImage';
import CustomCarousel from '../components/CustomCorosoul.jsx';


const AllGames = () => {
    const { theme } = useContext(ThemeContext);
    const [showSlider, setShowSlider] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();

    const handleToggleSlider = () => {
        setShowSlider(prev => !prev);
    };
    const getIcon = ( theme, lightIcon, darkIcon) => {
       
        return theme === 'dark' ? darkIcon : lightIcon;
    };
    useEffect(() => {
        const getData = async () => {
            const response = await fetchData();
            setData(response);
            setLoading(false);
        };
        getData();
    }, []);
    
    const isImageFile = (path) => /\.(jpg|jpeg|png|gif|webp)$/i.test(path);

    const getRandomGamesAny = (count) => {
        const filtered = data.filter(game => isImageFile(game.imagePath));
        const shuffled = [...filtered].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    const getRandomGames = (category, count) => {
        const filtered = data.filter(game =>
            game.category === category && isImageFile(game.imagePath)
        );
        const shuffled = [...filtered].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    const ActionGames = getRandomGames('Action Games', 5)
    const PuzzleGames = getRandomGames('Puzzle Games', 5)
    const ArcadeGames = getRandomGames('Arcade Games', 5)
    const CasualGames = getRandomGames('Casual', 5)
    const AdventureGames = getRandomGames('Adventure Games', 5);
    const SportGames = getRandomGames('Sports & Racing', 5);
    const BoardGames = getRandomGames('Board', 5);


    const getIconTheme = (theme, lightIcon, darkIcon) => {

        return theme === 'dark' ? darkIcon : lightIcon;
      };
    if (loading) {
        return <CircularColor />;
    }

    const carouselGames = getRandomGamesAny(3);




    return (
        <>
            <div className="home-container">
                <div className="sidebar">
                    <div className="normal-view">
                        <Sidebar />
                    </div>
                    <div className="mobile-view">
                        <div >
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

                        <div className="carousel-container">

                            <CustomCarousel games={carouselGames} />

                        </div>

                        {/* Action games */}
                        <div className='category-1'>
                            <div className='cat-head bigimg'>
                                <span>
                                <LazyImage
                                    src={getIcon(
                                        theme,
                                       Action,
                                        Action_cat
                                    )} style={
                                        {
                                            height:'25px',
                                            width:'25px',
                                        }
                                    }
                                    alt="icon"
                                />
{t('categories.Action')} {t('games')}
                                </span>
                                <span className='action'>
                                    <Link to="/games/action">
                                        {t('viewAll')} {'>'} </Link>
                                </span>

                            </div>

                            <div className='games-content'>
                                <div className='game-banner no-scroll'>
                                    {ActionGames.map((game, index) => (
                                        <Link
                                            to={`/games/game/${game.id}`}
                                            state={{ game }}
                                            className="game-item"
                                            key={`${game.id}-${index}`}
                                        >

                                            <LazyImage src={game.imagePath} alt={game.name} />
                                            <div className="game-title">{game.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>


                        { /* Adventure game */}
                        <div className='category-1'>
                            <div className='cat-head bigimg'>
                                <span>
                                <LazyImage
                                    src={getIcon(
                                        theme,
                                        Adventure,
                                        adv_active
                                    )} style={
                                        {
                                            height:'25px',
                                            width:'25px',
                                        }
                                    }
                                    alt="icon"
                                />
                                    {t('categories.Adventure')} {t('games')}
                                </span>
                                <span className='action'>
                                    <Link to="/games/adventure">
                                        {t('viewAll')} {'>'} </Link>
                                </span>
                            </div>

                            <div className='games-content'>
                                <div className='game-banner'>
                                    {AdventureGames.map((game, index) => (
                                        <Link
                                            to={`/games/game/${game.id}`}
                                            state={{ game }}
                                            className="game-item"
                                            key={`${game.id}-${index}`}
                                        >

                                            <LazyImage src={game.imagePath} alt={game.name} />
                                            <div className="game-title">{game.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Archade game */}
                        <div className='category-1'>
                            <div className='cat-head bigimg'>
                                <span>
                                <LazyImage
                                    src={getIcon(
                                        theme,
                                        Arcade,
                                        Arcade_cat
                                    )} style={
                                        {
                                            height:'25px',
                                            width:'25px',
                                        }
                                    }
                                    alt="icon"
                                />
                                   {t('categories.Arcade')} {t('games')}
                                </span>
                                <span className='action'>
                                    <Link to="/games/arcade">
                                        {t('viewAll')} {'>'} </Link>
                                </span>
                            </div>

                            <div className='games-content'>
                                <div className='game-banner'>
                                    {ArcadeGames.map((game, index) => (
                                        <Link
                                            to={`/games/game/${game.id}`}
                                            state={{ game }}
                                            className="game-item"
                                            key={`${game.id}-${index}`}
                                        >

                                            <LazyImage src={game.imagePath} alt={game.name} />
                                            <div className="game-title">{game.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        { /* Board game */}
                        <div className='category-1'>
                            <div className='cat-head bigimg'>
                                <span>
                                <LazyImage
                                    src={getIcon(
                                        theme,
                                        Board,
                                        board_active
                                    )} style={
                                        {
                                            height:'25px',
                                            width:'25px',
                                        }
                                    }
                                    alt="icon"
                                />
                                    {t('categories.Board')} {t('games')}
                                </span>
                                <span className='action'>
                                    <Link to="/games/board">
                                        {t('viewAll')} {'>'} </Link>
                                </span>
                            </div>

                            <div className='games-content'>
                                <div className='game-banner'>
                                    {BoardGames.map((game, index) => (
                                        <Link
                                            to={`/games/game/${game.id}`}
                                            state={{ game }}
                                            className="game-item"
                                            key={`${game.id}-${index}`}
                                        >

                                            <LazyImage src={game.imagePath} alt={game.name} />
                                            <div className="game-title">{game.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        { /* Casual game */}
                        <div className='category-1'>
                            <div className='cat-head bigimg'>
                                <span>
                                <LazyImage
                                    src={getIcon(
                                        theme,
                                        Casual,
                                        casual_atab
                                    )} style={
                                        {
                                            height:'25px',
                                            width:'25px',
                                        }
                                    }
                                    alt="icon"
                                />
                                     {t('categories.Casual')} {t('games')}
                                </span>
                                <span className='action'>
                                    <Link to="/games/casual">
                                        {t('viewAll')} {'>'} </Link>
                                </span>
                            </div>

                            <div className='games-content'>
                                <div className='game-banner'>
                                    {CasualGames.map((game, index) => (
                                        <Link
                                            to={`/games/game/${game.id}`}
                                            state={{ game }}
                                            className="game-item"
                                            key={`${game.id}-${index}`}
                                        >

                                            <LazyImage src={game.imagePath} alt={game.name} />
                                            <div className="game-title">{game.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        { /* Puzzle game */}
                        <div className='category-1'>
                            <div className='cat-head bigimg'>
                                <span>
                                <LazyImage
                                    src={getIcon(
                                        theme,
                                        Puzzle,
                                        Puzzle_cat
                                    )} style={
                                        {
                                            height:'25px',
                                            width:'25px',
                                        }
                                    }
                                    alt="icon"
                                />
                                   {t('categories.Puzzle')} {t('games')}
                                </span>
                                <span className='action'>
                                    <Link to="/games/puzzle">
                                        {t('viewAll')} {'>'} </Link>
                                </span>
                            </div>

                            <div className='games-content'>
                                <div className='game-banner'>
                                    {PuzzleGames.map((game, index) => (
                                        <Link
                                            to={`/games/game/${game.id}`}
                                            state={{ game }}
                                            className="game-item"
                                            key={`${game.id}-${index}`}
                                        >

                                            <LazyImage src={game.imagePath} alt={game.name} />
                                            <div className="game-title">{game.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        { /*  Sports game */}
                        <div className='category-1'>
                            <div className='cat-head bigimg'>
                                <span>
                                <LazyImage
                                    src={getIcon(
                                        theme,
                                        Sports,
                                        Sports_cat
                                    )} style={
                                        {
                                            height:'25px',
                                            width:'25px',
                                        }
                                    }
                                    alt="icon"
                                />
                                     {t('categories.Sports')} {t('games')}
                                </span>
                                <span className='action'>
                                    <Link to="/games/sports">
                                        {t('viewAll')} {'>'} </Link>
                                </span>
                            </div>

                            <div className='games-content'>
                                <div className='game-banner'>
                                    {SportGames.map((game, index) => (
                                        <Link
                                            to={`/games/game/${game.id}`}
                                            state={{ game }}
                                            className="game-item"
                                            key={`${game.id}-${index}`}
                                        >

                                            <LazyImage src={game.imagePath} alt={game.name} />
                                            <div className="game-title">{game.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                 
                </div>
            </div>





        </>
    )
}

export default AllGames
