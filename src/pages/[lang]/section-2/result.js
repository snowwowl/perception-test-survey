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

import { Elsie, Poppins } from 'next/font/google';
import { PieChart } from 'react-minimal-pie-chart';
import { useRouter } from 'next/router';
import ResultsChart from '@/components/ResultsChart';

import data from '@/data/answers.json';
import localforage from 'localforage';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Result() {
    const { push, query } = useRouter();
    const currLang = query.lang;
    const [correct, setCorrect] = useState(0);

    useEffect(() => {
        (async () => {
            const answers = data.quiz2;
            const q1 = await localforage.getItem("section2quiz1");
            const q2 = await localforage.getItem("section2quiz2");
            const q3 = await localforage.getItem("section2quiz3");
            const q4 = await localforage.getItem("section2quiz4");

            const sec2 = q1.concat(q2, q3, q4);
            console.log(sec2);
            let correct = 0;

            sec2.map((el, idx) => {
                if(el[`sent${idx+1}`] == answers[idx]) correct++;
            })
            console.log(correct);
            setCorrect(correct);
        })();
        return () => {
            // this now gets called when the component unmounts
        };
        // q1.map((el) => console.log(el));
    }, [])

    return (
        <>
            <Box height='100vh'>
                <Flex
                    pt={8}
                    justifyContent='center'
                    alignItems='center'

                >
                    <Text fontFamily={elsie.style.fontFamily} color='white' fontWeight={'bold'} fontSize={'8xl'}>Result..</Text>
                </Flex>

                {/* Add chart here */}
                <ResultsChart correct={correct} incorrect={40 - correct} />

                <Flex justifyContent='center' alignItems='center' pt={8} pb={4}>
                    <Button
                        _hover={{ color: 'black' }}
                        size='lg'
                        rounded={32}
                        variant='solid'
                        color='#F5E3E3'
                        backgroundColor='#5151D2'
                        onClick={(e) => {
                            push(`/${currLang}/section-3/`)
                        }}
                    >
                        Continue
                    </Button>
                </Flex>
            </Box>
        </>
    )
}