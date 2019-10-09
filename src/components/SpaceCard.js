import React from 'react';

const SpaceCard = props => {
    return(
        <div key={props.key}>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <img src={props.img} alt='Space img'/>
            <p>{props.text}</p>
        </div>
    )
}

export default SpaceCard;