import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { LoaderBar } from './LoaderStyle';

const Loader=()=>{
    return(
        <LoaderBar>
            <Loader type="puff" width={100} height={100}/>
        </LoaderBar>
    );
}

export default Loader;