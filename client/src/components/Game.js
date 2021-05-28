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

    // removes the existing error messages
    const removeExistingErrors = () => {
        document.getElementById('blank-answer').classList.remove('d-block');
        document.getElementById('blank-answer').classList.add('d-none');
        document.getElementById('three-or-five').classList.remove('d-block');
        document.getElementById('three-or-five').classList.add('d-none');
        document.getElementById('hint').classList.remove('d-block');
        document.getElementById('hint').classList.add('d-none');
        document.getElementById('hint-taken').classList.remove('d-block');
        document.getElementById('hint-taken').classList.add('d-none');
    }

    // method to submit the answers
    const handleSubmitAnswers = async() => {
        removeExistingErrors();
        if(handleBlankAnswer()){
            try {
                let payload = {
                    character: user.character,
                    answers: answers
                }
                let response = await submitAnswers(payload);
                console.log(response.message);
                if(Boolean(response.hint)){
                    setHint(response.hint)
                } else if (Boolean(response.data.error)){
                    if(response.data.error === 'Submit either three or five answers'){
                        document.getElementById('three-or-five').classList.remove('d-none');
                        document.getElementById('three-or-five').classList.add('d-block');
                    } else if (response.data.error === 'Dang! Wrong answer') {
                        triggerToast();
                    } 
                } else if (Boolean(response.data.code)) {
                    if(response.data.code === 10) {
                        document.getElementById('hint-taken').classList.remove('d-none');
                        document.getElementById('hint-taken').classList.add('d-block');
                    }
                } else if (response.message === 'Level cleared') {
                    window.location.reload();
                }
            } catch (error) {
                console.log(error)
                history.push('/notFound');
            }
        } 
    }

    // method to fetch character
    const getCharacterOfTeam = async() => {
        try { 
            let response = await getCharacterForTeam(dispatch);
            await getStory();
        } catch (error) {
            history.push('/notFound');
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
        } catch (error) {
            history.push('/notFound');
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
            setLoading(false);
        } catch (error) {
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
            <div style={{height: '100%'}} className="d-flex flex-column justify-content-center align-items-center">
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
                    <div className="invalid-feedback d-none" id="three-or-five" style={{ color:'#FEDF00' }}>
                        Submit either three or five answers
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