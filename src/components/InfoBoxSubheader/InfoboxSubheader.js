import React from 'react';
import {InfoBoxSubheaderBox, InfoBoxSubheaderFigure, InfoBoxSubheaderImage} from './InfoBoxSubHeaderStyle';

const InfoBoxSubheader=(props)=>{
    return(
        <InfoBoxSubheaderBox>
            <InfoBoxSubheaderFigure>
                <InfoBoxSubheaderImage src={props.icon} alt="Location icon"/>
            </InfoBoxSubheaderFigure>
            <span className="InfoBoxSubheaderText">{props.description}</span>
        </InfoBoxSubheaderBox>
    );
}

export default InfoBoxSubheader;