import React from 'react';
import './HomeMain.scss';
import Hero from '../Hero/Hero';
import More from '../More/More';
import LastYear from '../LastYear/LastYear'

const HomeMain=()=>{
    return(
        <main>
            <section className="HomeMain-SectionHero">
                <div className="HomeMain-SectionHero-Inner">
                    <div className="HomeMain-SectionHero-Inner-Container">
                        <Hero />
                    </div>
                </div>
            </section>
            <section className="HomeMain-SectionMore">
                <More />
            </section>
            <section className="HomeMain-SectionLastYear">
                <LastYear />
            </section>
        </main>        
    );
}

export default HomeMain;