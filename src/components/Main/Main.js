import React from 'react';
import './Main.css';
import Hero from '../../components/Hero/Hero';
import More from '../../components/More/More';

const Main=()=>{
    return(
        <div className="Main">
            <section className="Main-SectionHero">
                <div className="Main-SectionHero-Inner">
                    <div className="Main-SectionHero-Container">
                        <Hero />
                    </div>
                </div>
            </section>
            <section className="Main-SectionMore">
                <More />
            </section>
        </div>
        
    );
}

export default Main;