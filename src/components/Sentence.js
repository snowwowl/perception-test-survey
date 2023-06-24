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

export default function Sentence({url, idx, onChange, lang}) {
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
                {lang == 'en' ? "Sentence" : "বাক্য"} {idx}
            </Button>
                {/* <IconButton pb={2} fontSize='20px' color='blue' variant={'outline'} aria-label='Search database' icon={<MdOutlineAudiotrack />} /> */}
                <Select maxW="full" variant='filled' onChange={(e) => handleChange(e.target.value)}  placeholder={lang == 'en' ? "Select option" : "বক্তার সঠিক শ্রেণী বাছুন"}>
                    <option>{lang == 'en' ? "Urban Bengali Speaker (India)" : "ভারতীয়, শহুরে বাঙালী"}</option>
                    <option>{lang == 'en' ? "Urban Bengali Speaker (Bangladesh)" : "বাংলাদেশীয়, শহুরে বাঙালী"}</option>
                    <option>{lang == 'en' ? "Non-native Bengali Speaker" : "অবাঙালী"}</option>
                </Select>
            </Stack>
        </>
    )
}