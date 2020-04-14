import React from 'react';
import {Link} from 'react-router-dom';

const links={
    speakers: 'Sudionici',
    events: 'Događanja',
    contacts: 'Kontakt',
    login: 'Prijavi se',
}

const Navigation=()=>{
    return(
        <div className="MainNavi">
            <ul className="MainNavi-List">
                {/*
                <li className="MainNavi-ListItem">
                    <link className="MainNavi-Link" to="/speakers">{links.speakers}</link>
                </li>
                <li className="MainNavi-ListItem">
                    <link className="MainNavi-Link" to="/events">{links.events}</link>
                </li>
                <li className="MainNavi-ListItem">
                    <link className="MainNavi-Link" to="/contacts">{links.contacts}</link>
                </li>
                <li className="MainNavi-ListItem">
                    <link className="MainNavi-Link" to="/login">{links.login}</link>
                </li>
                */}
            </ul>
        </div>
    );
}

export default Navigation;