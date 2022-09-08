import React from 'react';
import '../styles/CNavbar.css';

const Navbar = ({ isNavExpanded, setIsNavExpanded, navBgColor, setNavBgColor, homeClick, projectsClick, skillsClick }) => {

    const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded)
    }
  
    const changeNavbarColor = () =>{
      if(window.scrollY >= 50){
        setNavBgColor(true);
      }

      else{
        setNavBgColor(false);
      }
    }
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <div className={navBgColor ? 'nav-container colorBg' : 'nav-container transpBg'}>
            <div className='navbar-home'>
               
            </div>
            <div className='toggle-button'>
                <a
                title='col-nav-btn'

                onClick={toggleIsNav}
                >
                    
                </a>
            </div>
            <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                <ul className={navBgColor ? 'nav-ul colorBg' : 'nav-ul transpBg'}>
                
                    <li><a onClick={homeClick}>Home</a></li>

                    <li><a onClick={projectsClick}>Projects</a></li>
                    <li><a onClick={skillsClick}>Skills</a></li>


                </ul>
            </div>
            <div className='nav-menu-fs'>
                <div className='nav-menu-fs-sub'>
                <a onClick={homeClick}>Home</a>

                    <a onClick={projectsClick}>Projects</a>
                    <a onClick={skillsClick}>Skills</a>
                </div>                
            </div>
        </div>
    )

}

export default Navbar;