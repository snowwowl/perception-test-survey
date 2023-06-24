import React, { useState, useEffect } from 'react';
import {
    Box,
    Text,
    Heading,
    Center,
    Button,
    Stack,
    Flex
} from '@chakra-ui/react';
import { Elsie, Poppins, Raleway } from 'next/font/google';
import { useRouter } from 'next/router';
import data from '@/data/consent.json';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });


export default function Consent({pageData}) {
    const { query, push } = useRouter();
    const currLang = query.lang;

    return (
        <>
            <Box
                height='100vh'
                bg='#5151D2'
                color='#F5E3E3'
                fontFamily={poppins.style.fontFamily}
            >
                <Center w='100%' pt={16}>
                    <Stack justifyContent='center' alignItems='center' direction='column'>
                        <Heading py={16} fontFamily={raleway.style.fontFamily} size='3xl'>{pageData.title}</Heading>
                        <Stack fontSize='lg' direction='column' spacing={2}>
                            {pageData.paras.map((el, idx) => {
                                return(
                                    <Text key={idx}>{el}</Text>
                                )
                            })}    
                        
                        </Stack>
                        <Box py={4} />
                        <Stack w="100%" border="1px" rounded={16} borderColor='blackAlpha.400' justifyContent='center' alignItems='center' py={8} direction='column'>
                            <Text>{pageData.q1}</Text>
                            <Stack  py={4} direction='row' spacing={4}>
                                <Button
                                    variant='solid'
                                    color='#5151D2'
                                    backgroundColor='#F5E3E3'
                                    rounded='full'
                                    size='lg'
                                    height='80px'
                                    width='240px'
                                    whiteSpace='initial'
                                    onClick={(e) => {
                                        push(`/${currLang}/direction/`)
                                    }}
                                >
                                    {pageData.yes}
                                </Button>

                                <Button
                                    
                                    variant='outline'
                                    rounded='full'
                                    size='lg'
                                    height='80px'
                                    width='240px'
                                    _hover={{
                                        backgroundColor: 'blackAlpha.400'
                                    }}
                                    onClick={(e) => {
                                        push(`/${currLang}/bye`)
                                    }}
                                >
                                    {pageData.no}
                                </Button>
                            </Stack>
                        </Stack>

                    </Stack>

                </Center>

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