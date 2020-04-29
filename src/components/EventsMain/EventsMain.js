import React, { useEffect, useState } from 'react';
import InfoBox from '../InfoBox/InfoBox';
import { Page } from '../../lib/GeneralStyles/PageStyle';
import EventsIcon from '../../assets/img/event-icon.png';
import SearchBar from '../SearchBar/SearchBar';
import EventsArray from '../../lib/Events';

const pageTitle='Događanja';

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
            <section>
                <SearchBar backText="Search events..." onValueChange={searchEvents}/>
            </section>
            <Page>
                {events==='' ? '' : events.map((events,index)=>(
                        <InfoBox key={index} url={EventsIcon} title={events.title} buttonText={button} hideEvent={false} />
                ))}
            </Page>
        </main>
    );
}

export default EventsMain;