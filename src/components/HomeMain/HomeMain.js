import React from 'react';
import {HomeMainHero, HomeMainHeroInner, HomeMainHeroContainer, HomeMainMore, HomeMainLastYear} from './HomeMainStyle';
import Hero from '../Hero/Hero';
import More from '../More/More';
import LastYear from '../LastYear/LastYear';

const HomeMain=()=>{

    return(
        <main>
            <HomeMainHero>
                <HomeMainHeroInner>
                    <HomeMainHeroContainer>
                        <Hero />
                    </HomeMainHeroContainer>
                </HomeMainHeroInner>
            </HomeMainHero>
            <HomeMainMore>
                <More />
            </HomeMainMore>
            <HomeMainLastYear>
                <LastYear />
            </HomeMainLastYear>
        </main>        
    );
}

export default HomeMain;