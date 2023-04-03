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
import { Elsie, Poppins } from 'next/font/google';
import AudioButton from '@/components/AudioButtonTwo';

const elsie = Elsie({ weight: '900', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Quiz(){
    return(
        <>
        <Container py={8}>
            <Box>
                <AudioButton/>
                <Button sx={{backgroundColor: 'red'}}>Hello</Button>
            </Box>
        </Container>
            
        
        </>
    )
}