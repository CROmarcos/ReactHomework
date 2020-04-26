import styled from "styled-components";
import {Link} from 'react-router-dom';

export const HeaderMain = styled.header`
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #fff;
    width: 100%;
    height: 80px;
`;

export const HeaderMainInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const LogoContainer = styled(Link)`
    width: 80px;
    height: 70px;
    margin-top: 5px;
    float: left;
`;

export const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;