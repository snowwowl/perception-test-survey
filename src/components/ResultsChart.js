import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function ResultsChart(props) {
    const dataMock = [
        { title: 'Incorrect', value: props.correct, fontcolor: '#D27351', color: '#EFA78D' },
        { title: 'Correct', value: props.incorrect, fontcolor: '#5151D2', color: '#9797EF' }
    ]
    const shiftSize = 1;
    return (
        <>
            <PieChart
                data={dataMock}
                radius={40 - shiftSize}
                segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                label={({ dataEntry }) => dataEntry.value + "% " + dataEntry.title}
                labelPosition={125}
                labelStyle={(index) => ({
                    fill: dataMock[index].fontcolor,
                    stroke: dataMock[index].fontcolor,
                    strokeWidth: '0.1px',
                    fontSize: '5px',
                    backgroundColor: '#9797EF',
                    fontFamily: poppins.style.fontFamily,
                })}
                animate
            />

        </>
    )
}