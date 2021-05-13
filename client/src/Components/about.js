import React from 'react'
import facelessLogo from './../Frame.png'

const About = () => {
    return (
        <div className = "container">
            <div className="border-0 mx-20">
                <div className='mx-auto mt-20 w-300 d-block'>
                    <img src={facelessLogo} alt="Faceless Logo" style = {{margin:'auto', display:'block'}}/>
                </div>
                <div className="mb-10 text-center font-italic font-size-24 font-size-md-18 text-light">
                    people with many faces
                </div>
                <div className="mt-20 mb-10 text-center font-weight-bolder font-size-24 text-light pt-20 pb-20">
                    <a href="#" className="btn btn-lg mx-5 w-150 h-auto bg-transparent" style={{borderRadius:'2.5rem', border:'2px solid #FEDF00', color:'#FEDF00'}} role="button">Play</a>
                    {/* <a href="#" className="btn btn-lg mx-5 w-150 h-auto" style={{borderRadius:'2.5rem'}} role="button">Login</a> */}
                </div>
                <div className="text-center font-size-18 text-light pt-20">
                    After a decade of going off the grid, The Faceless,  a hacker group, has resurfaced.  This time they are using new aliases to function amongst us. 
                </div>
                <br/>
                <div className="mb-20 text-center font-size-18 text-light pb-20">
                    Now it's up to you to trail their every move and reach the final level. Put your detective hats on and use all your resources to collect information on them and help us link them together before they regroup. 
                </div>
                <div className="text-white font-size-24 font-weight-bolder pt-20">
                    ABOUT
                </div>
                <div className="text-light font-size-16 pb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                </div>
                <div className="text-white font-size-24 font-weight-bolder">
                    RULES 
                </div>
                <div className="text-light font-size-16 pb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                </div>
                <div className="text-white font-size-24 font-weight-bolder">
                    SUBMISSION 
                </div>
                <div className="text-light font-size-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.
                </div>
            </div>
        </div>
    )
}

export default About;