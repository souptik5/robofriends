import React from 'react';

const Cards = (props) => {
    const {name, email} = props;
    return (
        <div className="tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${name}?200x200`} alt="Robo"/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Cards;