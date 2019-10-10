import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const SpaceCard = props => {
    return(
        // <div key={props.key}>
        //     <h1>{props.title}</h1>
        //     <h3>{props.date}</h3>
        //     <img src={props.img} alt='Space img'/>
        //     <p>{props.text}</p>
        // </div>

        <div >
            <Card width='70%'>
                <CardImg top width="70%" src={props.img} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                    <CardText>{props.text}</CardText>
                </CardBody>
            </Card>
        </div>

    )
}

export default SpaceCard;