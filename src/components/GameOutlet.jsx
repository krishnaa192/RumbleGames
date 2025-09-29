// GameLayout.jsx
import React from 'react';
import GameTabs from './GameTabs';
import { Outlet } from 'react-router-dom';

const GameLayout = () => {
  return (
    <>
      <GameTabs />
      <Outlet /> {/* Will render child pages like /allgames or /games/Action */}
    </>
  );
};

export default GameLayout;
