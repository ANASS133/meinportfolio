import React, { useRef, useState, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

emailjs.init("7Xka7caRMAvHLj8i_");

const ContactForm = () => {
  const { language } = useContext(LanguageContext);
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    // Check if form is valid
    if (form.current.checkValidity()) {
      setIsActive(true);
      sendEmail(e);
    } else {
      setStatus(translations.contactForm.statusInvalid[language]);
      form.current.reportValidity(); // Highlight invalid fields
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(translations.contactForm.statusSending[language]);

    // Send email using EmailJS
    emailjs
      .sendForm('service_5tlk7ro', 'template_f4nhgo4', form.current)
      .then(
        () => {
          setStatus(translations.contactForm.statusSuccess[language]);
          form.current.reset(); // Reset the form
          setIsActive(false); // Reset button state
        },
        (error) => {
          setStatus(translations.contactForm.statusFail[language]);
          console.log('FAILED...', error);
        }
      );
  };

  // Handle window resize and update text content
  useEffect(() => {
    const element = document.querySelector('.change');
    
    const updateTextContent = () => {
      if (window.innerWidth < 448) {
        element.textContent = translations.menu.contact[language];
      } else {
        element.textContent = translations.contactForm.title[language];
      }
    };

    // Run initially and on window resize
    updateTextContent();
    window.addEventListener('resize', updateTextContent);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updateTextContent);
    };
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className='form'>
      <div id='form'>
        <center>
          <h2 className='change'>{translations.contactForm.title[language]}</h2>
          <form id="template_f4nhgo4" ref={form}>
            <p>{status}</p>
            <input type="hidden" name="contact_number" value="697483" />

            <label>{translations.contactForm.name[language]}</label>
            <input type="text" name="user_name" required />

            <label>{translations.contactForm.email[language]}</label>
            <input type="email" name="user_email" required />

            <label>{translations.contactForm.message[language]}</label>
            <textarea name="message" required></textarea>

            <div className="container-send">
              <button 
                id="btn" 
                className={isActive ? "active" : ""} 
                onClick={handleClick}
              >
                <p id="btnText">{isActive ? translations.contactForm.thankYou[language] : translations.contactForm.send[language]}</p>
                <div className="check-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </center>
        <br /><br />
      </div>
    </div>
  );
};

export default ContactForm;
