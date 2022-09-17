import React from 'react';
import './styles.css';
import heroImageDesktop from '../assets/images/image-hero-desktop.png';
import heroImageMobile from '../assets/images/image-hero-mobile.png';
function MainPage() {
  return (
    <>  
        <div className='main-page-container'>
            <div className='main-page-text'>
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. <br /><span>Streamline processes. create team rituals, and watch productivity soar.</span></p>
                
                <button>
                    Learn more
                </button>
            </div>
            <img className='main-page-image' src={heroImageDesktop}/>
        </div>
    </>
  )
}

export default MainPage