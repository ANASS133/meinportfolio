import React from 'react';
// import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Updated imports
import Header from './header';
import "./App.css"
import Bot from './bot';
import "./first.css"
import Resume from './resume';
import First from './first';
import Button from './discover';
import Skills from './skills';
import Projects from './projects'
import ContactForm from './contactForm'


export default function App() {
  return (<>
  <Bot/>
       <Header />
      <First/>
      <Button/>
    <Skills/>
        <Resume/>
    <div className="lesprojets">
      <Projects/>  </div>    <br />
       <ContactForm/>
      </>
  );
}