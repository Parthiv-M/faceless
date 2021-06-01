import React from 'react';
import { useHistory } from 'react-router-dom';
import mttnLogo from './../assets/MTTNLogo.png'
import mistLogo  from './../assets/MISTlogoLight.png';
import incognitoLight from './../assets/incognitoLogoLight.png';
import { Instagram, GitHub, Linkedin, Home } from 'react-feather';

const board = [
    {
        name: 'Aditya Pradhan',
        instagram: '',
        github: 'https://github.com/AdityaPradhan1',
        linkedin: 'https://www.linkedin.com/in/aditya-pradhan-00237b1b5/',
        image: 'https://live.staticflickr.com/65535/50380007562_47e33fc040_m.jpg'
    },
    {
        name: 'Akash Krishna',
        instagram: '',
        github: 'https://github.com/akash-132',
        linkedin: 'https://www.linkedin.com/in/k-akash-krishna-1a3493167/',
        image: 'https://live.staticflickr.com/65535/49733165363_6f31817db1_m.jpg'
    },
    {
        name: 'Prachotan Reddy',
        instagram: '',
        github: 'https://github.com/PrachotanReddy',
        linkedin: 'https://www.linkedin.com/in/prachotanbathi/',
        image: 'https://live.staticflickr.com/65535/49733164628_1f82882b1a_m.jpg'
    },
    {
        name: 'Dhruv Bhat',
        instagram: '',
        github: 'https://ww.github.com/spaceman-dev',
        linkedin: 'https://www.linkedin.com/in/dhruv-bhat-912965199/',
        image: 'https://live.staticflickr.com/65535/49733710091_5398e21c77_m.jpg'
    },
    {
        name: 'Enrique Ferrao',
        instagram: '',
        github: 'https://github.com/enriqueferrao',
        linkedin: 'https://www.linkedin.com/in/enrique-ferrao/',
        image: 'https://live.staticflickr.com/65535/49734033632_a52c4dd516_m.jpg'
    },
    {
        name: 'Pranav Reddy',
        instagram: '',
        github: 'https://github.com/PranavReddyG',
        linkedin: 'https://linkedin.com/in/pranavreddyg',
        image: 'https://live.staticflickr.com/65535/50378936733_2b2a10b037_m.jpg'
    },
    {
        name: 'Yash Aryan',
        instagram: '',
        github: 'https://github.com/canaryGrapher',
        linkedin: 'https://www.linkedin.com/in/yasharyan/',
        image: 'https://live.staticflickr.com/65535/50382204311_b0f643a718_m.jpg'
    },
    {
        name: 'Ishaan Taneja',
        instagram: '',
        github: '',
        linkedin: 'https://www.linkedin.com/in/ishaan-taneja-0a9b8a18b',
        image: 'https://live.staticflickr.com/65535/50379875007_463035d83f_m.jpg'
    },
    {
        name: 'Sameer Rastogi',
        instagram: '',
        github: 'https://github.com/SameerRastogi00',
        linkedin: 'https://www.linkedin.com/in/sameer-rastogi-457a931a5/',
        image: 'https://live.staticflickr.com/65535/50379004303_d76bdfdd4b_m.jpg'
    },
    {
        name: 'Pradhyuman Yadav',
        instagram: '',
        github: 'https://github.com/pradhyuman-yadav',
        linkedin: 'https://www.linkedin.com/in/pradhyuman-yadav/',
        image: 'https://live.staticflickr.com/65535/49734032972_30ac4da8cc_m.jpg'
    },
];

const manComm = [
    {
        name: 'Parthiv Menon',
        instagram: 'https://www.instagram.com/_.parthiv_/',
        github: 'https://github.com/Parthiv-M/',
        linkedin: 'https://www.linkedin.com/in/parthivmenon',
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
        instagram: 'https://www.instagram.com/mehul_mah/',
        image: 'https://live.staticflickr.com/65535/50379563446_950a336982_m.jpg'
    }
    ]

const wc = [
    "Akshat Das",
    "Ananya Gupta",
    "Dhananjay Rana",
    "Parth Khurana",
    "Spandana Erukulla",
    "Anant Sabharwal",
    "Anirudh Murthy",
    "Manavi Sharma",
    "Riddhi Agrahari",
    "Yash Dhaga"
]

const MancommCards = manComm.map((item) => {
    return(
        <div className="w-200 d-flex justify-content-center align-items-center">
        <div className="card w-200 m-0 p-0 bg-transparent h-300 order border-0">
                <div className = "d-flex justify-content-center align-items-center pt-10" style={{}}>
                    <img src={item.image} height='170px' width='170px' style={{ borderRadius:'50%', filter:'drop-shadow(0px 0px 20px #080808)'}} alt={item.name}/>
                </div>
                <div className="content text-center text-white my-5">
                    <div className="content-title font-size-18 mb-15 pb-10" style={{borderBottom: '2px solid #FEDF00'}}>
                        {item.name}
                    </div>
                    <div className="w-auto d-flex flex-row justify-content-around text-white"> 
                        {
                            item.instagram 
                            ? 
                            <a className='mx-10' target="_blank" rel="noreferrer" href={item.instagram}>
                                <Instagram color="white" size={30}/>
                            </a> 
                            : 
                            <></>
                        }
                        {
                            item.github 
                            ? 
                            <a className='mx-10' target="_blank" rel="noreferrer" href={item.github}>
                                <GitHub color="white" size={30}/>
                            </a>
                            :
                            <></>
                        }
                        {
                            item.linkedin 
                            ?
                            <a className='mx-10' target="_blank" rel="noreferrer" href={item.linkedin}>
                                <Linkedin color="white" size={30}/>
                            </a>
                            :
                            <></>   
                        }
                    </div>
                </div>
        </div>
    </div>
    )
});

