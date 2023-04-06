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

const elsie = Elsie({ weight: '900', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Quiz({pageData}) {
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

                <Box>
                    
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
