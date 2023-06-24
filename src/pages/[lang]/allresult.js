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
            const answers1 = data.quiz1;
            const answers2 = data.quiz2;
            const answers3 = data.quiz3;
            
            //SECTION1
            const sec1q1 = await localforage.getItem("section1quiz1");
            const sec1q2 = await localforage.getItem("section1quiz2");
            const sec1 = sec1q1.concat(sec1q2);
            let correct1 = 0;
            
            sec1.map((el, idx) => {
                if(el[`word${idx+1}`] == answers1[idx]) correct1++;
            });

            //SECTION2
            const sec2q1 = await localforage.getItem("section2quiz1");
            const sec2q2 = await localforage.getItem("section2quiz2");
            const sec2q3 = await localforage.getItem("section2quiz3");
            const sec2q4 = await localforage.getItem("section2quiz4");
            const sec2 = sec2q1.concat(sec2q2, sec2q3, sec2q4);
            let correct2 = 0;

            sec2.map((el, idx) => {
                if(el[`sent${idx+1}`] == answers2[idx]) correct2++;
            });

            //SECTION3
            const sec3 = await localforage.getItem("quiz3form1")
            let correct3 = 0;

            sec3.map((el, idx) => {
                if(el[`clip${idx+1}`] == answers3[idx]) correct3++;
            })
            
            const correct = correct1 + correct2 + correct3;
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
                    <Text fontFamily={poppins.style.fontFamily} color='#5151D2' fontWeight='bold' fontSize={'xl'}>Overall</Text>
                </Stack>
                

                {/* Add chart here */}
                <ResultsChart correct={correct} incorrect={102 - correct} />

                <Flex justifyContent='center' alignItems='center' pt={8} pb={4}>
                    <Button
                        _hover={{ color: 'black' }}
                        size='lg'
                        rounded={32}
                        variant='solid'
                        color='#F5E3E3'
                        backgroundColor='#5151D2'
                        onClick={(e) => {
                            push(`/completed`)
                        }}
                    >
                        Continue
                    </Button>
                </Flex>
            </Box>
        </>
    )
}