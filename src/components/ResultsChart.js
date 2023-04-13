import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function ResultsChart(props) {
    const corperc = +((props.correct * 100) / (props.correct + props.incorrect)).toFixed(2);
    const incorperc = +(100 - corperc).toFixed(2);
    const dataMock = [
        { title: 'Incorrect', value: incorperc, fontcolor: '#D27351', color: '#EFA78D' },
        { title: 'Correct', value: corperc, fontcolor: '#5151D2', color: '#9797EF' }
    ]
    const shiftSize = 1;
    return (
        <>
            <PieChart
                data={dataMock}
                radius={35 - shiftSize}
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