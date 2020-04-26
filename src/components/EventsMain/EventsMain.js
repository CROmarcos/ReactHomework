import React, { useEffect, useState } from 'react';
import InfoBox from '../InfoBox/InfoBox';
import {Events, EventsSection} from './EventsMainStyle';
import EventsIcon from '../../assets/img/event-icon.png';
import SearchBar from '../SearchBar/SearchBar';
import EventsArray from '../../lib/Events';

const pageTitle='Događanja';

const name='How can we benefit from React Redux';

const button='Prijavi se na predavanje';

const EventsMain=()=>{
    const [events, setEvents]=useState('');
    const [selectedEvents, setSelectedEvents]=useState('');

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setEvents(EventsArray);
            setSelectedEvents(EventsArray);
        }, 1000);
        return()=>clearTimeout(timer);
    },[]);

    const searchEvents=(name)=>{
        const search=selectedEvents.filter(event=>event.title.toLowerCase().includes(name.toLowerCase()));
        return setEvents(search);
    }

    return(
        <main>
            <h1 class="PageTitle">{pageTitle}</h1>
            <EventsSection>
                <SearchBar backText="Search events" onValueChange={searchEvents}/>
            </EventsSection>
            <Events>
                {events==='' ? '' : events.map((events,index)=>(
                        <InfoBox key={index} url={EventsIcon} title={events.title} buttonText={button} hideEvent={false} />
                ))}
            </Events>
        </main>
    );
}

export default EventsMain;