import React from 'react';
import './InfoBox.scss';
import InfoBoxSubheader from '../InfoBoxSubheader/InfoboxSubheader';
import {Link} from 'react-router-dom';
import LocationIcon from '../../assets/img/location-icon.png';
import TimeIcon from '../../assets/img/time-icon.png';

const icon={
    location: LocationIcon,
    time: TimeIcon,
}

const description={
    location: 'Dvorana D09',
    time: '24.3. u 13:45h',
}

const InfoBox=(props)=>{
    return(
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div>
                    <img className="InfoBox-HeaderIcon" src={props.url}/>
                </div>
                <h2 className="InfoBox-Title">{props.title}</h2>
            </div>
            <div className={`InfoBox-Subheader ${props.hideEvent ? 'hidden' : ''}`}>
                <InfoBoxSubheader icon={icon.location} description={description.location}/>
                <InfoBoxSubheader icon={icon.time} description={description.time}/>
            </div>
            <p className="InfoBox-About">
                Latin literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one.
            </p>
            <div className="InfoBox-Footer">
                <Link className="InfoBox-Join">{props.buttonText}</Link>
            </div>
        </div>
    );
}

export default InfoBox;