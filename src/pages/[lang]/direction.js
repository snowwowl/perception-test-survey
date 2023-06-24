import React, { useState, useEffect } from 'react';
import {
    Box,
    Text,
    Heading,
    Flex,
    Button,
    UnorderedList,
    ListItem,
    ButtonGroup
} from '@chakra-ui/react';
import data from '@/data/direction.json';
import { Elsie, Poppins, Raleway } from 'next/font/google';
import { useRouter } from 'next/router';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: '400', subsets: ['latin'] });




export default function Direction({ pageData }) {
    const {push, query} = useRouter();
    const currLang = query.lang;
    
    return (
        <>
            <Box height={'100vh'} mx={32} py={8}>
                <Heading py={8} fontFamily={raleway.style.fontFamily} fontSize='4xl' color='white'>{pageData.greeting}</Heading>
                <UnorderedList>
                    {pageData.intro.map((el, idx) => {
                        return (
                            <ListItem fontFamily={poppins.style.fontFamily} fontSize={'xl'} key={idx} py={2} color='#5151D2'>
                                {el}
                            </ListItem>
                        )
                    })}

                </UnorderedList>

                <UnorderedList>
                    {pageData.sections.map((el, idx) => {
                        return (
                            <ListItem fontWeight='bold' fontFamily={poppins.style.fontFamily} fontSize={'xl'} key={idx} py={2} color='#5151D2'>
                                {el}
                            </ListItem>
                        )
                    })}
                </UnorderedList>

                <UnorderedList>
                    {pageData.points.map((el, idx) => {
                        return (
                            <ListItem fontFamily={poppins.style.fontFamily} fontSize={'xl'} key={idx} py={2} color='#5151D2'>
                                {el}
                            </ListItem>
                        )
                    })}
                </UnorderedList>

                <Flex paddingTop='10%' pb={4} justifyContent='space-between'>
                    <Text
                        fontFamily={poppins.style.fontFamily} fontSize={'md'} py={2} color='#5151D2'
                    >
                        {pageData.footer}
                    </Text>
                    <ButtonGroup>
                        <Button
                            _hover={{ color: 'black' }}
                            size='lg'
                            rounded={32}
                            variant='solid'
                            color='#F5E3E3'
                            backgroundColor='#5151D2'
                            onClick={(e) => { push(`/${currLang}/section-1/`) }}
                        >
                            {currLang == 'en' ? "Okay, Let's begin" : "শুরু করা যাক"}
                        </Button>
                    </ButtonGroup>

                </Flex>
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