import { React, useState } from 'react';
import logo from './../assets/faceless.png';
import './../App.css';
import Navbar from './NavBar';
import { useFacelessState } from './../context';
import Loading from './Loader';
import ParticlesYellow from './Particles';
import discord  from './../assets/discord.png';
import sample  from './../assets/sample.png';
import { HelpCircle } from 'react-feather';

const DashBoard = () => {

    const user = useFacelessState();
    const [show, setShow] = useState(false);
    
    const handleShow = () => {
        setShow(!show);
    }

    return (
        user.loading 
        ? 
        <Loading />
        :
        <div>
            {
            show ? 
            <div onClick={handleShow} className='position-fixed d-flex flex-column justify-content-center align-items-center h-full w-full' style={{ backgroundColor:'rgba(32, 32, 32, 0.94)', zIndex: 1000 }}>
                <div className='w-md-half w-three-quarter text-white text-justify'>
                    <span style={{ color: '#FEDF00' }}>Open Source Intelligence</span>, or OSINT, is a multi-factor methodology to collect, analyse, and make decisions about data that is publicly accessible.
                    More often than not, intellignece agencies use the idea of OSINT to track events, weapon systems, and people—referred to as targets of interest. <span style={{ color: '#FEDF00' }}>Doxing</span>, 
                    derived from the term 'dropping documents', is the darker side of OSINT. It involves the act of compiling a dossier against the victim and publishing it online. 
                    The techniques involved in OSINT, learnt by malicious hackers for reconnaissance are mostly legal, since the data is publicly available.
                </div>
                <br />
                <div className='border-bottom w-half mb-20' style={{ backgroundColor: '#FEDF00' }}></div>
                <div className='w-md-half w-three-quarter text-white text-center'>
                    <em>All characters in this event are a work of fiction. Any resemblance to any person, living or dead, is purely coincidental. </em>
                </div>
            </div>
            : <> </>
            }
            <Navbar />
            <div className='position-fixed w-full' id="particles" style={{ zIndex: '-99', height: '100vh' }}>
                <ParticlesYellow value={70} dotColor='#FFFFFF' lineColor='#FEDF00'/>
            </div>
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
                <div className='flex-row d-md-none d-flex justify-content-center align-items-center h-100 w-full position-fixed' style={{ bottom: 0 }}>
                    <div onClick={handleShow} className='h-50 px-15 mr-5 d-flex align-items-center justify-content-center' style={{ borderRadius: 50, backgroundColor:'#FEDF00', width: '40%' }}>
                        <span className='pt-5 mr-10'><HelpCircle size={20}/></span>MORE INFO
                    </div>
                    <div className='h-50 px-15 ml-5 d-flex align-items-center justify-content-around discord-floater' style={{ borderRadius: 50, width: '45%' }}>
                        <span className='text-center'>
                            {/* change the link later on */}
                            <a href='https://discord.gg/tBdh8c7P' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'black' }}>The discord server</a>
                        </span>
                        <span>
                            <img height={20} alt='Discord logo' className='mt-10 mx-5' src={discord}/>
                        </span>
                    </div>
                </div>
                <div className='flex-row d-md-flex d-none justify-content-end align-items-center h-100 w-full position-fixed' style={{ bottom: 0 }}>
                    <div onClick={handleShow} className='font-size-12 font-weight-bold mx-20 h-50 px-15 d-flex align-items-center justify-content-around' style={{ cursor: 'pointer', borderRadius: 50, backgroundColor:'#FEDF00', width: '8%' }}>
                        <span className='pt-5'><HelpCircle size={20}/></span>MORE INFO 
                    </div>
                    <div className='h-50 px-15 d-flex align-items-center justify-content-around w-50 mr-20 discord-floater' style={{ borderRadius: 50 }}>
                        <span>
                            {/* change the link later on */}
                            <a href='https://discord.gg/tBdh8c7P' target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'black' }}>
                                <img height={30} alt='Discord logo' src={discord}/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-xs-block d-md-flex w-full m-auto flex-column justify-content-center dashboard-content" style={{ height: '100vh' }}>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    ABOUT
                    <hr style={{ backgroundColor:'#FEDF00', height:'0.15rem', width:'7rem' }}></hr>
                </div>
                <div className="text-light font-size-16 pb-20">
                    The Faceless. A notorious group of ten people have caused a lot of problems for a lot of people. However, this was all a decade ago. Some say that 
                    the last mission they did together didn’t quite go according to plan and they had to go their separate ways. The group disbanded and completely went off 
                    the grid—until now. They seem to be resurfacing, in places least expected by anyone. They have traded their old lives for new ones, conjured up new appearances
                    and are regrouping. You are an undercover agent working under the alias of Akshat and have been contacted by your HQ for a new mission—tracking down The Faceless.
                </div>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    RULES 
                    <hr style={{ backgroundColor:'#FEDF00', height:'0.15rem', width:'7rem' }}></hr>
                </div>
                <div className="text-light font-size-16 pb-20">
                    <ol className='mt-5'>
                        <li>All answers are to be submitted in <span className='font-weight-bold'>lowercase</span> only</li>
                        <li>Participating teams are requested not to bombard any person's social media accounts (if any) and respect the spirit of the game</li>
                        <li>All numeric answers should be spelled out while submitting</li>
                        <li>Participants are requested not to share the answers or character names with fellow participants. Any team doing so, if found out, will be disqualified from the contest</li>
                        <li>The decisions taken by the organisers will be final and binding</li>
                    </ol>
                </div>
                <div className="text-white font-size-24 font-weight-bolder py-5">
                    SUBMISSION 
                    <hr style={{ backgroundColor:'#FEDF00', height:'0.15rem', width:'13.5rem' }}></hr>
                </div>
                <div className="text-light font-size-16">
                    Each team receives a set of five questions per character of The Faceless. The team members have two ways of submitting answers. Answering any three questions randomly will return a random 
                    hint about that particular person. A hint can only be availed once per character. Answer all the five questions correctly and you are one step closer to finding all the members of The Faceless. 
                    Answers submitted after hints are taken will receive lesser points that those submitted without taking advantage of a hint. The answer to each question
                    is separated by an underscore. <em>The questions and hints are generated randomly to ensure fairplay.</em> A sample submission is shown.
                </div>
                <div className='mt-20 h-md-250 text-center' style={{ paddingBottom: 100 }}>
                    <img src={sample} className='w-md-400 w-300' alt='Sample question' />
                </div>
            </div>
        </div>
    )
}

export default DashBoard;