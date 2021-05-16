import React from 'react';
import logo from './../assets/faceless.png';
import './../App.css';
import mistLogo  from './../assets/MISTlogoLight.png';
import incognitoLight from './../assets/incognitoLogoLight.png';

const LandingPage = () => {
    return (
        <div>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{  height: '100vh', width: '100vw' }}>
                <div className='text-center'>
                    <img src={logo} className='h-md-250 h-200' alt="Faceless Logo"/>
                </div>
                <div className="text-center font-italic font-size-24 font-size-md-18 text-light">
                    <p>people with many faces</p>
                </div>
                <div className="mt-20 d-flex flex-md-row flex-column text-center font-weight-bolder font-size-24 text-light pt-20">
                    <a href="/signUp" className="btn btn-lg mx-5 my-10 w-150 h-auto animate-white" style={{ borderRadius:'2.5rem' }} role="button">SIGN UP</a>
                    <a href="/signIn" className="btn btn-lg mx-5 my-10 w-150 h-auto animate-white" style={{ borderRadius:'2.5rem' }} role="button">SIGN IN</a>
                </div>
                <div className='d-flex flex-column flex-md-row h-150 w-full justify-content-between align-items-center position-fixed logo-bar' style={{ bottom: 0 }}>
                    <img src={incognitoLight} className='h-50'/>
                    <img src={mistLogo} className='h-50 d-none d-md-block'/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;