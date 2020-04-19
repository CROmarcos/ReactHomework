import React from 'react';
import './InfoBoxSubheader.css';

const InfoBoxSubheader=(props)=>{
    return(
        <div className="InfoBox-SubheaderBox">
            <figure className="InfoBox-Subheader-Figure">
                <img src={props.icon} alt="Location icon"/>
            </figure>
            <span className="InfoBox-SubheaderBox">{props.description}</span>
        </div>
    );
}

export default InfoBoxSubheader;