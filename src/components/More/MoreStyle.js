import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoreSection = styled.div``;

export const MoreCardContainer = styled.div`
    width: 1280px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);

    &::after {
        clear: both;
    }
`;

export const MoreFindOut = styled(Link)`
    display: block;
    text-decoration: none;
    width: 160px;
    line-height: 40px;
    text-transform: uppercase;
    text-align: center;
    background-color: #c59613;
    border-radius: 6px;
    font-weight: 700;
    color: #fff;
    transition: all 0.3s ease-out;
    margin: 0 auto;
    margin-bottom: 70px;

    &:hover {
        background-color: #9e7911;
    }
`;