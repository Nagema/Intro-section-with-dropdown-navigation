import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FeatureBoxOptions } from '../../components/FeatureBoxOptions/FeatureBoxOptions';
import { CompanyBoxOption } from '../../components/CompanyBoxOptions/CompanyBoxOption';
import iconArrowDown from '../../assets/images/icon-arrow-down.svg';
import iconArrowUp from '../../assets/images/icon-arrow-up.svg';

export const NavBarLinks = ({
    handleFeatureLink, 
    handleCompanyLink, 
    iconFeatureToggle, 
    iconCompanyToggle,
    handleMenuIcon,
    iconClose
}) => {

  return (
    <div className='navbar-links-wrapper'>
        <button className='toggle-button' onClick={handleMenuIcon}>
            <img src={ iconClose } alt=" close icon" />
        </button>
        <div className='all-links'>
            <div className='menu-links'>           
                <div className='main-links'>
                    <div className='link-arrow-wrapper'>
                        <Link className='links' to="/" onClick={handleFeatureLink}>
                            Features <img className='link-icon' src={iconFeatureToggle ? iconArrowUp : iconArrowDown}/>     
                        </Link> 
                        { iconFeatureToggle &&
                            <FeatureBoxOptions/>
                        }
                    </div>
                    <div className='link-arrow-wrapper'>
                        <Link className='links' to="/" onClick={handleCompanyLink}>
                            Company <img className='link-icon' src={iconCompanyToggle ? iconArrowUp : iconArrowDown}/>   
                        </Link>
                        { iconCompanyToggle &&
                            <CompanyBoxOption/>
                        }
                    </div>
                    <div className='secondary-links'>
                        <Link className='links' to="/">Careers</Link> 
                    </div>
                    <div className='secondary-links'>
                        <Link className='links' to="/">About</Link>          
                    </div>
                </div>
            </div>
            <div className='menu-login'>
                <div className='secondary-links'>
                    <Link className='links' to="/">Login</Link>
                </div>
                <div className='secondary-links'>
                    <button className='register-button'>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}
