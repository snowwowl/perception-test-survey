import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Flex,
    Select,
    Textarea,
    Button
} from '@chakra-ui/react';
import data from '@/data/intro.json'
import { Elsie, Poppins } from 'next/font/google';
import { PieChart } from 'react-minimal-pie-chart';


const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const dataMock = [
    { title: 'Incorrect', value: 75, color: '#EFA78D' },
    { title: 'Correct', value: 25, color: '#9797EF' }
]
const shiftSize = 2;

export default function IntroResult() {
    return (
        <>
            <Box height='100vh'>
                <PieChart
                    data={dataMock}
                    radius={40 - shiftSize}
                    segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                    label={({ dataEntry }) => dataEntry.value + "% " + dataEntry.title}
                    labelStyle={(index) => ({
                        fill: 'white',
                        fontSize: '2px'
                    })}
                />
            </Box>
        </>
    )
}