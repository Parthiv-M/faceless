import React from 'react'
import Loader from 'react-loader-spinner';

const Loading = () => {
    return(
        <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '100vh', width: '100vw', transform: 'rotate(90deg)' }}>
            <Loader 
              type='Bars'
              color='#FEDF00'
            />
        </div>
    );
}

export default Loading;