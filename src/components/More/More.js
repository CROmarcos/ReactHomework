import React from 'react';
import {MoreSection, MoreCardContainer} from './MoreStyle';
import {Button} from '../../lib/GeneralStyles/PageStyle';
import About from '../../components/About/About';
import Card from '../../components/Card/Card';
import CardAbout from '../../assets/img/about.jpg';
import CardSpeakers from '../../assets/img/speakers.jpg';
import CardAgenda from '../../assets/img/calendar.jpg';
import CardPartners from '../../assets/img/partner.jpg';

const link='Saznaj više';

const source={
    about: CardAbout,
    speakers: CardSpeakers,
    agenda: CardAgenda,
    partners: CardPartners,
}

const altText={
    about: 'About',
    speakers: 'Speakers',
    agenda: 'Agenda',
    partners: 'Partners',
}

const title={
    about: 'O tjednu karijera',
    speakers: 'Izlagači',
    agenda: 'Raspored događanja',
    partners: 'Partneri',
}

const More=()=>{
    return(
        <MoreSection>
            <About leftSide={false}/>
            <Button to="/">{link}</Button>
            <MoreCardContainer>
                <Card url={source.about} altText={altText.about} title={title.about} />
                <Card url={source.speakers} altText={altText.speakers} title={title.speakers} />
                <Card url={source.agenda} altText={altText.agenda} title={title.agenda} />
                <Card url={source.partners} altText={altText.partners} title={title.partners}/>
            </MoreCardContainer>
        </MoreSection>
        
    );
}

export default More;