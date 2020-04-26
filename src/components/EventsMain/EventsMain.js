import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import {Events, EventsSection} from './EventsMainStyle';
import EventsIcon from '../../assets/img/event-icon.png';
import SearchBar from '../SearchBar/SearchBar';

const pageTitle='Događanja';

const name='How can we benefit from React Redux';

const button='Prijavi se na predavanje';

const EventsMain=()=>{
    return(
        <main>
            <h1 class="PageTitle">{pageTitle}</h1>
            <EventsSection>
                <SearchBar/>
            </EventsSection>
            <Events>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
            </Events>
        </main>
    );
}

export default EventsMain;