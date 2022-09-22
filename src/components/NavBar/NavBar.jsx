import React, { useState } from 'react';
import './styles.css';
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import iconArrowDown from '../../assets/images/icon-arrow-down.svg';
import iconArrowUp from '../../assets/images/icon-arrow-up.svg';
import iconTodo from '../../assets/images/icon-todo.svg';
import iconCalendar from '../../assets/images/icon-calendar.svg';
import iconReminders from '../../assets/images/icon-reminders.svg';
import iconPlanning from '../../assets/images/icon-planning.svg';

function NavBar() {

    const [iconFeatureToggle, setIconFeatureToggle] = useState(false)
    const [iconCompanyToggle, setIconCompanyToggle] = useState(false)

    const handleFeatureLink = () => {
        setIconFeatureToggle(!iconFeatureToggle)
    }

    const handleCompanyLink = () => {
        setIconCompanyToggle(!iconCompanyToggle)
    }

  return (
    <header className="App-header">
        <Link className='links' to="/">
            <img src={logo} className="App-logo" alt="logo" /> 
        </Link>
        <nav className='links-wrapper'>   
            <div className='menu-links'>       
                <div className='main-links'>
                    <div className='link-arrow-wrapper'>
                        <Link className='links' to="/" onClick={handleFeatureLink}>
                            Features <img className='link-icon' src={iconFeatureToggle ? iconArrowUp : iconArrowDown}/>     
                        </Link> 
                        { iconFeatureToggle &&
                                <div className='feature-options'>
                                    <ul className='list-option'>
                                        <li>
                                            <img className='list-icon' src={iconTodo} alt="icon todo" /> 
                                            <span>Todo List</span> 
                                        </li>
                                        <li>
                                            <img className='list-icon' src={iconCalendar} alt="icon todo" /> 
                                            <span>Calendar</span>
                                        </li>
                                        <li>
                                            <img className='list-icon' src={iconReminders} alt="icon todo" /> 
                                            <span>Reminders</span>
                                        </li>
                                        <li>
                                            <img className='list-icon' src={iconPlanning} alt="icon todo" /> 
                                            <span>Planning</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                    </div>
                    <div className='link-arrow-wrapper'>
                        <Link className='links' to="/" onClick={handleCompanyLink}>
                            Company <img className='link-icon' src={iconCompanyToggle ? iconArrowUp : iconArrowDown}/>   
                        </Link>
                        { iconCompanyToggle &&
                            <div className='company-options'>
                                <ul className='list-option'>
                                    <li>History</li>
                                    <li>Our Team</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div>
                        <Link className='links' to="/">Careers</Link> 
                    </div>
                    <div>
                        <Link className='links' to="/">About</Link>          
                    </div>
                </div>
            </div>
            <div className='menu-login'>
                <div>
                    <Link className='links' to="/">Login</Link>
                </div>
                <div>
                    <button className='register-button'>Register</button>
                </div>
            </div>   
        </nav>
      </header>
  )
}

export default NavBar