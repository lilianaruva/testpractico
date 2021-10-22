import React from 'react';
//components
import PriceEvolution from './PriceEvolution';
import ComparativeAnalysis from './ComparativeAnalysis';
import PresenceShare from './PresenceShare';

const General = () =>{
    return(
        <>
        <div style={{margin: "2rem"}}>
        <h1>General Performance Analysis</h1>
        <PriceEvolution/>
        <PresenceShare/>
        <ComparativeAnalysis/>
        </div>
        </>
    )
}

export default General;