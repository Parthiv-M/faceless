import { React, useEffect, useState } from 'react'
import { ChevronRight } from 'react-feather';
import Navbar from './NavBar';
import Loading from './Loader';
import { useAuthState, getCharacterForTeam, useAuthDispatch, getQuestionsForTeam } from './../context';

const GameScreen = () => {

    const user = useAuthState();
    const dispatch = useAuthDispatch();

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCharacterOfTeam = async() => {
        try {
            let response = await getCharacterForTeam(dispatch);
        } catch (error) {
            console.log(error);
        }
    }

    const getQuestions = async() => {
        try {
            let payload = {
                name: 'Tanvi'
            } 
            let response = await getQuestionsForTeam(dispatch, payload);
            setQuestions(response.slice(0, 3));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // triggered once every time the page loads
    useEffect(() => {
        getCharacterOfTeam();
        getQuestions();
    }, []);

    return (
        loading 
        ?
        <Loading />
        :
        <div className='h-full w-full'>
            <Navbar />
            <div className='container fixed-background m-auto'>
                <div className="d-flex flex-column float-left justify-content-center align-items-center">
                    <div className="font-size-24 font-weight-bolder mt-20" style = {{ color:'#FEDF00' }}>{user.character}</div>
                    <div className="text-justify font-size-16 text-light p-20 mb-xs-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                
                    </div>
                    <div className="text-justify font-size-16 text-light p-20 mb-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                
                    </div>
                    <div className = "w-400 w-md-half d-flex flex-column p-20 font-size-18 text-white">
                        {
                            questions.map((question, index) => {
                                if(index !== questions.length - 1)
                                    return (
                                        <div className = "d-flex flex-row justify-content-start p-5">
                                            <div className="mx-15 text-dark" style={{ height: 40, width: 40, borderRadius: '50%', backgroundColor: '#FEDF00' }}>{index + 1}</div>
                                            <div className="text-left">{question.question}</div>
                                        </div>
                                    );
                            })
                        }
                        <div className="d-flex flex-row justify-content-center w-full w-md-600 mt-20">
                            <div>
                                <input type="text" className="form-control bg-transparent w-300 w-md-500 mt-10" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}}/>
                            </div>
                            <div className='animate-right' style={{ cursor: 'pointer' }}>
                                <ChevronRight color="#FEDF00" style={{height:'5rem', width:'5rem'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameScreen;