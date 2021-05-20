import React from 'react';
import logo from './../assets/faceless.png';
import './../App.css';
import Navbar from './NavBar';
import { useAuthState } from './../context';
import Loading from './Loader';
import discord  from './../assets/discord.png';

const DashBoard = () => {

    const user = useAuthState();
    
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
                    <a href="/game" className="btn btn-lg animate-white mx-5 w-150 h-auto" style={{ borderRadius:'2.5rem' }} role="button">P L A Y</a>
                </div>
                <div className='flex-row d-md-none d-flex justify-content-md-end justify-content-center align-items-center h-100 w-full position-fixed' style={{ bottom: 0 }}>
                    <div className='h-50 px-15 d-flex align-items-center justify-content-around w-md-200 w-half mr-md-20 discord-floater' style={{ borderRadius: 50 }}>
                        <span>
                            Join the discord server
                        </span>
                        <span>
                            <img height={30} alt='Discord logo' className='mt-10 mx-5' src={discord}/>
                        </span>
                    </div>
                </div>
                <div className='flex-row d-md-flex d-none justify-content-md-end justify-content-center align-items-center h-100 w-full position-fixed' style={{ bottom: 0 }}>
                    <div className='h-50 px-15 d-flex align-items-center justify-content-around w-md-50 w-half mr-md-20 discord-floater' style={{ borderRadius: 50 }}>
                        <span>
                            <img height={30} alt='Discord logo' className='mt-10 mx-5' src={discord}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-xs-block d-md-flex w-md-full w-350 m-auto flex-column justify-content-center content" style={{ height: '100vh', width: '100vw' }}>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    ABOUT
                </div>
                <div className="text-light font-size-16 pb-20">
                    The Faceless. A notorious group of ten people have caused a lot of problems for a lot of people. However, this was all a decade ago. Some say that 
                    last mission they did together didn’t quite go according to plan and they had to go their separate ways. The group disbanded and completely went off 
                    the grid—until now. They seem to be resurfacing, in places least expected by anyone. You are an undercover agent working under the alias of Akshat 
                    and have been contacted by your HQ for a new mission—track down The Faceless.
                </div>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    RULES 
                </div>
                <div className="text-light font-size-16 pb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                </div>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    SUBMISSION 
                </div>
                <div className="text-light font-size-16" style={{paddingBottom: 100}}>
                    You have two ways of submitting your answers to track down the various members. Answer any three questions randomly and receive a hint when you are stuck. 
                    Answer all the five questions correctly and take one step closer to finding The Faceless and saving your life. The answer to each question is separated by an underscore. Answers submitted after hints will receive lesser points that those submitted without 
                    taking advantage of a hint. A sample question and answer set is shown below.
                </div>
            </div>
        </div>
    )
}

export default DashBoard;