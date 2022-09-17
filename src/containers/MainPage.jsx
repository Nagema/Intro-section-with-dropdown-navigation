import React from 'react';
import './styles.css';
import heroImageDesktop from '../assets/images/image-hero-desktop.png';
import heroImageMobile from '../assets/images/image-hero-mobile.png';
import clientDatabiz from '../assets/images/client-databiz.svg';
import clientAudiophile from '../assets/images/client-audiophile.svg';
import clientMeet from '../assets/images/client-meet.svg';
import clientMarker from '../assets/images/client-maker.svg';

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
                <div>
                    <div className='client-image-wrapper'>
                        <img className='client-image' src={clientDatabiz}/>
                        <img className='client-image' src={clientAudiophile}/>
                        <img className='client-image' src={clientMeet}/>
                        <img className='client-image' src={clientMarker}/>
                    </div>
                </div>
            </div>
            <img className='main-page-image' src={heroImageDesktop}/>
        </div>
    </>
  )
}

export default MainPage