import React from 'react';
import './LastYear.scss';
import About from '../../components/About/About';
import LastYearPic from '../../assets/img/last-year.jpg';

const sectionTitle='FOI tjedan karijera 2019';
const altText='FOI Careers 2019';

const LastYear=()=>{
    return(
        <div className="LastYear-Inner">
            <h2 className="LastYear-Inner-Title">{sectionTitle}</h2>
            <section className="LastYear-Inner-About">
                <About leftSide={true}/>
            </section>
            <figure>
                <img src={LastYearPic} alt={altText}/>
            </figure>
        </div>
    );
}

export default LastYear;