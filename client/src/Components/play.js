import React from 'react'
import { ChevronRight } from 'react-feather';

const Play = () => {
    return (
        <div className='container fixedBackground m-auto'>
            <div className="d-flex flex-column float-left justify-content-center align-items-center h-full w-full pl-20">
                <div className="font-size-24 font-weight-bolder mt-20" style = {{color:'#FEDF00'}}>THE FACELESS</div>
                <div className="text-center font-size-16 text-light p-20 mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augu. Bibendum enim facilisis gravida neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Habitant morbi tristique senectus et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Risus nec feugiat in fermentum posuere urna nec tincidunt. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Consectetur adipiscing elit pellentesque habitant.                
                </div>
                <div className = "w-400 w-md-half d-flex flex-column p-20 font-size-18 text-white">
                    <div className = "d-flex flex-row justify-content-start p-5">
                        <div className="pr-20">1.1</div>
                        <div className="text-left">Consectetur adipiscing elit pellentesque habitant.</div>
                    </div>
                    <div className = "d-flex flex-row justify-content-start p-5">
                        <div className="pr-20">1.2</div>
                        <div className="text-left">Consectetur adipiscing elit pellentesque habitant.Consectetur adipiscing elit pellentesque habitant.</div>
                    </div>
                    <div className = "d-flex flex-row justify-content-start p-5">
                        <div className="pr-20">1.3</div>
                        <div className="text-left">Consectetur adipiscing elit pellentesque habitant.</div>
                    </div>
                    <div className = "d-flex flex-row justify-content-start p-5">
                        <div className="pr-20">1.4</div>
                        <div className="text-left">Consectetur adipiscing elit pellentesque habitant.</div>
                    </div>
                    <div className = "d-flex flex-row justify-content-start p-5 mb-20">
                        <div className="pr-20">1.5</div>
                        <div className="text-left">Consectetur adipiscing elit pellentesque habitant.</div>
                    </div>
                    <div className="d-flex flex-row justify-content-center w-full w-md-600 mt-20">
                        <div>
                            <input type="text" className="form-control bg-transparent w-300 w-md-500 mt-10" style={{borderRadius:'0.2rem', border:'2px solid #FEDF00', color:'#FEDF00', width:'90%'}}/>
                        </div>
                        <a href="#">
                            <ChevronRight color="#FEDF00" style={{height:'5rem', width:'5rem'}}/>
                        </a>
                    </div>
                    <div className = 'text-light mt-20 font-italic'>
                        Hint: <span className = 'pl-10' style = {{color:'#FEDF00'}}>fkvjnsrkvjfnlevknlakvm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play;
