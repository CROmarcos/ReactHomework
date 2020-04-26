import React, { useEffect, useState } from 'react';
import InfoBox from '../InfoBox/InfoBox';
import './SpeakersMain.scss';
import SpeakersIcon from '../../assets/img/speakers-icon.png';
import SearchBar from '../SearchBar/SearchBar';
import SpekaersArray from '../../lib/Speakers';

const pageTitle='Sudionici';

const name={
    jbach: 'Johan Bach',
    sbach: 'Sebastian Bach',
    franck: 'Johan Franck',
    speck: 'Johan Speck',
    boe: 'Joe Boe',
    bow: 'El Bow',
}

const button='Prati sudionika';

const SpeakersMain=()=>{
    const [speakers, setSpeakers]=useState('');

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setSpeakers(SpekaersArray);
        }, 1000);
        return()=>clearTimeout(timer);
    },[]);

    return(
        <main>
            <h1 class="PageTitle">{pageTitle}</h1>
            <section>
                <SearchBar/>
            </section>
            <section className="Speakers-Names">
                {speakers===''}
                <InfoBox url={SpeakersIcon} title={name.jbach} buttonText={button} hideEvent={true} />
            </section>
        </main>
    );
}

export default SpeakersMain;