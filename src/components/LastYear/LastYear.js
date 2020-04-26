import React from 'react';
import {LastYearInner, LastYearTitle, LastYearAbout, LastYearPictureContainer, LastYearImage} from './LastYearStyle.js';
import About from '../../components/About/About';
import LastYearPic from '../../assets/img/last-year.jpg';

const sectionTitle='FOI tjedan karijera 2019';
const altText='FOI Careers 2019';

const LastYear=()=>{
    return(
        <LastYearInner>
            <LastYearTitle>{sectionTitle}</LastYearTitle>
            <LastYearAbout>
                <About leftSide={true}/>
            </LastYearAbout>
            <LastYearPictureContainer>
                <LastYearImage src={LastYearPic} alt={altText}/>
            </LastYearPictureContainer>
        </LastYearInner>
    );
}

export default LastYear;