import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Stack,
    Button,
    Text,
    Heading,
    Flex
} from '@chakra-ui/react';
import { Elsie, Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
const elsie = Elsie({ weight: '900', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });


export default function TestComplete() {
    const {push, query} = useRouter();
    const currLang = query.lang;
    return (
        <>
            <Box
                height={'100vh'}
                backgroundColor={'#5151D2'}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    textAlign={'center'}
                    minH={'100vh'}
                >

                    <Stack direction='column' justifyContent='center' alignItems={'center'}>
                    <Text
                        fontFamily={poppins.style.fontFamily}
                        color='#F5E3E3'
                        fontSize={'lg'}
                        py={8}
                    >
                        This completes the test. Ready to see your score?
                    </Text>
                        <Button
                            px={12}
                            _hover={{ color: 'black' }}
                            size='lg'
                            rounded={32}
                            variant='outline'
                            color='#F5E3E3'
                            backgroundColor='#5151D2'
                            w='60%'
                            onClick={(e) => {
                                push(`/${currLang}/section-3/result`)
                            }}
                        >
                            Yes, let's go!
                        </Button>
                    </Stack>

                    


                </Box>



            </Box>


        </>
    )
}
