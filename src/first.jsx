import React, { useEffect, useRef, useState } from 'react';

export default function First() {
  const textRef = useRef(null);
  const [isActive, setIsActive] = useState(true); // State to track visibility

  useEffect(() => {
    const textLoad = () => {
      const texts = [
        "", "", "", "", "", "", "A", "An", "Ana", "Anas", "Anass", "Anass ", "Anass S", "Anass Si", "Anass Sib", "Anass Sibbi",
        "Anass Sibbi", "Anass Sibbi", "Anass Sibbi", "Anass Sibbi", "Anass Sibbi",
        "Anass Sibb", "Anass Sib", "Anass Si", "Anass S", "Anass", "Ana", "An", "A", "",
        "W", "We", "Web", "Web F", "Web Fu", "Web Ful", "Web Full", "Web Full S", "Web Full St", "Web Full Stack",
        "Web Full Stack D", "Web Full Stack De", "Web Full Stack Dev", "Web Full Stack Deve", "Web Full Stack Devel",
        "Web Full Stack Develo", "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer",
        "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer", "Web Full Stack Developer",
        "Web Full Stack Developer", "Web Full Stack Develo", "Web Full Stack Devel", "Web Full Stack Deve", "Web Full Stack Dev",
        "Web Full Stack D", "Web Full Stack", "Web Full Sta", "Web Full St", "Web Full S", "Web Full",
        "Web Ful", "Web Fu", "Web F", "Web", "We", "W", ""
      ];

      const intervalTime = 180; // Zeit zwischen Aktualisierungen (ms)
      let index = 0;

      const updateText = () => {
        if (textRef.current && isActive) {
          textRef.current.textContent = texts[index];
        }
        index++;
        if (index < texts.length && isActive) {
          setTimeout(updateText, intervalTime);
        }
      };

      updateText();
    };

    // Start animation
    textLoad();

    const intervalId = setInterval(() => {
      if (isActive) {
        textLoad();
      }
    }, 13500);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsActive(entry.isIntersecting); // Start/stop animation based on visibility
    }, { threshold: 0.1 }); // 10% of the component must be visible to start

    observer.observe(document.querySelector('.firstp'));

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsActive(false); // Stop animation when tab is not visible
      } else {
        setIsActive(true); // Resume animation when tab becomes visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId); // Clear interval on unmount
      observer.disconnect(); // Disconnect the observer on unmount
      document.removeEventListener('visibilitychange', handleVisibilityChange); // Clean up event listener
    };
  }, [isActive]);

  return (
    <>
      <div className="con">
        <div className="firstp">
          <span className='firstpart'>Hallo, ich bin </span><br />
          <span className='secondpart' ref={textRef}></span>
        </div>

        {/* Animierter Button */}
        <div className="buttons">
            <a href="#form">
          <button className="blob-btn">
            Kontaktieren Sie mich
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button></a>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
