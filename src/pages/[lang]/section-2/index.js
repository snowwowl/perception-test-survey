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
    Button,

} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Elsie, Poppins } from 'next/font/google';

const elsie = Elsie({ weight: '900', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Section2() {
    const {push, query} = useRouter();
    const currLang = query.lang;
    return (
        <>
            <Container maxW='4xl'>

                <Stack
                    as={Flex}
                    textAlign='center'
                    alignItems={'center'}
                    justifyContent='center'
                    spacing={{ base: 4, md: 4 }}
                    paddingTop={{ base: 20, md: 36 }}
                >
                    <Text
                        fontFamily={poppins.style.fontFamily}
                        color='#9797EF'
                        fontSize={'lg'}
                    >
                        {query.lang == 'bn' ? 'অংশ ২' : 'Section 2'}
                    </Text>
                    <Text
                        fontFamily={elsie.style.fontFamily}
                        color='white'
                        fontSize='12em'
                    >
                        {query.lang == 'bn' ? 'বাক্যমালা': 'Sentences'}
                    </Text>
                    <Box w='40%'>
                        <Button
                            px={12}
                            _hover={{ color: 'black' }}
                            size='lg'
                            rounded={32}
                            variant='solid'
                            color='#F5E3E3'
                            backgroundColor='#5151D2'
                            onClick={(e) => {
                                push(`/${currLang}/section-2/quiz1`)
                            }}
                        >
                            Continue
                        </Button>
                    </Box>
                </Stack>
            </Container>

        </>
    )
}