import skillsPic from '../assets/img/IMG_4974.jpg';
import { Parallax } from 'react-parallax';

import '../styles/Skills.css';

/*create parallax image for the skills section*/
export const Skills = () => {

    return(
        <div className='skills-container'>
            <Parallax
                blur={0} bgImage={skillsPic}
                bgImageAlt="skills-pic"
                strength={400}
            >
                <div className='skills-header-box'>
                    <h1 className='skills-header'>Technical Skills</h1>
                </div>
            </Parallax>
          

            {/* skills section   skills-content-box  */}

           

            <div className='skills-content-box'>
                <div className='languages skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Languages</h3></li>
                        <li className='skills-item'><p>Java</p></li>
                        <li className='skills-item'><p>Javascript</p></li>
                        <li className='skills-item'><p>Python</p></li>
                        <li className='skills-item'><p>SQL</p></li>

                    </ul>
                </div>
                <div className='framework skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Frameworks & Libraries</h3></li>
                        <li className='skills-item'><p>Android</p></li>
                        <li className='skills-item'><p>Spring</p></li>

                        <li className='skills-item'><p>React</p></li>
                        <li className='skills-item'><p>Node.js</p></li>
                    </ul>
                </div>                
                <div className='tools skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Tools</h3></li>
                        <li className='skills-item'><p>Git</p></li>
                        <li className='skills-item'><p>Gradle</p></li>
                        <li className='skills-item'><p>JUnit</p></li>

                        <li className='skills-item'><p>Azure DevOps</p></li>
                    </ul>
                </div>
               
            </div>
        </div>
    )
}

export default Skills;