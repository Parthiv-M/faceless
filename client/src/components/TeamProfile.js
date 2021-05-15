
import { React, useEffect, useState } from 'react';
import { getTeamDetails } from './../context';
import Loading from './Loader';
import Navbar from './NavBar';

const TeamProfile = () => {

    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(true);

    const getTeam = async() => {
        try {
            let response = await getTeamDetails();
            setTeam(response.teamData);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTeam();
    })

    const final = team.answerLog ? team.answerLog.slice(team.answerLog.length-5, team.answerLog.length).map((answer) => {
        return (
            <div className="p-10 m-10 font-size-20 text-white" style={{ backgroundColor:'rgba(72,72,72,0.4)', borderBottom:'solid 0.1rem #FEDF00' }}>
                {answer}
            </div>
        )
        } 
    ) : <> </>;

    return (
        loading 
        ? 
        <Loading />
        :
        <div className='position-md-fixed h-full w-full'>
        <Navbar />
        <div className='container fixed-background m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center w-full">
                <div className="font-size-24 font-weight-bolder mt-20" style = {{ color:'#FEDF00' }}>{team.teamName}</div>
                <hr className='bg-white w-100' style={{ height:'0.3rem', marginBottom:'2rem'}}/>
                <div className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center w-full">
                        <div className="d-flex flex-column justify-content-center align-items-center w-full w-md-500 h-150 h-md-150 mx-md-10 my-10 teamboard-card" style={{ backgroundColor:'rgba(72,72,72,0.4)' }}>
                            <div className="font-weight-bolder text-white">
                                {team.teamCode}
                            </div>
                            <div className="font-size-20 font-weight-bolder text-white">
                                T E A M <span style={{ color: '#FEDF00' }}>C O D E</span> 
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center w-full w-md-500 h-150 h-md-150 mx-md-10 my-10 teamboard-card" style={{ backgroundColor:'rgba(72,72,72,0.4)' }}>
                            <div className="font-weight-bolder" style={{ color:'#FEDF00' }}>
                                {team.score}
                            </div>
                            <div className="font-size-20 font-weight-bolder" style={{ color:'#FEDF00' }}>
                                P O I N T S 
                            </div>
                    </div>
                    <div className="mx-md-10 my-10 p-20 h-150 w-full w-md-500 text-center" style={{ backgroundColor:'rgba(72,72,72,0.4)' }}>
                        <div className="d-flex justify-content-center align-items-center flex-row pb-10">
                            <div>
                                <span className="font-size-24 text-white">
                                    {team.teamMembers[0].userName}
                                </span>
                            </div>
                        </div>
                        {
                            Boolean(team.teamMembers[1]) 
                            ? 
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div className = "font-size-18 text-white">
                                    { team.teamMembers[1].userName }
                                </div>
                            </div>
                            : 
                            <div></div>
                        }
                    </div>
                </div>
                {
                    Boolean(team.answerLog) 
                    ? 
                    <>
                    <div className="font-size-24 font-weight-bolder mt-20" style = {{ color:'#FEDF00' }}>
                        Answer Log
                    </div>
                    <hr className='bg-white w-50' style={{ height:'0.2rem', marginBottom:'2rem'}}/>
                    <div className="pb-20 w-350 w-md-450">
                        {final}
                    </div>
                    </>
                    :
                    <div></div> 
                }
            </div>
        </div>
        </div>
    )
}

export default TeamProfile;