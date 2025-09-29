import React from 'react'
import TandC from '../assets/tandc.png'
import {  HamIcon } from '../components/Ham.jsx';
import Sidebar from '../components/Sidebar';
import '../Style/Games.css'
import '../Style/Account.css'
import { useTranslation } from 'react-i18next';
import LazyImage from '../components/LazyImage';
import MobileSlider from '../components/MobileSide';



const TermsAndCondition = () => {
        const [showSlider, setShowSlider] = React.useState(false);
    const handleToggleSlider = () => {
        setShowSlider(prev => !prev);
    };

    const { t } = useTranslation();
    const terms = t('termsText', { returnObjects: true });
    return (
        <>

            <div className="home-container">
            <div className="sidebar">
                    <div className="normal-view">
                        <Sidebar />
                    </div>
                    <div className="mobile-view">
                        <div >
                            <h1>Rumble</h1>

                           
                        </div>
                       <HamIcon className="hamburger-icon" onClick={handleToggleSlider} />
                    </div>
                    {showSlider && <MobileSlider />}
                </div>
                <div className='home-content'>
                    <LazyImage src={TandC} alt="Terms Banner"  className='tandc-image'  />

                    <div className='tandc-content'>
                        <div className='heading'>
                        {t('terms')}
                        </div>
                        <ul>
                        {terms.map((condition, index) => (
    <li key={index}>{condition}</li>
  ))}
                        </ul>

                    </div>
                </div>

            </div>
            <hr />
            <div className='footer'>
                <div className='footer-left'>{t('copyright')}</div>
                <div className='footer-right'>
                    <p>
                        <a href='/account/termsandcondition'>{t('terms')} </a>
                    </p>
                    <p>
                        <a href='/account/faq'> {t('faq')} </a>
                    </p>
                    <p>
                        <a href='#'> {t('privacy')}</a>
                    </p>
                </div>
            </div>

        </>
    )
}

export default TermsAndCondition
