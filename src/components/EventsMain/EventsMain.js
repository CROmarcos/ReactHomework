import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import './EventsMain.scss';
import EventsIcon from '../../assets/img/event-icon.png';

const pageTitle='Događanja';

const name='How can we benefit from React Redux';

const button='Prijavi se na predavanje';

const EventsMain=()=>{
    return(
        <main>
            <h1 class="PageTitle">{pageTitle}</h1>
            <section className="Events">
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
                <InfoBox url={EventsIcon} title={name} buttonText={button} hideEvent={false}/>
            </section>
        </main>
    );
}

export default EventsMain;