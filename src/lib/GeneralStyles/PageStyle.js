import styled from "styled-components";

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