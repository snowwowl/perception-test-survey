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
import { RxSpeakerLoud } from 'react-icons/rx';
import { useRouter } from 'next/router';


const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

// <Button _hover={{color: 'black'}} size='lg' rounded={32} variant='solid' color='#F5E3E3' backgroundColor='#5151D2'>{pageData.button1}</Button>

export default function IntroForm({ pageData }) {
    const { push, query } = useRouter();
    const currLang = query.lang;

    useEffect(() => {
        console.log(pageData.forms[0])
    }, [])
    return (
        <>
            <Box height={'100vh'} mx={32} py={8}>
                {pageData.paras.map((el, idx) => {
                    return (
                        <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} key={idx} py={1} color='#5151D2'>
                            {el}
                        </Text>
                    )
                })}

                <Box mr='5%' pt={16}>
                    {pageData.forms.map((el, idx) => {
                        return (
                            <Flex key={idx} py={1} justifyContent='space-between'>
                                <Text
                                    fontFamily={poppins.style.fontFamily}
                                    fontSize={'lg'}
                                    py={1}
                                    color='#5151D2'
                                >
                                    {el.question}
                                </Text>
                                <Box >
                                    <Select variant='filled' width='250px' placeholder="Select option">
                                        {el.options.map((opt, idx) => {
                                            return (
                                                <option key={idx} value={idx}>{opt}</option>
                                            )
                                        })}
                                    </Select>
                                </Box>
                            </Flex>
                        )
                    })}

                    <Flex py={1}  justifyContent='space-between'>
                        <Text
                            fontFamily={poppins.style.fontFamily}
                            fontSize={'lg'}
                            py={1}
                            color='#5151D2'
                        >
                            {pageData.form2[0]}
                        </Text>
                        <Textarea variant={'filled'} width='300px' placeholder={pageData.form2[1]}/>                        
                    </Flex>

                    <Flex py={16}  justifyContent='space-between'>
                        <Text
                            fontFamily={poppins.style.fontFamily}
                            fontSize={'lg'}
                            py={1}
                            color='#5151D2'
                        >
                            {pageData.form3[0]}
                        </Text>
                        <Button onClick={(e) => {push(`/${currLang}/add-form`)}} px={12} _hover={{color: 'black'}} size='lg' rounded={32} variant='solid' color='#F5E3E3' backgroundColor='#5151D2'>{pageData.form3[1]}</Button>
                    </Flex>
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