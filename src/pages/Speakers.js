import React, { useEffect, useState } from 'react';
import InfoBox from '../components/InfoBox/InfoBox';
import { Page, PageTitle } from '../lib/GeneralStyles/PageStyle';
import SpeakersIcon from '../assets/img/speakers-icon.png';
import SearchBar from '../components/SearchBar/SearchBar';
import SpekaersArray from '../lib/Speakers';
import LoaderSpinner from '../components/Loader/Loader';

const pageTitle='Sudionici';

const button='Prati sudionika';

const Speakers=()=>{
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
            <PageTitle>{pageTitle}</PageTitle>
            {!speakers ? <LoaderSpinner/> : (
                <>
                    <section>
                        <SearchBar backText="Search speakers..." onValueChange={searchSpeakers}/>
                    </section>
                    <Page>
                        {speakers==='' ? '' : speakers.map((speakers,index)=>(
                            <InfoBox key={index} url={SpeakersIcon} title={speakers.title} buttonText={button} hideEvent={true} />
                    ))}
                    </Page>
                </>)
            }
        </main>
    );
}

export default Speakers;