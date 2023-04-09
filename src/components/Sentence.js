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
import {Howl} from 'howler';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Sentence({url, idx, onChange}) {
    const [loading, setLoading] = useState(true);
    const sound = new Howl({
        src: [url],
        autoplay: false,
        onend: () => {
            console.log('finished playing ' + idx);
        },
        html5: true,
        onload: () => {
            setLoading(false);
        }
    });

    const handleChange= (buttonName) => {
        onChange(buttonName);
        // setSelected(buttonName);
    }
    return (
        <>
            <Stack direction='row' spacing={6} justifyContent='space-evenly'>
            <Button
                variant='outline'
                rightIcon={<RxSpeakerLoud />}
                size={'lg'}
                _hover={{ backgroundColor: "#BEBEEF" }}
                color="#5151D2"
                onClick={(e) => {
                    console.log("started playing " + idx)
                    sound.play();
                }}
                isLoading={loading}
            >
                Sentence {idx}
            </Button>
                {/* <IconButton pb={2} fontSize='20px' color='blue' variant={'outline'} aria-label='Search database' icon={<MdOutlineAudiotrack />} /> */}
                <Select maxW="full" variant='filled' onChange={(e) => handleChange(e.target.value)}  placeholder="Select option">
                    <option>Urban Bengali Speaker (India)</option>
                    <option>Urban Bengali Speaker (Bangladesh)</option>
                    <option>Non-native Bengali Speaker</option>
                </Select>
            </Stack>
        </>
    )
}