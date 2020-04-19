import React from 'react';
import './Card.scss';
import {Link} from 'react-router-dom';

const Card=(props)=>{
    return(
        <Link className="Card" to="/">
            <figure>
                <img src={props.url} alt={props.altText} />
            </figure>
            <p className="Card-Title">{props.title}</p>
        </Link>
    );
}

export default Card;