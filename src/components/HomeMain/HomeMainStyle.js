import styled from "styled-components";
import backImage from '../../assets/img/event.jpg';

export const HomeMainHero = styled.section`
    position: relative;
    height: 500px;
    width: 100%;
    background: url(${backImage})  rgba(0, 0, 0, 0.69);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-blend-mode: multiply;
`;

export const HomeMainHeroInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const HomeMainHeroContainer = styled.div`
    position: relative;
    height: 500px;
    width: 1280px;
`;

export const HomeMainMore = styled.section`
    padding: 70px 0;
    overflow-y: hidden;
`;

export const HomeMainLastYear = styled.section`
    clear: both;
    overflow: hidden;
    padding: 70px 0;
    background: #efefef;
`;