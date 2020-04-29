import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderBar, Spinner } from './LoaderStyle';

const LoaderSpinner=()=>{
    return(
        <LoaderBar>
            <Spinner type="puff" color="black" width={100} height={100}/>
        </LoaderBar>
    );
}

export default LoaderSpinner;