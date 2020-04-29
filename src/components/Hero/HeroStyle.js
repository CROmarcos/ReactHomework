import styled from "styled-components";

export const HeroSection = styled.div`
    position: absolute;
    z-index: 1;
    left: calc((100% - 400px) / 2);
    top: calc((100% - 250px) / 2);
    width: 400px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 15px;
`;

export const HeroTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
`;

export const HeroOrganizer = styled.span`
    display: block;
    text-align: center;
    font-size: 30px;
    color: #c59613;
    margin-bottom: 30px;
`;

export const HeroDate = styled.p`
    text-align: center;
    font-size: 25px;
    color: #fff;
    margin-bottom: 20px;
`;