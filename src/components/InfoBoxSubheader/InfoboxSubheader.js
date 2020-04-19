import React from 'react';
import './InfoBoxSubheader.scss';

const InfoBoxSubheader=(props)=>{
    return(
        <div className="InfoBox-SubheaderBox">
            <figure className="InfoBox-SubheaderBox-Figure">
                <img src={props.icon} alt="Location icon"/>
            </figure>
            <span className="InfoBox-SubheaderBox-Text">{props.description}</span>
        </div>
    );
}

export default InfoBoxSubheader;