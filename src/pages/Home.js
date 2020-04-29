import React from 'react';
import HomeMain from '../components/HomeMain/HomeMain';
import Progress from 'rsup-progress';

const Home=()=>{
    const progress=new Progress();
    
    setTimeout(()=>{
        return progress.end();
    }, 1000);
  
    return(
        <>
            {progress.start()}
            <HomeMain/>
        </>
    );
}

export default Home;