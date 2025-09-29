import React, { useContext } from 'react'
import UserBanner from '../assets/img2.png'
import { HamIcon } from '../components/Ham.jsx';
import Sidebar from '../components/Sidebar';
import '../Style/Games.css'
import '../Style/Account.css'
import MobileSlider from '../components/MobileSide';
import { useTranslation } from 'react-i18next';
import LazyImage from '../components/LazyImage';
import RumbleLight from '../assets/rumblelight.svg';
import RumbleDark from '../assets/rumble-dark.svg';
import { ThemeContext } from '../../ThemeContext';

const Account = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [showSlider, setShowSlider] = React.useState(false);
  const handleToggleSlider = () => {
    setShowSlider(prev => !prev);
  };
  const getIconTheme = (theme, lightIcon, darkIcon) => {

    return theme === 'dark' ? darkIcon : lightIcon;
  };
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
         <div className='account-heading'>
          <h1 > {t('MyAccount')}</h1>
        
          <div className='msisdn-content'>
            <p className='user-head'>{t('mobile_number_label')}</p>
            <input maxLength={14} type="text" className='user-input' placeholder='Enter your mobile number' />
            <hr />
            <div className='status'>
              <p> <span className='active-status'>
                {t('Unsubsribe')}
              </span>  </p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/*
              <div className='footer'>
<div className='footer-right'>
  <p>
    <a href='/account/termsandcondition'>{t('terms')}</a>
  </p>
  <p>
    <a href='/account/faq'>{t('faq')}</a>
  </p>
  <p>
    <a href='#'>{t('privacy')}</a>
  </p>
</div>
                
            </div>
*/}



    </>
  )
}

export default Account
