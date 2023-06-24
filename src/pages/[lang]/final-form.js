import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Stack,
    Button,
    Text,
    Heading,
    Flex,
    Textarea
} from '@chakra-ui/react';
import { Elsie, Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import {useForm} from 'react-hook-form';
import localforage from 'localforage';
import { app, database } from '@/components/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import data from '@/data/finalform.json';

const elsie = Elsie({ weight: '900', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function FinalForm({ pageData }) {
    const { push, query } = useRouter();
    const currLang = query.lang;

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, submitCount, isValid },
        getValues,
        control
    } = useForm();

    async function handleClick(){
        console.log("TEST COMPLETE");
        const values = getValues();
        console.log(JSON.stringify(values, null, 2));

        // const finalObj = {
        //     addform: {},
        //     introform: {},
        //     section1quiz1: {},
        //     section1quiz2: {},
        //     section2quiz1: {},
        //     section2quiz2: {},
        //     section2quiz3: {},
        //     section2quiz4: {},
        //     quiz3form1: {}
        // }
        
        const addform = await localforage.getItem("addform");
        addform.map((el, idx) => {
            addform[idx] = el.value;
        })
        console.log(addform);

        const introform = await localforage.getItem("introform");
        introform.map((el, idx) => {
            introform[idx] = el.value;
        })
        console.log(introform);

        const section1quiz1 = await localforage.getItem("section1quiz1");
        const s1q1 = {}
        section1quiz1.map((el, idx) => {
            if(Object.values(el)[0] == undefined){
                s1q1[Object.keys(el)[0]] = '';
                return;
            }
            s1q1[Object.keys(el)[0]] = Object.values(el)[0];
        })
        
        
        const section1quiz2 = await localforage.getItem("section1quiz2");
        const s1q2 = {}
        section1quiz2.map((el, idx) => {
            if(Object.values(el)[0] == undefined){
                s1q2[Object.keys(el)[0]] = '';
                return;
            }
            s1q2[Object.keys(el)[0]] = Object.values(el)[0];
        })

        const section2quiz1 = await localforage.getItem("section2quiz1");
        const s2q1 = {}
        section2quiz1.map((el, idx) => {
            if(Object.values(el)[0] == undefined){
                s2q1[Object.keys(el)[0]] = '';
                return;
            }
            s2q1[Object.keys(el)[0]] = Object.values(el)[0];
        })
        
        const section2quiz2 = await localforage.getItem("section2quiz2");
        const s2q2 = {}
        section2quiz2.map((el, idx) => {
            if(Object.values(el)[0] == undefined){
                s2q2[Object.keys(el)[0]] = '';
                return;
            }
            s2q2[Object.keys(el)[0]] = Object.values(el)[0];
        })

        const section2quiz3 = await localforage.getItem("section2quiz3");
        const s2q3 = {}
        section2quiz3.map((el, idx) => {
            if(Object.values(el)[0] == undefined){
                s2q3[Object.keys(el)[0]] = '';
                return;
            }
            s2q3[Object.keys(el)[0]] = Object.values(el)[0];
        })

        const section2quiz4 = await localforage.getItem("section2quiz4");
        const s2q4 = {}
        section2quiz4.map((el, idx) => {
            if(Object.values(el)[0] == undefined){
                s2q4[Object.keys(el)[0]] = '';
                return;
            }
            s2q4[Object.keys(el)[0]] = Object.values(el)[0];
        })

        const section3quiz1 = await localforage.getItem("quiz3form1");
        const s3q1 = {}
        section3quiz1.map((el, idx) => {
            if(Object.values(el)[0] == undefined){
                s3q1[Object.keys(el)[0]] = '';
                return;
            }
            s3q1[Object.keys(el)[0]] = Object.values(el)[0];
        })
        

        const finalObj = {
            addform,
            introform,
            s1q1,
            s1q2,
            s2q1,
            s2q2,
            s2q3,
            s2q4,
            s3q1,
            values
        }
        
        
        // console.log(finalObj);


        const dbInstance = collection(database, 'surveydata');

        addDoc(dbInstance, finalObj).then((docRef) => {
            console.log(docRef);
            console.log("FINISHED");
            push(`/${currLang}/allresult`)
        })
    }

    return (
        <>
            <Box
                height={'100vh'}
                backgroundColor={'#9797EF'}
                px={32}
                py={16}
                
            >
                <Box pb={16}>
                    <Text fontFamily={poppins.style.fontFamily} fontSize={'lg'} py={2} color='white'>
                        {pageData.title}
                    </Text>
                    <Text fontFamily={poppins.style.fontFamily} fontWeight={'bold'} fontSize={'lg'} py={2} color='white'>
                        {pageData.q1}
                    </Text>
                </Box>
                <Box fontFamily={poppins.style.fontFamily}>
                    <Stack direction={'column'} spacing={8}>
                        <Box>
                            <Text fontFamily={poppins.style.fontFamily} fontSize={'lg'} py={2} color='white'>
                            {pageData.q2}
                            </Text>
                            <Textarea {...register("final1")} height={'120px'} variant={'filled'} placeholder={pageData.placeholder} rounded={8} w='full' />
                        </Box>

                        <Box>
                            <Text fontFamily={poppins.style.fontFamily} fontSize={'lg'} py={2} color='white'>
                                {pageData.q3}
                            </Text>
                            <Textarea {...register("final2")} height={'120px'} variant={'filled'} placeholder={pageData.placeholder} rounded={8} w='full' />
                        </Box>

                        <Box>
                            <Text fontFamily={poppins.style.fontFamily} fontSize={'lg'} py={2} color='white'>
                                {pageData.q4}
                            </Text>
                            <Textarea {...register("final3")} height={'120px'} variant={'filled'} placeholder={pageData.placeholder} rounded={8} w='full' />
                        </Box>

                    </Stack>

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
                            Submit
                        </Button>
                    </Box>
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