import React from 'react';
import {HeroSection, HeroTitle, HeroOrganizer, HeroDate} from './HeroStyle';
import {Button} from '../../lib/GeneralStyles/PageStyle';

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
            <Button to="/">{opis.login}</Button>
        </HeroSection>
    );
}

export default Hero;