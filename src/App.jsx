
import Home from './Page/Home'
import AllGames from './Page/AllGames'
import Category from './Page/Categories'
import { Route,Routes,Router } from 'react-router-dom'
import GamePage from './Page/GamePage'
import Account from './Page/Account'
import TandC from './Page/TandC'
import FAQ from './Page/FAQ'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();  // 'rtl' for Urdu, 'ltr' otherwise
  }, [i18n.language]);

  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allgames" element={<AllGames/>} />
        <Route path="/games/game/:id" element={<GamePage />} />

        <Route path="/games/:categoryName" element={<Category />} />
        <Route path="/account" element={ <Account/>}  />
        <Route path='/account/termsandcondition' element={
          <TandC />
          } />
           <Route path='/account/faq' element={
          <FAQ />
          } />
          


      </Routes>
  
    </>
  )
}

export default App
