import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Flex,
    Select,
    Divider,
    Button,
    Input
} from '@chakra-ui/react';
import data from '@/data/add-form.json'
import { Elsie, Poppins } from 'next/font/google';
import { useRouter } from 'next/router';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function AddForm({ pageData }) {
    const {push, query} = useRouter();
    const currLang = query.lang;
    return (
        <>
            <Box height={'100vh'} mx={32} py={8} >
                <Stack direction={'row'} spacing={16}>
                    <Stack direction={'column'} w='full' spacing={12} >
                        {pageData.quiz1.map((el, idx) => {
                            return (
                                <Box key={idx}>
                                    <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} py={1} color='#5151D2'>
                                        {el[0]}
                                    </Text>
                                    <Divider color='#5151D2' height={'2px'} w='100px' />
                                    <Input backgroundColor={'white'} width={'full'} variant={'filled'} placeholder={el[1]} />
                                </Box>
                            )
                        })}
                    </Stack>
                    <Stack direction={'column'} w='full' spacing={12} >
                        {pageData.quiz2.map((el, idx) => {
                            return (
                                <Box key={idx}>
                                    <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} py={1} color='#5151D2'>
                                        {el[0]}
                                    </Text>
                                    <Divider color='#5151D2' height={'2px'} w='100px' />
                                    <Input backgroundColor={'white'} width={'full'} variant={'filled'} placeholder={el[1]} />
                                </Box>
                            )
                        })}
                    </Stack>
                </Stack>
                <Flex position='relative' paddingTop='10%' pb={4} justifyContent='flex-end'>
                    <Button
                        _hover={{ color: 'black' }}
                        size='lg'
                        rounded={32}
                        variant='solid'
                        color='#F5E3E3'
                        backgroundColor='#5151D2'
                        onClick={(e) => { push(`/${currLang}/intro-result`) }}
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