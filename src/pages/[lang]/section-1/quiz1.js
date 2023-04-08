import React, { useState, useEffect } from 'react';
import {
    Box,
    Select,
    Heading,
    Text,
    Stack,
    Flex,
    Button
} from '@chakra-ui/react';
import data from '@/data/section1/quiz.json';
import { Elsie, Poppins } from 'next/font/google';
import AudioButton from '@/components/AudioButton';

const elsie = Elsie({ weight: '900', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Quiz({ pageData }) {
    return (
        <>
            <Box
                height={'100vh'}
                mx={32}
                py={16}
            >
                {pageData.quiz1.map((el, idx) => {
                    return (
                        <Text fontFamily={poppins.style.fontFamily} fontSize={'lg'} key={idx} py={1} color='#5151D2'>
                            {el}
                        </Text>
                    )
                })}
                <Box></Box>
                <Box py={16}>
                    <Flex
                        justifyContent='space-evenly'
                        rowGap={2}
                        columnGap={1}
                        flexDirection={'row'}
                        flexWrap={'wrap'}
                        flexBasis={'100%'}>
                        {[...Array(20)].map((el, idx) => <AudioButton key={idx} idx={idx + 1} />)}
                    </Flex>
                </Box>

                <Box position='absolute' right='16' pt={8} pb={4}>
                    <Button
                        _hover={{ color: 'black' }}
                        size='lg'
                        rounded={32}
                        variant='solid'
                        color='#F5E3E3'
                        backgroundColor='#5151D2'

                    >
                        Next
                    </Button>
                </Box>
            </Box>

        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { lang: 'en' } },
            { params: { lang: 'bn' } }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const lang = context.params.lang;

    return {
        props: {
            pageData: {
                ...data[lang],
            }
        }
    }
}
