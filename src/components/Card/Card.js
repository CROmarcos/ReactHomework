import React from 'react';
import {CardContainer} from './CardStyle';

const Card=(props)=>{
    return(
        <CardContainer>
            <figure>
                <img src={props.url} alt={props.altText} />
            </figure>
            <p className="Card-Title">{props.title}</p>
        </CardContainer>
    );
}

export default Card;