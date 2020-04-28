import styled from "styled-components";

export const SearchBarSection = styled.div`
    width: 100%;
    display: flex;
`;

export const SearchBarInput = styled.input`
    width: 400px;
    line-height: 50px;
    border: 1px solid #cecece;
    border-radius: 6px;
    margin: 0 auto;
    padding-left: 10px;

    &:focus {
        border-color: #c59613;
    }
`;