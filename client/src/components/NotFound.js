
import React from 'react';
import mistLogo  from './../assets/MISTlogoLight.png';
import notFound  from './../assets/FacelessError.png';
import incognitoLight from './../assets/incognitoLogoLight.png';

const NotFound = () => {
    return (
        <div>
            <div className='d-flex flex-column position-fixed align-items-center justify-content-center' style={{  height: '100vh', width: '100vw' }}>
                <div className='text-center'>
                    <img src={notFound} className='h-md-300 h-200' alt="Faceless Logo"/>
                </div>
                <div className='d-flex flex-column flex-md-row h-150 w-full justify-content-between align-items-center position-fixed logo-bar' style={{ bottom: 0 }}>
                    <img src={mistLogo} alt='MIST Logo' className='h-50 d-none d-md-block'/>
                    <img src={incognitoLight} alt='Incognito logo' height={80}/>
                </div>
            </div>
        </div>
    )
}

export default NotFound;