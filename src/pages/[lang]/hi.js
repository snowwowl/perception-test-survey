import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Heading,
    Text,
    Stack,
    Flex,
    Button
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import data from '@/data/hi.json'
import { Elsie, Poppins } from 'next/font/google';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Hi({ pageData }) {
    const { query, isReady, push } = useRouter();
    const currLang = query.lang;
    return (
        <>
            <Box height={'100vh'} mx={32} py={8}>
                <Heading fontFamily={elsie.style.fontFamily} fontSize='9xl' color='white'>{pageData.greeting}</Heading>
                {pageData.paras.map((el, idx) => {
                    return (
                        <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} key={idx} py={4} color='#5151D2'>
                            {el}
                        </Text>
                    )
                })}
                <Flex position='relative' paddingTop='10%' pb={4} justifyContent='flex-end'>
                    <Button
                        _hover={{ color: 'black' }}
                        size='lg'
                        rounded={32}
                        variant='solid'
                        color='#F5E3E3'
                        backgroundColor='#5151D2'
                        onClick={(e) => {push(`/${currLang}/intro-form`)}}
                        >
                        {pageData.button1}
                    </Button>
                </Flex>
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