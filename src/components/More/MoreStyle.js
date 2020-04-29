import styled from "styled-components";

export const MoreSection = styled.div``;

export const MoreCardContainer = styled.div`
    width: 1280px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);

    &::after {
        clear: both;
    }
`;