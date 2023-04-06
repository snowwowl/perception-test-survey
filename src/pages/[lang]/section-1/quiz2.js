import React, { useState, useEffect } from 'react';
import {
    Box,
    Select,
    Heading,
    Text,
    Stack,
    Flex,
    Button
} from '@chakra-ui/react';


export default function Quiz({pageData}) {
    return (
        <>
            <Box
                height={'100vh'}
                mx={32}
                py={16}
            >
                
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
