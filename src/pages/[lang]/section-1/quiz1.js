import React, { useState, useEffect } from 'react';
import {
    Box,
    Select,
    Heading,
    Text,
    Stack,
    Flex,
    Button,
    Icon,
    IconButton,
    useToast 
} from '@chakra-ui/react';
import data from '@/data/section1/quiz.json';
import { Elsie, Poppins } from 'next/font/google';
import AudioButton from '@/components/AudioButton';
import { useRouter } from 'next/router';

import { Controller, useForm, useFieldArray } from 'react-hook-form';
import localforage from 'localforage';

import { BsFillSquareFill } from 'react-icons/bs'
const elsie = Elsie({ weight: '900', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Quiz({ pageData }) {
    const { push, query } = useRouter();
    const currLang = query.lang;

    const blue = ['#5151D2', 'blue'];
    const red = ['#D8695B', 'red'];
    const yellow = ['#D8A85B', 'yellow'];

    
    const rect = <Icon as={BsFillSquareFill} w={6} h={6} />;

    const toast = useToast();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, submitCount, isValid },
        getValues,
        control
    } = useForm();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "quiz1form1", // unique name for your Field Array
    });

    function handleClick() {
        const values = getValues().quiz1form1;
        //console.log(JSON.stringify(values, null, 2))

        //TODO: Change ! to !!
        if(!values.filter(value => Object.values(value).includes(undefined)).length != 0){
            toast({
                title: "Form Incomplete",
                description: "Please fill out the whole form to continue",
                status: 'warning',
                duration: 5000,
                isClosable: true
            });
            return;
        }

        localforage.setItem("section1quiz1", values, () => {
            console.log("done upload section1 quiz1");
            push(`/${currLang}/section-1/quiz2`);
            //localforage.getItem("section1quiz1", (err, val) => console.log(val));
        })
        //push(`/${currLang}/section-1/quiz2`);
    }

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
                <Box pt={8}>
                    <Stack direction='column'>
                        <Stack direction='row'>
                            <IconButton
                                rounded={4}
                                colorScheme='blue'
                                color={blue[0]}
                                variant="outline"
                                icon={rect}
                                cursor='default'
                            />
                            <Text fontWeight='semibold' pt={2} color='#5151D2' fontFamily={poppins.style.fontFamily} fontSize={'lg'}>{pageData.helper[0]}</Text>
                        </Stack>
                        <Stack direction='row'>
                            <IconButton
                                rounded={4}
                                colorScheme='red'
                                color={red[0]}
                                variant="outline"
                                icon={rect}
                                cursor='default'
                            />
                            <Text fontWeight='semibold' pt={2} color='#5151D2' fontFamily={poppins.style.fontFamily} fontSize={'lg'}>{pageData.helper[1]}</Text>
                        </Stack>
                        <Stack direction='row'>
                            <IconButton
                                rounded={4}
                                colorScheme='yellow'
                                color={yellow[0]}
                                variant="outline"
                                icon={rect}
                                cursor='default'
                            />
                            <Text fontWeight='semibold' pt={2} color='#5151D2' fontFamily={poppins.style.fontFamily} fontSize={'lg'}> {pageData.helper[2]}</Text>
                        </Stack>
                    </Stack>
                </Box>
                <Box py={16}>
                    <Flex
                        justifyContent='space-evenly'
                        rowGap={{ 'base': 2, 'lg': 4 }}
                        columnGap={{ 'base': 1, 'lg': 12 }}
                        flexDirection={'row'}
                        flexWrap={'wrap'}
                        flexBasis={'100%'}>

                        {[...Array(20)].map((el, idx) => {
                            return (
                                <Controller
                                    key={idx}
                                    control={control}
                                    name={`quiz1form1.${idx}.word${idx + 1}`}
                                    render={({ field: { value, onChange } }) => (
                                        <AudioButton
                                            selectedValue={value}
                                            onButtonClick={onChange}
                                            key={idx}
                                            audioSrc={`gsgsg${pageData.audiofiles[idx]}`}
                                            title={`Word ${idx + 1}`} />
                                    )}
                                />
                            )
                        })}
                    </Flex>
                </Box>

                <Box position='absolute' right='16' pt={8} pb={4}>
                    {/* <Button onClick={(e) => handleDebug()}>debug</Button> */}
                    <Button
                        _hover={{ color: 'black' }}
                        size='lg'
                        rounded={32}
                        variant='solid'
                        color='#F5E3E3'
                        backgroundColor='#5151D2'
                        onClick={(e) => handleClick()}
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
