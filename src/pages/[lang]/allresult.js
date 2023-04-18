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
            const answers = data.quiz3;
            
            const sec3 = await localforage.getItem("quiz3form1")
            let correct = 0;

            sec3.map((el, idx) => {
                if(el[`clip${idx+1}`] == answers[idx]) correct++;
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
                            push(`/${currLang}/final-form/`)
                        }}
                    >
                        Continue
                    </Button>
                </Flex>
            </Box>
        </>
    )
}