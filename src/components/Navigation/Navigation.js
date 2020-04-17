import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const links={
    speakers: 'Sudionici',
    events: 'Događanja',
    /*
    contacts: 'Kontakt',
    login: 'Prijavi se',
    */
}

const Navigation=()=>{
    return(
        <div className="MainNavi">
            <ul className="MainNavi-List">
                <li className="MainNavi-ListItem">
                    <Link className="MainNavi-Link" to="/speakers">{links.speakers}</Link>
                </li>
                <li className="MainNavi-ListItem">
                    <Link className="MainNavi-Link" to="/events">{links.events}</Link>
                </li>
                {/*
                <li className="MainNavi-ListItem">
                    <Link className="MainNavi-Link" to="/">{links.contacts}</Link>
                </li>
                <li className="MainNavi-ListItem">
                    <Link className="MainNavi-Link" to="/">{links.login}</Link>
                </li>
                */}
            </ul>
        </div>
    );
}

export default Navigation;