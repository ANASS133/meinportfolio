import React, { useContext } from 'react';
import './discover.css'; // Make sure to import your updated CSS
import { LanguageContext } from './LanguageContext';
import translations from './translations';

const AboutMe = () => {
    const { language } = useContext(LanguageContext);
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'cv.pdf'; 
        link.click();
    };
    
    return (<>
    <div id="about">
        <div className="about-me-container">
            <h2 className="about-me-title">{translations.about.title[language]}</h2>
            
            <div className="about-me-content">
                <div className="about-me-image">
                    <img src="/me1.png" alt="Anass Sibbi" />
                </div>
                <div className="about-me-info">
                    <h1>Anass Sibbi</h1>
                    <p>
                        {translations.about.description1[language]}
                        {" "}
                        {translations.about.description2[language]}
                    </p>
                    <p>{translations.about.age[language]}</p>
                    <p>{translations.about.from[language]}</p>
                    <p>{translations.about.email[language]}</p>
                    <p id='phonenumber'>{translations.about.phone[language]}</p>
                    <button className="glow-on-hover" type="button" onClick={handleDownloadCV}>
                        {translations.about.download[language]}
                    </button>
                </div>
            </div>
        </div></div></>
    );
};

export default AboutMe;
