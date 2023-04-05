import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Heading,
    Text,
    Stack,
    Button,
    Flex,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import data from '@/data/hello.json'
import { Elsie, Poppins } from 'next/font/google';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Hello({ pageData }) {

    const { query, isReady, push } = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    
    const currLang = query.lang;

    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                size={'4xl'}

            >
                <AlertDialogOverlay />

                <AlertDialogContent backgroundColor='#5151D2' color='#F5E3E3'>
                    <AlertDialogCloseButton />
                    <AlertDialogBody paddingTop={8} fontSize='xl'>
                        Do you speak urban Bangla or a regional dialect at home?
                    </AlertDialogBody>
                    <AlertDialogFooter justifyContent={'center'}>
                        <Button onClick={(e) => {push(`/${currLang}/hi`)}} size='lg' rounded={32} variant='outline' borderColor='#5151D2' color='#5151D2' backgroundColor='#F5E3E3'>Yes, I do.</Button>
                        <Button mx={4} size='lg' onClick={(e) => {push(`/bye`)}} rounded={32} variant='outline' borderWidth={2} borderColor='#F5E3E3' backgroundColor='#5151D2' color='#F5E3E3'>No, I don't.</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <Box height={'100vh'} mx={32} py={8}>
                <Heading fontFamily={elsie.style.fontFamily} fontSize='9xl' color='white'>{pageData.greeting}</Heading>
                {pageData.paras.map((el, idx) => {
                    return (
                        <Text fontFamily={poppins.style.fontFamily} fontSize={'2xl'} key={idx} py={4} color='#5151D2'>
                            {el}
                        </Text>
                    )
                })}
                <Flex position='relative' marginTop='15%' justifyContent='flex-end'>
                    <Stack direction="row" spacing={4}>
                        <Button size='lg' onClick={(e) => {push(`/bye`)}} rounded={32} variant='solid' backgroundColor='#5151D2' color='#F5E3E3'>{pageData.button1}</Button>
                        <Button onClick={onOpen} size='lg' rounded={32} variant='outline' borderColor='#5151D2' color='#5151D2' backgroundColor='#F5E3E3'>{pageData.button2}</Button>
                    </Stack>
                </Flex>
            </Box>
        </>
    );
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