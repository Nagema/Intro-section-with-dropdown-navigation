import React, { useState } from 'react';
import './styles.css';
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import iconMenu from '../../assets/images/icon-menu.svg';
import iconClose from '../../assets/images/icon-close-menu.svg';
import { useMediaQuery } from 'react-responsive';
import { NavBarLinks } from '../../components/NavBarLinks/NavBarLinks';

function NavBar() {

    const isWide = useMediaQuery({
        query: '(min-width: 1023px)'
      })
    const [iconFeatureToggle, setIconFeatureToggle] = useState(false);
    const [iconCompanyToggle, setIconCompanyToggle] = useState(false);
    const [menuIcon, setMenuIconToggle] = useState(true);

    const handleFeatureLink = () => {
        setIconFeatureToggle(!iconFeatureToggle)
    }

    const handleCompanyLink = () => {
        setIconCompanyToggle(!iconCompanyToggle)
    }

    const handleMenuIcon = () => {
        setMenuIconToggle(!menuIcon)
    }

  return (
    <header className="App-header">
        <Link className='links' to="/">
            <img src={logo} className="App-logo" alt="logo" /> 
        </Link>
        <nav className='links-wrapper'>  
        { menuIcon ? 
            <button className='toggle-button' onClick={handleMenuIcon}>
                <img src={ iconMenu } alt="menu icon" />
            </button>
            :  <NavBarLinks 
                    handleMenuIcon={handleMenuIcon}
                    handleFeatureLink={handleFeatureLink} 
                    handleCompanyLink={handleCompanyLink}
                    iconClose={iconClose}
                    iconFeatureToggle={iconFeatureToggle}
                    iconCompanyToggle={iconCompanyToggle}
                />
        } 
        {isWide &&
            <NavBarLinks 
                handleFeatureLink={handleFeatureLink} 
                handleCompanyLink={handleCompanyLink}
                iconFeatureToggle={iconFeatureToggle}
                iconCompanyToggle={iconCompanyToggle}
            />
        }
        </nav>
      </header>
  )
}

export default NavBar