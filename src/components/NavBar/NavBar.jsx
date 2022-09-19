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
        <nav className='links-wrapper'>   
            <div className='menu-links'>
                <Link className='links' to="/">
                    <img src={logo} className="App-logo" alt="logo" /> 
                </Link>
                <div className='main-links'>
                    <Link className='links' to="/" onClick={handleFeatureLink}>
                        Features <img className='link-icon' src={iconFeatureToggle ? iconArrowUp : iconArrowDown}/>
                    </Link> 
                    <Link className='links' to="/" onClick={handleCompanyLink}>
                        Company <img className='link-icon' src={iconCompanyToggle ? iconArrowUp : iconArrowDown}/>
                    </Link>
                    <Link className='links' to="/">Careers</Link> 
                    <Link className='links' to="/">About</Link>          
                </div>
            </div>
            <div className='menu-login'>
                <Link className='links' to="/">Login</Link>
                <button className='register-button'>Register</button>
            </div>   
        </nav>
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
        { iconCompanyToggle &&
            <div className='company-options'>
                <ul className='list-option'>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>
            </div>
        }
      </header>
  )
}

export default NavBar