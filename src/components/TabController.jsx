import React, { useState } from 'react'
import { Categories } from './Tab';
import { useNavigate, useLocation } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';


const TabController = () => {
    const { theme } = useContext(ThemeContext);

    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const getIcon = (isActive, theme, lightIcon, darkIcon, lightActive, darkActive) => {
        if (isActive) {
            return theme === 'dark' ? darkActive : lightActive;
        }
        return theme === 'dark' ? darkIcon : lightIcon;
    };
    const { t } = useTranslation();
    return (
        <>
            <div className="tab"
                value={value}
                onChange={handleChange}
                aria-label="icon position tabs example"
            >
                <div className="tab-column">
                    {Categories.map((tab, index) => (
                        <div key={index} className="tab-item">

                            <div
                                className={location.pathname.includes(tab.path) ? 'tab-data-active' : 'tab-data'}

                                onClick={() => {
                                    navigate(tab.path);
                                }}
                            >
                                <LazyImage
                                    src={getIcon(
                                        location.pathname.includes(tab.path),
                                        theme,
                                        tab.tab,
                                        tab.actite_tab,
                                        tab.actite_tab,
                                        tab.actite_tab,
                                    )}
                                    alt={tab.name}
                                />

                                <span className="tab-text">{t(`categories.${tab.name}`)}</span>


                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default TabController
