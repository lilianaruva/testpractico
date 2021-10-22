import React from 'react';
//components
import PriceEvolution from './PriceEvolution';
import ComparativeAnalysis from './ComparativeAnalysis';

const General = () =>{
    return(
        <>
        <h1>General Performance Analysis</h1>
        <PriceEvolution/>
        <ComparativeAnalysis/>
        </>
    )
}

export default General;