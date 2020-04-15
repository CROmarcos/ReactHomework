import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

const Card=(props)=>{
    return(
        <Link className="Card" to="/">
            <figure>
                <img src={props.url} alt={props.altText} />
            </figure>
            <p className="CardTitle">{props.title}</p>
        </Link>
    );
}

export default Card;