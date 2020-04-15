import React from 'react';
import './Hero.css';
import {Link} from 'react-router-dom';

const opis={
    title: 'Tjedan karijera',
    organizer: 'FOI',
    date: '20.10.2020. - 26.10.2020.',
    login: 'Prijavi se',
}

const Hero=()=>{
    return(
        <div className="Hero-DataContainer">
            <h1 className="Hero-Title">{opis.title}</h1>
            <span className="Hero-Organizer">{opis.organizer}</span>
            <p className="Hero-Date">{opis.date}</p>
            <Link className="Hero-Login" to="/">{opis.login}</Link>
        </div>
    );
}

export default Hero;