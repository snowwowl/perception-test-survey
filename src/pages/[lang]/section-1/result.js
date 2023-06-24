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
            const answers = data.quiz1;
            const q1 = await localforage.getItem("section1quiz1");
            const q2 = await localforage.getItem("section1quiz2");

            const sec1 = q1.concat(q2);
            let correct = 0;

            sec1.map((el, idx) => {
                if(el[`word${idx+1}`] == answers[idx]) correct++;
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
            <Stack
                    pt={8}
                    justifyContent='center'
                    alignItems='center'
                    direction='column'
                    spacing={1}
                >
                    <Text fontFamily={elsie.style.fontFamily} color='white' fontWeight={'bold'} fontSize={'8xl'}>Result..</Text>
                    <Text fontFamily={poppins.style.fontFamily} color='#5151D2' fontWeight='bold' fontSize={'md'}>Section-1</Text>
                </Stack>

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
                            push(`/${currLang}/section-2/`)
                        }}
                    >
                        Continue
                    </Button>
                </Flex>
            </Box>
        </>
    )
}