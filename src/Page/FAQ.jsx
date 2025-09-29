import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaqImg from '../assets/FAQ.png'; // Replace with your own image path
import {  HamIcon } from '../components/Ham.jsx';
import Sidebar from '../components/Sidebar';
import { useTranslation } from 'react-i18next';
import LazyImage from '../components/LazyImage';
import MobileSlider from '../components/MobileSide';
import '../Style/Home.css';
import '../Style/Account.css';




const FaqPage = () => {
    const [showSlider, setShowSlider] = useState(false);
    const handleToggleSlider = () => {
        setShowSlider(prev => !prev);
    };

    const { t } = useTranslation();
    const faqs = t('faqs', { returnObjects: true });


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
                    <Container maxWidth="md" style={{ marginTop: '50px', marginBottom: '50px' }}>
                        <div style={{ textAlign: 'center' ,marginBottom:'20px'}}>
                            <LazyImage src={FaqImg} alt="FAQ Illustration" style={{ width: '60%', marginBottom: '30px' }} />
                        </div>
                        {faqs.map((faq, index) => (
                            <Accordion key={index} style={{ marginBottom: '10px', borderRadius: '10px' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight={600}>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Container>
                    <hr />


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
    );
};

export default FaqPage;
