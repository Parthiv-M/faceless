import { React, useState, useEffect  } from 'react';
import logo from './../assets/faceless.png';
import './../App.css';
import ParticlesYellow from './Particles';
import mistLogo  from './../assets/MISTlogoLight.png';
import incognitoLight from './../assets/incognitoLogoLight.png';
import { useHistory } from 'react-router-dom';
import { useFacelessState } from './../context';
import Loading from './Loader';

const LandingPage = () => {

    const [loading, setLoading] = useState(true);
    const user = useFacelessState();
    const history = useHistory();

    useEffect(() => {
        if(user.token){
            history.push('/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    return (
        loading 
        ? 
        <Loading />
        :
        <div>
            <div className='position-fixed d-block' style={{ zIndex: '-99', height: '100vh', width: '100vw' }}>
                <ParticlesYellow value={80} dotColor='#FEDF00' lineColor='#FFFFFF'/>
            </div>
            <div className='d-flex flex-column position-fixed align-items-center justify-content-center' style={{  height: '100vh', width: '100vw' }}>
                <div className='h-50 w-full d-flex align-items-center justify-content-center justify-content-md-end position-fixed font-weight-bold px-20' style={{ top: 0, color:'#FEDF00', zIndex: '-99'  }}>
                    <a href='/credits' style={{ color:'#FEDF00', zIndex: '-99', cursor: 'pointer' }}>The Team</a>
                </div>
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
                <div className='d-flex flex-column flex-md-row h-150 w-full justify-content-between align-items-center position-fixed logo-bar' style={{ bottom: 0, zIndex: -99 }}>
                    <img src={mistLogo} alt='MIST Logo' className='h-50 d-none d-md-block'/>
                    <img src={incognitoLight} alt='Incognito logo' height={80}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;