import React from 'react';
import { Background } from 'react-parallax';
import '../styles/Projects.css';
import MapChat from "../MyProjects/MapChat";
import AdventureGame from "../MyProjects/AdventureGame";

import { Parallax } from 'react-parallax';


const Projects = ({}) => {

  return(
      <div className='projects-container'>
      <Parallax
          blur={0}
          bgImage={Background}
          bgImageAlt="background-img"
          strength={400}
      >
          <div className='projects-header-box'>
              <h1 className='projects-header'>My Projects</h1>
          </div>
      </Parallax>
          <div className='projects-content-box'>
              <div className='mapchat-app my-project'>
                  <MapChat />
              </div>                
              { <div className='game-app my-project'>
                  <AdventureGame />
              </div>
            }
              
          </div>
                </div>

    
  )

}

export default Projects;