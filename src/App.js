import React, { useState, useRef } from 'react';
import CNavBar from './components/CNavBar';
import Projects from './components/Projects';

import Banner from './components/Banner';
import Skills from './components/Skills';



import backgroundImg from './assets/img/IMG_4973.jpg';
import { Parallax } from 'react-parallax';
import './App.css';


const App = () => {


  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);

  const homeRef = useRef();
  const projectsRef = useRef(); 
  const skillsRef = useRef(); 



  const homeClick = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }



  const projectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }

  const skillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }


  

    
  return (
    <div className='main-container' ref={homeRef}>
      <CNavBar 
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
        navBgColor={navBgColor}
        setNavBgColor={setNavBgColor}
        homeClick={homeClick}
        projectsClick={projectsClick}
        skillsClick= {skillsClick}
        
      />
      <Parallax
        blur={0}
        bgImage={backgroundImg}
        bgImageAlt='background-img'
        strength={300}
      >
      
        <div className='intro-box'>
          <Banner />
        </div>
      </Parallax>
      {/* Intro end */}

      {/* main body begin */}
      <div className='main-body-box'>


        <div className='projects-box' ref={projectsRef}>
            <Projects />
        </div>

        
        {/* Projects end */}

        <div className='skills-box' ref={skillsRef}>
            <Skills />
        </div>
       
       

       
      </div>
    </div>
  );
}

export default App;