import React from 'react'

const ScoreBoard = () => {
    const teams = [
        {
            id:1,
            teamName:"Orkins",
            teamMember1:"OrkinKing",
            teamMember2:"theProton",
            points:"420",
        },
        {
            id:2,
            teamName:"Orkins",
            teamMember1:"OrkinKing",
            teamMember2:"theProton",
            points:"420",
        },
        {
            id:3,
            teamName:"Orkins",
            teamMember1:"OrkinKing",
            teamMember2:"theProton",
            points:"420",
        },
        {
            id:4,
            teamName:"Orkins",
            teamMember1:"OrkinKing",
            teamMember2:"theProton",
            points:"420",
        },
        {
            id:5,
            teamName:"Orkins",
            teamMember1:"OrkinKing",
            teamMember2:"theProton",
            points:"420",
        },
      ];

       const scoreCards =  teams.map((team) => {
            return (
                <div className=" d-flex flex-row justify-content-center my-10 w-full">
                    <div className="w-50 text-center font-weight-bold font-size-24 py-10" style={{color:'#FEDF00', backgroundColor:'rgba(72,72,72,0.3)'}}>
                        <div>{team.id}</div>
                    </div>
                    <div className="w-250 float-left" style={{backgroundColor:'rgba(136,136,136,0.3)'}}>
                        <div className= "text-left font-size-20 px-10 font-weight-bold" style={{color:'#FEDF00'}}>{team.teamName}</div>
                        <div className="float-left d-flex font-size-16 px-10 text-light">
                            <div className="pr-20">{team.teamMember1}</div>
                            <div>{team.teamMember2}</div>
                        </div>
                    </div>
                    <div className="w-100 font-size-24 font-weight-bolder py-10 pl-20 text-white" style={{backgroundColor:'rgba(136,136,136,0.3)'}}>
                        {team.points}
                    </div>
                </div>
            );
        })

        return(
            <div className='container fixedBackground m-auto'>
                <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full ">
                    <div className="font-size-24 font-weight-bolder mt-20" style = {{color:'#FEDF00'}}>Score Board</div>
                    <hr style={{background:"white", width:'10rem', height:'0.2rem', marginBottom:'4rem'}}/>
                    {scoreCards}
                </div>
            </div>
        )
}

export default ScoreBoard
