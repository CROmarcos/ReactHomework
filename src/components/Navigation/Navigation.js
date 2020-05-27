import React, { useContext } from 'react';
import { MainNavi, MainNaviList, MainNaviListItem, MainNaviLink } from './NavigationStyle.js';
import { AuthContext } from '../../context/AuthContext.js';

const links={
    speakers: 'Speakers',
    events: 'Events',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
}

const Navigation=()=>{
    const auth=useContext(AuthContext);

    const handleLogout=(e)=>{
        localStorage.removeItem('token');
        auth.logout();
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
                {!auth.isLoggedIn ?
                <>
                    <MainNaviListItem>
                        <MainNaviLink to="/register">{links.register}</MainNaviLink>
                    </MainNaviListItem>
                    <MainNaviListItem>
                        <MainNaviLink to="/login">{links.login}</MainNaviLink>
                    </MainNaviListItem>
                </> :
                    <MainNaviListItem>
                        <MainNaviLink to="/" onClick={handleLogout}>{links.logout}</MainNaviLink>
                    </MainNaviListItem>
                }
            </MainNaviList>
        </MainNavi>
    );
}

export default Navigation;