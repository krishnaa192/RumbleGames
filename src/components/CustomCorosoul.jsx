import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../Style/corosoul.css';

const CustomCarousel = ({ games }) => {
  const [current, setCurrent] = useState(0);
  const navigate=useNavigate()
  const [isRTL, setIsRTL] = useState(document.documentElement.dir === 'rtl');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.min(3, games.length));
    }, 3000);

    const observer = new MutationObserver(() => {
      setIsRTL(document.documentElement.dir === 'rtl');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir'],
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [games]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const visibleGames = games.slice(0, 3);
console.log(visibleGames,"vb")
  return (
    <div className={`custom-carousel-wrapper ${isRTL ? 'rtl' : ''}`}>
      <div className="custom-carousel-container">
        {visibleGames.map((game, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${game.imagePath})` }}  onClick={() => navigate(`/games/game/${game.id}`, { state: { game } })}
          ></div>
        ))}
      </div>

      {/* Dots placed OUTSIDE carousel-container */}
      <div className="carousel-dots-wrapper">
        <div className="carousel-dots">
          {visibleGames.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
