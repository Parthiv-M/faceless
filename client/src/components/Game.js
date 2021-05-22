import { React, useEffect, useState } from 'react'
import { ChevronRight } from 'react-feather';
import Navbar from './NavBar';
import { useHistory } from 'react-router-dom';
import Loading from './Loader'; 
import ReactMarkdown from 'react-markdown';
import './../App.css';
import { useFacelessState, getCharacterForTeam, useFacelessDispatch, getQuestionsForTeam, getStoryline, submitAnswers } from './../context';

const GameScreen = () => {

    const history = useHistory();

    const user = useFacelessState();
    const dispatch = useFacelessDispatch();

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState('');
    const [story, setStory] = useState('');
    const [hint, setHint] = useState('');

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
                if(answers.split('_').length === 3 && user.hintTaken){
                    // check if the hint has been taken
                        document.getElementById('hint').classList.remove('d-block');
                        document.getElementById('hint').classList.add('d-none');
                        document.getElementById('hint-taken').classList.remove('d-none');
                        document.getElementById('hint-taken').classList.add('d-block');
                        setTimeout(() => {
                            document.getElementById('hint-taken').classList.remove('d-block');
                            document.getElementById('hint-taken').classList.add('d-none');
                        }, 2500);
                } else {
                    let response = await submitAnswers(payload);
                    console.log(response);
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
                history.push('/notFound');
            }
        } else {
            document.getElementById('blank-answer').classList.remove('d-none');
            document.getElementById('blank-answer').classList.add('d-block');
        }
    }

    // method to fetch character
    const getCharacterOfTeam = async() => {
        try { 
            let response = await getCharacterForTeam(dispatch);
            await getStory();
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
            await getQuestions();
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    // // method to fetch the questions
    const getQuestions = async() => {
        try {
            let payload = {
                name: user.character
            } 
            let response = await getQuestionsForTeam(dispatch, payload);
            setQuestions(response);
            console.log(response)
            setLoading(false);
        } catch (error) {
            console.log(error);
            history.push('/notFound');
        }
    }

    // triggered once every time the page loads
    useEffect(async () => { 
        await getCharacterOfTeam()
    }, []);

    return (
        loading 
        ?
        <Loading />
        :
        <div>
            <Navbar />
            <div>
            <div className='fixed-background position-fixed'></div>
            <div className="w-full d-flex flex-column justify-content-center align-items-center">
                <div className="font-size-24 font-weight-bolder mt-20" style={{ color:'#FEDF00' }}>{user.character}</div>
                <div className="text-justify font-size-16 text-light p-20 mb-xs-20" style={{ width: '75%' }}>
                    <ReactMarkdown>
                        {story} 
                    </ReactMarkdown>                
                </div>
                <div className="w-full d-flex align-items-md-center flex-column p-20 font-size-18 text-white">
                    {
                        questions.map((question, index) => {
                                return (
                                    <div key={index} className="d-flex flex-row w-550 align-items-center p-5">
                                        <div className="mx-15" style={{ color: '#FEDF00' }}>{index + 1}</div>
                                        <div className="text-left">{question.question}</div>
                                    </div>
                                );
                        })
                    }
                    <div className="d-flex flex-row justify-content-center w-full mt-20">
                        <div>
                            <input type="text" name="answer" autoComplete="off" className="form-control bg-transparent w-300 w-md-450 mt-10" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}} onChange={(e) => setAnswers(e.target.value)}/>
                        </div>
                        <div className='animate-right' style={{ cursor: 'pointer' }}>
                            <ChevronRight color="#FEDF00" style={{ height:'5rem', width:'5rem' }} onClick={handleSubmitAnswers}/>
                        </div>
                    </div>
                    <div className="invalid-feedback text-center d-none" id="blank-answer" style={{ color:'#FEDF00' }}>
                          Answers cannot be blank
                    </div>
                    <div className="invalid-feedback d-none" id="hint-taken" style={{ color:'#FEDF00' }}>
                          You already have taken one piece of evidence with you, Agent A.
                    </div>
                    <div className="invalid-feedback" id="hint" style={{ color:'#FEDF00' }}>
                          {hint}
                    </div>
                    <div className='m-auto font-size-14 text-center d-none w-200 p-10' id='answer-toast'>
                        WRONG ANSWER
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default GameScreen;