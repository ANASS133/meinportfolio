import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';

emailjs.init("");

const ContactForm = () => {
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
      setStatus('Bitte füllen Sie alle Felder korrekt aus.');
      form.current.reportValidity(); // Highlight invalid fields
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Wird gesendet...');

    // Send email using EmailJS
    emailjs
      .sendForm('service_5tlk7ro', 'template_f4nhgo4', form.current)
      .then(
        () => {
          setStatus('Nachricht erfolgreich gesendet!');
          form.current.reset(); // Reset the form
          setIsActive(false); // Reset button state
        },
        (error) => {
          setStatus('Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.');
          console.log('FAILED...', error);
        }
      );
  };

  // Handle window resize and update text content
  useEffect(() => {
    const element = document.querySelector('.change');
    
    const updateTextContent = () => {
      if (window.innerWidth < 448) {
        element.textContent = 'Kontakt';
      } else {
        element.textContent = 'SCHICK MIR SCHNELL EINE E-MAIL';
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
          <h2 className='change'>SCHICK MIR SCHNELL EINE E-MAIL</h2>
          <form id="template_f4nhgo4" ref={form}>
            <p>{status}</p>
            <input type="hidden" name="contact_number" value="697483" />

            <label>Name</label>
            <input type="text" name="user_name" required />

            <label>E-Mail</label>
            <input type="email" name="user_email" required />

            <label>Nachricht</label>
            <textarea name="message" required></textarea>

            <div className="container-send">
              <button 
                id="btn" 
                className={isActive ? "active" : ""} 
                onClick={handleClick}
              >
                <p id="btnText">{isActive ? "Danke" : "Absenden"}</p>
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
