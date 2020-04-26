import React from 'react';
import {MainNavi, MainNaviList, MainNaviListItem, MainNaviLink} from './NavigationStyle.js';

const links={
    speakers: 'Sudionici',
    events: 'Događanja',
    contacts: 'Kontakt',
    login: 'Prijavi se',
}

const Navigation=()=>{
    return(
        <MainNavi>
            <MainNaviList>
                <MainNaviListItem>
                    <MainNaviLink to="/speakers">{links.speakers}</MainNaviLink>
                </MainNaviListItem>
                <MainNaviListItem>
                    <MainNaviLink to="/events">{links.events}</MainNaviLink>
                </MainNaviListItem>
                <MainNaviListItem>
                    <MainNaviLink to="/">{links.contacts}</MainNaviLink>
                </MainNaviListItem>
                <MainNaviListItem>
                    <MainNaviLink to="/">{links.login}</MainNaviLink>
                </MainNaviListItem>
            </MainNaviList>
        </MainNavi>
    );
}

export default Navigation;