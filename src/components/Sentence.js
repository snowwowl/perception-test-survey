import React, { useState, useEffect } from 'react';
import {
    Stack,
    Text,
    IconButton,
    Select,
    Button
} from '@chakra-ui/react';
import { Poppins } from 'next/font/google';
import {RxSpeakerLoud} from 'react-icons/rx';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Sentence({url, idx}) {
    return (
        <>
            <Stack direction='row' spacing={6} justifyContent='space-evenly'>
            <Button
                variant='outline'
                rightIcon={<RxSpeakerLoud />}
                size={'lg'}
                _hover={{ backgroundColor: "#BEBEEF" }}
                color="#5151D2"
            >
                Sentence {idx}
            </Button>
                {/* <IconButton pb={2} fontSize='20px' color='blue' variant={'outline'} aria-label='Search database' icon={<MdOutlineAudiotrack />} /> */}
                <Select maxW="full" variant='filled'  placeholder="Select option">
                    <option>Urban Bengali Speaker (India)</option>
                    <option>Urban Bengali Speaker (Bangladesh)</option>
                    <option>Non-native Bengali Speaker</option>
                </Select>
            </Stack>
        </>
    )
}