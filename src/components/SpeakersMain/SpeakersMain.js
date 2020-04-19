import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import './SpeakersMain.css';
import SpeakersIcon from '../../assets/img/speakers-icon.png';

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
    return(
        <main>
            <h1 class="PageTitle">{pageTitle}</h1>
            <section className="Speakers-Names">
                <InfoBox url={SpeakersIcon} title={name.jbach} buttonText={button} hideEvent={true} />
                <InfoBox url={SpeakersIcon} title={name.sbach} buttonText={button} hideEvent={true}/>
                <InfoBox url={SpeakersIcon} title={name.franck} buttonText={button} hideEvent={true}/>
                <InfoBox url={SpeakersIcon} title={name.speck} buttonText={button} hideEvent={true}/>
                <InfoBox url={SpeakersIcon} title={name.boe} buttonText={button} hideEvent={true}/>
                <InfoBox url={SpeakersIcon} title={name.bow} buttonText={button} hideEvent={true}/>
            </section>
        </main>
    );
}

export default SpeakersMain;