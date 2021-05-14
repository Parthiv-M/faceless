import React from 'react';
import logo from './../assets/faceless.png';
import './../App.css';
import Navbar from './NavBar';
import { useAuthState } from './../context';
import Loading from './Loader';

const DashBoard = () => {

    const user = useAuthState();
    console.log(user);
    return (
        user.loading 
        ? 
        <Loading />
        :
        <div>
            <Navbar />
            <div className='d-flex flex-column align-items-center justify-content-center' style={{  height: '100vh', width: '100vw' }}>
                <div className='text-center'>
                    <img src={logo} className='h-md-250 h-200' alt="Faceless Logo"/>
                </div>
                <div className="text-center font-italic font-size-24 font-size-md-18 text-light">
                    <p>people with many faces</p>
                </div>
                <div className="mt-20 text-center font-weight-bolder font-size-24 text-light pt-20">
                    <a href="/game" className="btn btn-lg mx-5 w-150 h-auto bg-transparent" style={{borderRadius:'2.5rem', border:'2px solid #FEDF00', color:'#FEDF00'}} role="button">Play</a>
                </div>
            </div>
            <div className="d-xs-block d-md-flex flex-column justify-content-center content" style={{ height: '100vh', width: '100vw' }}>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    ABOUT
                </div>
                <div className="text-light font-size-16 pb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                </div>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    RULES 
                </div>
                <div className="text-light font-size-16 pb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                </div>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    SUBMISSION 
                </div>
                <div className="text-light font-size-16 pb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.
                </div>
            </div>
        </div>
    )
}

export default DashBoard;