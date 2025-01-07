import React from 'react';
import './discover.css'; // Make sure to import your updated CSS

const AboutMe = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'cv.pdf'; 
        link.click();
    };
    
    return (<>
    <div id="about">
        <div className="about-me-container">
            <h2 className="about-me-title">ÜBER MICH</h2>
            
            <div className="about-me-content">
                <div className="about-me-image">
                    <img src="/me1.png" alt="Anass Sibbi" />
                </div>
                <div className="about-me-info">
                    <h1>Anass Sibbi</h1>
                    <p>
                        Ich bin ein 20-jähriger angehender Fachmann aus Settat, Marokko. 
                        Mit Leidenschaft für Technologie und digitale Entwicklung bin ich bestrebt, meine Fähigkeiten zu erweitern und zu innovativen Projekten beizutragen.
                    </p> 
                    <p>Alter: 20</p>
                    <p>Aus: Settat, Marokko</p>
                    <p>E-Mail: sibbianass@gmail.com</p>
                    <p id='phonenumber'>Telefon: +212 699771759</p>
                    <button className="glow-on-hover" type="button" onClick={handleDownloadCV}>
                        CV herunterladen
                    </button>
                </div>
            </div>
        </div></div></>
    );
};

export default AboutMe;
