import React from 'react';
import './styles.css';
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="App-header">
        <nav>
            <div>
                <div className='menu-links'>
                    <Link className='links' to="/">
                        <img src={logo} className="App-logo" alt="logo" /> 
                    </Link>
                    <Link className='links' to="/">Features</Link> 
                    <Link className='links' to="/">Company</Link>
                    <Link className='links' to="/">Careers</Link> 
                    <Link className='links' to="/">About</Link>          
                </div>
                <div className='menu-login'>
                    <Link className='links' to="/">Login</Link> 
                    <Link className='links' to="/">Register</Link>
                </div>
            </div>
        </nav>
      </header>
  )
}

export default NavBar