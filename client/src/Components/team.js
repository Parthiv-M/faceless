import React from 'react'

const TeamPage = () => {

    const answers = [
        {
            id:1,
            ans:'{adsd_adsA_adad_Asdsd_SDA}'
        },
        {
            id:2,
            ans:'{adsd_adsA_adad_Asd_SD}'
        },
        {
            id:3,
            ans:'{adsd_adsA_adad}'
        },
        {
            id:4,
            ans:'{sd_swszxs_xdsx}'
        },
        {
            id:5,
            ans:'{sd_swszxs_xdsx_xaex_EXx}'
        },
    ];

    const final = answers.map((answer) => {
        return (
            <div className = "pb-20 m-15 font-size-20 text-white" style={{borderBottom:'solid 0.1rem #FEDF00'}}>
                {answer.ans}
            </div>
        )
        }
    );

    return (
        <div className='container fixedBackground m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full">
                <div className="font-size-24 font-weight-bolder mt-10" style = {{color:'#FEDF00'}}>Orkins</div>
                <hr style={{background:"white", width:'10rem', height:'0.3rem', marginBottom:'2rem'}}/>
                <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center w-full">
                        <div className="d-flex justify-content-center align-items-center w-400 w-md-500 h-50 h-md-100 mx-auto mx-md-10 my-10" style={{backgroundColor:'rgba(72,72,72,0.4)', borderRadius:'1rem'}}>
                            <div className="font-size-24 font-weight-bolder text-white">
                            IXE1056
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-400 w-md-500 h-50 h-md-100 mx-auto mx-md-10 my-10" style={{backgroundColor:'rgba(72,72,72,0.4)', borderRadius:'1rem'}}>
                            <div className=" font-size-24 font-weight-bolder" style = {{color:'#FEDF00'}}>
                                420
                            </div>
                    </div>
                    <div className="mx-auto mx-md-10 my-10 p-20 h-md-100 w-400 w-md-500 " style={{backgroundColor:'rgba(72,72,72,0.4)', borderRadius:'1rem'}}>
                        <div className="d-flex justify-content-between flex-row pb-10">
                            <div>
                                <span className = "font-size-18 text-white">
                                    OrkinKing
                                </span>
                            </div>
                            <div className = "font-size-16 pr-10 text-white" >
                                69
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-row justify-content-center align-items-center">
                            <div className = "font-size-18 text-white">
                                theProton
                            </div>
                            <div className = "font-size-16 pr-10 text-white" style = {{color:'#FEDF00'}}>
                                69
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-size-24 font-weight-bolder mt-20" style = {{color:'#FEDF00'}}>Answer Log</div>
                <hr style={{background:"white", width:'10rem', height:'0.2rem', marginBottom:'2rem'}}/>
                <div className="mt-10 py-10 w-350 w-md-450" style={{backgroundColor:'rgba(72,72,72,0.4)', borderRadius:'1rem'}}>
                    {final}
                </div>
            </div>
        </div>
    )
}

export default TeamPage;
