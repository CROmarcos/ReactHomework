import styled from "styled-components";
import Loader from "react-loader-spinner";

export const LoaderBar = styled.div`
    width: 100%;
    display: flex;
`;

export const Spinner = styled(Loader)`
    margin: 0 auto;
`;