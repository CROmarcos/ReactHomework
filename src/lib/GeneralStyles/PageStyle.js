import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page=styled.section`
    display: block;
    max-width: 350px;
    margin: 0 auto;
    padding: 0 15px;
    margin-bottom: 40px;

    & InfoBox {
        margin-bottom: 40px;
    }

    @media(min-width: 576px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        max-width: 1024px;

        & InfoBox {
            margin: inherit;
        }
    }
    
    @media(min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(min-width: 1024px){
        gap: 30px;
        padding: 0;
    }
`;

export const PageTitle = styled.h1`
    text-align: center;
    padding: 30px 0 60px;
    font-size: 30px;
  `;

  export const Button = styled(Link)`
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
    margin-bottom: 40px;

    &:hover {
        background-color: #9e7911;
    }
  `;