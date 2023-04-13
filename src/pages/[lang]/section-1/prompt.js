import React, { useState, useEffect } from 'react';
import {
    Box,
    Text,
    Heading,
    Center,
    Flex,
    Stack,
    Button
} from '@chakra-ui/react';
import { Elsie, Poppins } from 'next/font/google';
import { useRouter } from 'next/router';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });


export default function Prompt() {
    const {push, query} = useRouter();
    const currLang = query.lang;
    return (
        <>
            <Box
                height='100vh'
                bg='#5151D2'
                color='#F5E3E3'
                fontFamily={poppins.style.fontFamily}
            >
                <Center w='100%' h='100%'>
                    <Stack justifyContent='center' alignItems='center' direction='column'>
                        <Text fontSize='2xl'> This completes the first section of the test. </Text>
                        <Text fontSize='2xl'> Ready to see your score?</Text>
                        <Stack py={4} direction='row' spacing={4}>
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
                                    push(`/${currLang}/section-1/result`)
                                }}
                            >
                                Yes, let's go!
                            </Button>

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
                                    push(`/${currLang}/section-2/`)
                                }}
                            >
                                No, I’ll check my overall score later!
                            </Button>
                        </Stack>
                    </Stack>
                </Center>

            </Box>

        </>
    )
}