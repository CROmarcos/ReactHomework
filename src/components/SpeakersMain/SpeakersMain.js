import React, { useEffect, useState } from 'react';
import InfoBox from '../InfoBox/InfoBox';
import './SpeakersMain.scss';
import SpeakersIcon from '../../assets/img/speakers-icon.png';
import SearchBar from '../SearchBar/SearchBar';
import SpekaersArray from '../../lib/Speakers';

const pageTitle='Sudionici';

const button='Prati sudionika';

const SpeakersMain=()=>{
    const [speakers, setSpeakers]=useState('');
    const [selectedSpeakers, setSelectedSpeakers]=useState('');

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setSpeakers(SpekaersArray);
            setSelectedSpeakers(SpekaersArray);
        }, 1000);
        return()=>clearTimeout(timer);
    },[]);

    const searchSpeakers=(name)=>{
        const search=selectedSpeakers.filter(speaker=>speaker.title.toLowerCase().includes(name.toLowerCase()));
        return setSpeakers(search);
    }

    return(
        <main>
            <h1 class="PageTitle">{pageTitle}</h1>
            <section>
                <SearchBar backText="Search speakers" onValueChange={searchSpeakers}/>
            </section>
            <section className="Speakers-Names">
                {speakers==='' ? '' : speakers.map((speakers,index)=>(
                    <InfoBox key={index} url={SpeakersIcon} title={speakers.title} buttonText={button} hideEvent={true} />
            ))}
            </section>
        </main>
    );
}

export default SpeakersMain;