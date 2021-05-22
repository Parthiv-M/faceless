import { React, useEffect, useState } from 'react';
import { getScorecard, useFacelessDispatch } from './../context';
import Loading from './Loader';
import Navbar from './NavBar';
import { useHistory } from 'react-router-dom';

const ScoreBoard = () => {

    const dispatch = useFacelessDispatch();
    
    const history = useHistory();

    // manages state
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    // triggered every time the page loads
    useEffect(() => {
        // fetches the top five teams
        const fetchData = async() => {
            try{
                let resp = await getScorecard(dispatch);
                setTeams(resp)
                setLoading(false);
            } catch(err) {
                history.push('/notFound');
            }
        } 
        fetchData();
    }, [])
    
    const scoreCards =  teams.map((team, index) => {
        return (
            <div key={index} className="d-flex scoreboard-card w-full flex-row align-items-center justify-content-center my-md-10 m-5 px-10">
                <div className="text-center font-weight-bold font-size-24 d-flex justify-content-center align-items-center" style={{ color:'#FEDF00', height: '6rem', width: '6rem', backgroundColor:'rgba(72,72,72,0.3)'}}>
                    <div>{index + 1}</div>
                </div>
                <div className="w-250 float-left" style={{ backgroundColor:'rgba(136,136,136,0.3)', height: '6rem' }}>
                    <div className= "text-left font-size-20 px-10 font-weight-bold" style={{color:'#FEDF00'}}>{team.teamName}</div>
                    <div className="float-left d-flex font-size-16 px-10 text-light">
                        <div className="pr-5">{team.teamMembers[0].userName}</div>
                        { 
                            Boolean(team.teamMembers[1]) ? <div><span style={{ color:'#FEDF00' }}>and</span> {team.teamMembers[1].userName}</div> : <div></div>
                        } 
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center font-size-24 font-weight-bolder py-10 pl-20 text-white" style={{ height: '6rem', backgroundColor:'rgba(136,136,136,0.3)' }}>
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
            <div>
                <div className='fixed-background position-fixed'></div>
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