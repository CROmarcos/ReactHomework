import React from 'react';
import {HeroSection, HeroTitle, HeroOrganizer, HeroDate, HeroLogin} from './HeroStyle';

const opis={
    title: 'Tjedan karijera',
    organizer: 'FOI',
    date: '20.10.2020. - 26.10.2020.',
    login: 'Prijavi se',
}

const Hero=()=>{
    return(
        <HeroSection>
            <HeroTitle>{opis.title}</HeroTitle>
            <HeroOrganizer>{opis.organizer}</HeroOrganizer>
            <HeroDate>{opis.date}</HeroDate>
            <HeroLogin to="/">{opis.login}</HeroLogin>
        </HeroSection>
    );
}

export default Hero;