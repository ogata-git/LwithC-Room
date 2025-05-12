import React from 'react';
import '../styles/main.scss';

const Loading = () => {
  return (
    <div className="loading-container">
        <div className='spinner-container'>
            <div className="spinner"></div>
            <div className="text-animation">
                <span className="text dotgothic16-regular">LwithC Room</span>
            </div>
        </div>
    </div>
  );
};

export default Loading;
