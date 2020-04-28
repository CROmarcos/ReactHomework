import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MainNavi = styled.div`
    float: right;
`;

export const MainNaviList = styled.ul`
    list-style: none;
`;

export const MainNaviListItem = styled.li`
    display: inline-block;
    line-height: 80px;
    margin-right: 50px;

    &:last-child {
        margin-right: 0;
    }
`;

export const MainNaviLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.02em;
    transition: color 0.3s ease-out;

    &:hover {
        color: #c59613;
    }
`;