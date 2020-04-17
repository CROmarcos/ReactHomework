import React from 'react';
import './InfoBox.css';
import {Link} from 'react-router-dom';

const InfoBox=(props)=>{
    return(
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox-HeaderIcon">
                    <img src={props.url}/>
                </div>
                <h2 className="InfoBox-Title">{props.title}</h2>
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