const BoardCards = board.map((item) => {
    return(
        <div className="w-200 d-flex justify-content-center align-items-center">
        <div className="card w-200 m-0 p-0 bg-transparent h-300 order border-0">
                <div className = "d-flex justify-content-center align-items-center pt-10" style={{}}>
                    <img src={item.image} height='170px' width='170px' style={{ borderRadius:'50%', filter:'drop-shadow(0px 0px 20px #080808)'}} alt={item.name}/>
                </div>
                <div className="content text-center text-white my-5">
                    <div className="content-title font-size-18 mb-15 pb-10" style={{borderBottom: '2px solid #FEDF00'}}>
                        {item.name}
                    </div>
                    <div className="w-auto d-flex flex-row justify-content-around text-white"> 
                        {
                            item.instagram 
                            ? 
                            <a className='mx-10' target="_blank" rel="noreferrer" href={item.instagram}>
                                <Instagram color="white" size={30}/>
                            </a> 
                            : 
                            <></>
                        }
                        {
                            item.github 
                            ? 
                            <a className='mx-10' target="_blank" rel="noreferrer" href={item.github}>
                                <GitHub color="white" size={30}/>
                            </a>
                            :
                            <></>
                        }
                        {
                            item.linkedin 
                            ?
                            <a className='mx-10' target="_blank" rel="noreferrer" href={item.linkedin}>
                                <Linkedin color="white" size={30}/>
                            </a>
                            :
                            <></>   
                        }
                    </div>
                </div>
        </div>
    </div>
    )
});

const wccards = wc.map((name) => {
    return(
        <div className="h-50 w-300 w-md-450 d-flex justify-content-center align-items-center text-light font-size-20 border border-0 rounded p-0" style={{ backgroundColor:'rgba(16,16,16,0.7)', margin:'0.2rem'}}>
            {name}
        </div>
    )
});

const Credits = () => {
    const history = useHistory();
    return (
        <div className='container fixed-background py-20 px-0 m-auto' style={{height:'fit-content'}}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className='d-flex w-md-three-quarter p-md-20 flex-column flex-md-row justify-content-md-between align-items-md-start'>
                    <div className='mr-md-20 d-flex flex-column justify-content-center align-items-center'>
                        <div className="font-size-24 font-weight-bolder mt-10 p-0" style={{color:'#FEDF00'}}>Organised By</div>
                        <div style={{ background:"white", width:'12rem', height:'0.2rem', marginBottom:'2rem'}}/>
                        <img src={mistLogo} alt="MTTN logo" height='auto' className='w-200 w-md-250' style={{padding:'3rem 0'}} />
                    </div>
                    <div className='ml-md-20 d-flex flex-column justify-content-center align-items-center'>
                        <div className="font-size-24 font-weight-bolder mt-10 p-0" style={{color:'#FEDF00'}}>Media Partner</div>
                        <div style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'2rem'}}/>
                        <img src={mttnLogo} alt="MTTN logo" height='auto' className='w-200 w-md-250' style={{padding:'3rem 0'}} />
                    </div>
                </div>
                <div className="font-size-24 font-weight-bolder mt-10 pt-20" style={{color:'#FEDF00'}}>Core Committee</div>
                <hr style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'4rem'}}/>
                <div className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center">
                    {BoardCards}
                </div>
                <div className="font-size-24 font-weight-bolder mt-10 pt-20" style={{color:'#FEDF00'}}>The Faces Behind Faceless</div>
                <hr style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'4rem'}}/>
                <div className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center">
                    {MancommCards}
                </div>
                <div className="font-size-24 font-weight-bolder mt-10 pt-20" style={{color:'#FEDF00'}}>Helping Hands</div>
                <hr style={{background:"white", width:'12rem', height:'0.2rem', marginBottom:'4rem'}}/>
                <div className = "d-flex flex-wrap justify-content-center align-items-center mx-0">
                    {wccards}
                </div>
                <div className='w-350 w-md-400 d-flex h-150 w-full justify-content-center align-items-center mt-20'>
                        <button onClick={() => history.push('/game')} class="btn w-300 text-white font-size-20 d-flex align-items-center justify-content-center" type="button" style={{ height:'6rem', backgroundColor:'rgba(16,16,16,0.7)', borderRadius: '12px', filter:'drop-shadow(0px 0px 10px black)' }}>
                            <Home style={{ color:'#FEDF00' }} size={30}/>
                            <span className='pl-10'>Back to the game</span>
                        </button>
                </div>
                <div className='d-flex h-150 w-half justify-content-center align-items-center' style={{ bottom: 0, zIndex: -99 }}>
                    <img src={incognitoLight} alt='Incognito logo' className='ml-10' height={80}/>
                </div>
            </div>
        </div>
    );
}

export default Credits
