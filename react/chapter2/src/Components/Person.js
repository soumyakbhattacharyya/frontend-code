import React from 'react';

const person = (props) => {
    return (
        <div className = "App">
            <p>{props.message}; has been voted by {getVoters()} voters</p>
        </div>
    );
}

function getVoters(){return Math.floor(Math.random()*100000);}

export default person;