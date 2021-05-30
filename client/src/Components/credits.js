import React from 'react'
import mttnLogo from './../MTTNWhite.png'
import mistLogo from './../mistLogo.png'
import incognitoLight from './../incognitoLogoLightl.png'
import { Instagram, GitHub, Linkedin, Home } from 'react-feather';

const manComm = [
    {
        name: 'Parthiv Menon',
        instagram: 'https://www.instagram.com/_.parthiv_/',
        github: 'https://github.com/Parthiv-M/',
        linkedin: 'https://www.linkedin.com/in/shrenik-kalambur-999632187',
        image: 'https://live.staticflickr.com/65535/51209690700_855062841d.jpg'
    },
    {
        name: 'Nithin Chowdary',
        instagram: 'https://www.instagram.com/nitin_chowdary7/',
        github: 'https://github.com/nithinchowdary007',
        linkedin: 'https://www.linkedin.com/in/nithin-chowdary-garapati-795432192/',
        image: 'https://live.staticflickr.com/65535/50378865658_e41873ef0a_m.jpg'
    },
    {
        name: 'Pal Chheda',
        github: 'https://github.com/PalChheda',
        linkedin: 'https://www.linkedin.com/in/pal-chheda-21b34b1b7',
        instagram: 'https://www.instagram.com/pal_chheda',
        image: 'https://live.staticflickr.com/65535/50379743877_df318a7f1d_m.jpg'
    },
    {
        name: 'Shrenik',
        instagram: 'https://www.instagram.com/shrenikkalambur/',
        github: '',
        linkedin: 'https://www.linkedin.com/in/shrenik-kalambur-999632187',
        image: 'https://live.staticflickr.com/65535/50378866038_323d192914_m.jpg'
    },
    {
        name: 'Shaun Santosh',
        github: 'https://github.com/ShadowRnG',
        linkedin: '',
        instagram: 'https://www.instagram.com/shaun_santosh993/',
        image: 'https://live.staticflickr.com/65535/50379562416_917d0bda2c_m.jpg'
    },
    {
        name: 'Simran Saluja',
        github: 'https://github.com/Simran-saluja03',
        linkedin: 'https://www.linkedin.com/in/simran-saluja-0596221a0/',
        instagram: '',
        image: 'https://live.staticflickr.com/65535/50379744447_2ef6349365_n.jpg'
    },
    {
        name: 'Priyanshu Gupta',
        github: 'https://github.com/marco-ocram',
        linkedin: 'https://www.linkedin.com/in/priyanshu-gupta-130655190',
        instagram: 'https://www.instagram.com/_.babu_bhaiya_/',
        image: 'https://live.staticflickr.com/65535/50379562901_1906d83536_m.jpg'
    },
    {
        name: 'Aviral Gupta',
        github: 'https://github.com/Aviral044',
        linkedin: 'https://www.linkedin.com/in/aviral-gupta-5984b31a0/',
        instagram: 'https://www.instagram.com/aviralgupta044/',
        image: 'https://live.staticflickr.com/65535/50379743187_e67e74972e_n.jpg'
    },
    {
        name: 'Keshav Kishor',
        github: 'https://github.com/williwaw77',
        linkedin: 'https://www.linkedin.com/in/keshav-kishor-9a4635198',
        instagram: '',
        image: 'https://live.staticflickr.com/65535/50379744432_6e2bf1230a_m.jpg'
    },
    {
        name: 'Mehul',
        github: 'https://github.com/BeastBoy0121',
        linkedin: 'https://www.linkedin.com/in/mehul-maheshwari-34475411a/',
        instagram: '',
        image: 'https://live.staticflickr.com/65535/50379563446_950a336982_m.jpg'
    }
    ]

const wc = [
    {
        name:"Akshat Das",
    },
    {
        name:"Ananya Gupta",
    },
    {
        name:"Dhananjay Rana",
    },
    {
        name:"Parth Khurana",
    },
    {
        name:"Spandana Erukulla",
    },
    {
        name:"Anant Sabharwal",
    },
    {
        name:"Anirudh Murthy",
    },
    {
        name:"Manavi Sharma",
    },
    {
        name:"Riddhi Agrahari",
    },
    {
        name:"Yash Dhaga",
    },
]

const Teamcards = manComm.map((item) => {
    return(
        <div className="w-200 d-flex justify-content-center align-items-center">
        <div className="card w-200 m-0 p-0 bg-transparent h-300 order border-0">
                <div className = "d-flex justify-content-center align-items-center pt-10" style={{}}>
                    <img src={item.image} height='170px' width='170px' style={{ borderRadius:'50%', filter:'drop-shadow(0px 0px 20px #080808)'}} alt="Image"/>
                </div>
                <div className="content text-center text-white my-5">
                    <div className="content-title font-size-18">
                        {item.name}
                    </div>
                    <hr style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'2rem',background:'#FEDF00'}}/>
                    <div className="w-auto d-flex flex-row justify-content-around text-white"> 
                        <a className='mx-10' target="_blank" href={item.instagram}>
                            <Instagram color="white" size={30}/>
                        </a>
                        <a className='mx-10' target="_blank" href={item.github}>
                            <GitHub color="white" size={30}/>
                        </a>
                        <a className='mx-10' target="_blank" href={item.linkedin}>
                            <Linkedin color="white" size={30}/>
                        </a>
                    </div>
                </div>
        </div>
    </div>
    )
})

const wccards = wc.map((item) => {
    return(
        <div className="w-300 w-md-450 d-flex justify-content-center align-items-center text-light font-size-20 border rounded p-0" style={{height:'5rem', backgroundColor:'rgba(24,24,24,0.6)', margin:'0.2rem'}}>
            {item.name}
        </div>
    )
})

const Credits = () => {
    return (
        <div className='container fixedBackground py-20 px-0 m-auto' style={{height:'fit-content'}}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="font-size-24 font-weight-bolder mt-10 p-0" style = {{color:'#FEDF00'}}>Media Partner</div>
                <hr style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'2rem'}}/>
                <img src = {mttnLogo} height='auto' className = 'w-200 w-md-250' style={{padding:'3rem 0'}} />
                <div className="font-size-24 font-weight-bolder mt-10 pt-20" style = {{color:'#FEDF00'}}>The Faces Behind Faceless</div>
                <hr style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'4rem'}}/>
                <div className = "d-flex flex-wrap justify-content-around align-items-center mx-0">
                    {Teamcards}
                </div>
                <div className="font-size-24 font-weight-bolder mt-10 pt-20" style = {{color:'#FEDF00'}}>Helping Hands</div>
                <hr style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'4rem'}}/>
                <div className = "d-flex flex-wrap justify-content-center align-items-center mx-0">
                    {wccards}
                </div>
                <div className='w-350 w-md-400 d-flex h-150 w-full justify-content-center align-items-center mt-20'>
                        <button class="btn w-300 text-white font-size-20 d-flex align-items-center justify-content-center" type="button" style={{height:'6rem', backgroundColor:'rgba(16,16,16,0.7)',borderRadius: '12px', filter:'drop-shadow(0px 0px 10px black)'}}>
                            <Home style = {{color:'#FEDF00'}} size={30}/>
                            <span className='p-10'>Back to the game</span>
                        </button>
                </div>
                <div className='d-flex flex-column flex-md-row h-150 w-full justify-content-between align-items-center logo-bar' style={{ bottom: 0, zIndex: -99 }}>
                    <img src={mistLogo} alt='MIST Logo' className='h-50 d-none d-md-block'/>
                    <img src={incognitoLight} alt='Incognito logo' height={80}/>
                </div>
            </div>
        </div>
    )
}

export default Credits
