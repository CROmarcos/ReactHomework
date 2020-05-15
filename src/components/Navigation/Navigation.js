import React, {useState, useEffect} from 'react';
import {MainNavi, MainNaviList, MainNaviListItem, MainNaviLink} from './NavigationStyle.js';

const links={
    speakers: 'Sudionici',
    events: 'Događanja',
    contacts: 'Kontakt',
    login: 'Prijavi se',
    logout: 'Odjavi se',
}

const Navigation=()=>{
    const [isAuth,setIsAuth]=useState(false);

    useEffect(()=>{
        if(localStorage.getItem('token')!==null){
            setIsAuth(true);
        }
        else{
            setIsAuth(false);
        }
    },[]);

    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        setIsAuth(false);
    }

    return(
        <MainNavi>
            <MainNaviList>
                <MainNaviListItem>
                    <MainNaviLink to="/speakers">{links.speakers}</MainNaviLink>
                </MainNaviListItem>
                <MainNaviListItem>
                    <MainNaviLink to="/events">{links.events}</MainNaviLink>
                </MainNaviListItem>
                {!isAuth ?
                <>
                    <MainNaviListItem>
                        <MainNaviLink to="/register">{links.contacts}</MainNaviLink>
                    </MainNaviListItem>
                    <MainNaviListItem>
                        <MainNaviLink to="/login">{links.login}</MainNaviLink>
                    </MainNaviListItem>
                </> :
                    <MainNaviListItem>
                        <MainNaviLink to="/logout" onClick={handleLogout}>{links.logout}</MainNaviLink>
                    </MainNaviListItem>
                }
            </MainNaviList>
        </MainNavi>
    );
}

export default Navigation;