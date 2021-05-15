import { React, useEffect, useState } from 'react';
import { getScorecard, useAuthDispatch } from './../context';
import Loading from './Loader';
import Navbar from './NavBar';

const ScoreBoard = () => {

    const dispatch = useAuthDispatch();
    
    // manages state
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetches the top five teams
    const fetchData = async() => {
        try{
            let resp = await getScorecard(dispatch);
            setTeams(resp)
            setLoading(false);
        } catch(err) {
            console.log(err);
        }
    } 

    // triggered every time the page loads
    useEffect(() => {
        fetchData();
    }, [])
    
    const scoreCards =  teams.map((team, index) => {
        return (
            <div className=" d-flex scoreboard-card flex-row justify-content-center my-md-10 m-5 px-15">
                <div className="w-50 text-center font-weight-bold font-size-24 py-10" style={{color:'#FEDF00', backgroundColor:'rgba(72,72,72,0.3)'}}>
                    <div>{index + 1}</div>
                </div>
                <div className="w-250 float-left" style={{backgroundColor:'rgba(136,136,136,0.3)'}}>
                    <div className= "text-left font-size-20 px-10 font-weight-bold" style={{color:'#FEDF00'}}>{team.teamName}</div>
                    <div className="float-left d-flex font-size-16 px-10 text-light">
                        <div className="pr-20">{team.teamMembers[0].userName}</div>
                        { 
                            Boolean(team.teamMembers[1]) ? <div>{team.teamMembers[1].userName}</div> : <div></div>
                        } 
                    </div>
                </div>
                <div className="w-100 font-size-24 font-weight-bolder py-10 pl-20 text-white" style={{backgroundColor:'rgba(136,136,136,0.3)'}}>
                    {team.score}
                </div>
            </div>
        );
    })
    return(
        loading
        ?
        <Loading />
        :
        <div style={{ height: '100vh', width: '100vw' }}>
            <Navbar />
            <div className='container fixed-background m-auto' style={{height: '90vh'}}>
                <div className="d-flex flex-column float-left h-md-full justify-content-center align-items-center w-full ">
                    <div className="font-size-24 font-weight-bolder mt-20" style = {{ color:'#FEDF00' }}>Scoreboard</div>
                    <hr className='bg-white w-100' style={{ height:'0.2rem', marginBottom:'4rem' }}/>
                    {scoreCards}
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;