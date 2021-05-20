import { React, useEffect, useState } from 'react'
import { ChevronRight } from 'react-feather';
import Navbar from './NavBar';
import Loading from './Loader'; 
import { useAuthState, getCharacterForTeam, useAuthDispatch, getQuestionsForTeam, getStoryline, submitAnswers } from './../context';

const GameScreen = () => {

    const user = useAuthState();
    const dispatch = useAuthDispatch();

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState('');
    const [story, setStory] = useState('');
    const [hint, setHint] = useState('');

    // method to fetch the questions
    const getQuestions = async() => {
        try {
            let payload = {
                name: user.character
            } 
            let response = await getQuestionsForTeam(dispatch, payload);
            setQuestions(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // method to fetch the storyline for the character
    const getStory = async() => {
        try {
            let payload = {
                character: user.character
            }
            let response = await getStoryline(payload);
            setStory(response.story)
        } catch (error) {
            console.log(error)
        }
    }
    
    // method to fetch character
    const getCharacterOfTeam = async() => {
        try {
            let response = await getCharacterForTeam(dispatch);
        } catch (error) {
            console.log(error);
        }
    }

    // method to trigger the toast on incorrect answer
    const triggerToast = () => {
        document.getElementById('answer-toast').classList.remove('d-none');
        document.getElementById('answer-toast').classList.remove('d-none');
        document.getElementById('answer-toast').classList.add('d-block');
        setTimeout(() => {
            document.getElementById('answer-toast').classList.remove('d-block');
            document.getElementById('answer-toast').classList.add('d-none');
        }, 1500);
    }

    const handleBlankAnswer = () => {
        if(answers.length === 0){
            return false;
        } else {
            return true;
        }
    }

    // method to submit the answers
    const handleSubmitAnswers = async() => {
        document.getElementById('blank-answer').classList.remove('d-block');
        document.getElementById('blank-answer').classList.add('d-none');
        if(handleBlankAnswer()){
            try {
                let payload = {
                    character: user.character,
                    answers: answers
                }
                let response = await submitAnswers(payload);
                
                // check if the hint has been taken
                if(user.hintTaken){
                    document.getElementById('hint').classList.remove('d-block');
                    document.getElementById('hint').classList.add('d-none');
                    document.getElementById('hint-taken').classList.remove('d-none');
                    document.getElementById('hint-taken').classList.add('d-block');
                    setTimeout(() => {
                        document.getElementById('hint-taken').classList.remove('d-block');
                        document.getElementById('hint-taken').classList.add('d-none');
                    }, 2500);
                } else {
                    if(response.code === 0) {
                        setHint(response.hint);
                        dispatch({ type: 'HINT_TAKEN' });
                    } else if(response.code === 1){
                        window.location.reload();
                        dispatch({ type: 'RESET_HINT' });
                    } else if(response.status === 400) {
                        triggerToast();
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            document.getElementById('blank-answer').classList.remove('d-none');
            document.getElementById('blank-answer').classList.add('d-block');
        }
    }

    // triggered once every time the page loads
    useEffect(async () => {
        await getCharacterOfTeam()
        await getStory();
        await getQuestions();
    }, []);

    return (
        loading 
        ?
        <Loading />
        :
        <div className='h-full w-full'>
            <Navbar />
            <div className='container fixed-background position-relative page-wrapper'>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="font-size-24 font-weight-bolder mt-20" style={{ color:'#FEDF00' }}>{user.character}</div>
                    <div className="text-justify font-size-16 text-light p-20 mb-xs-20">
                       {story}                
                    </div>
                    <div className="w-400 w-md-full d-flex align-items-md-center flex-column p-20 font-size-18 text-white">
                        {
                            questions.map((question, index) => {
                                    return (
                                        <div key={index} className="d-flex flex-row w-md-half align-items-center p-5">
                                            <div className="mx-15" style={{ color: '#FEDF00' }}>{index + 1}</div>
                                            <div className="text-left">{question.question}</div>
                                        </div>
                                    );
                            })
                        }
                        <div className="invalid-feedback" id="hint" style={{ color:'#FEDF00' }}>
                              {hint}
                        </div>
                        <div className="invalid-feedback d-none" id="hint-taken" style={{ color:'#FEDF00' }}>
                              You have already taken a hint, Agent.
                        </div>
                        <div className="invalid-feedback  d-none" id="blank-answer" style={{ color:'#FEDF00' }}>
                              Answers cannot be blank
                        </div>
                        <div className="d-flex flex-row justify-content-center w-full mt-20">
                            <div>
                                <input type="text" name="answer" className="form-control bg-transparent w-300 w-md-450 mt-10" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => setAnswers(e.target.value)}/>
                            </div>
                            <div className='animate-right' style={{ cursor: 'pointer' }}>
                                <ChevronRight color="#FEDF00" style={{ height:'5rem', width:'5rem' }} onClick={handleSubmitAnswers}/>
                            </div>
                        </div>
                        <div className='m-auto font-size-14 d-none w-200 p-10' id='answer-toast'>
                            WRONG ANSWER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameScreen;