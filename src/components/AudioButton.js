import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Button,
    IconButton,
    Icon
} from '@chakra-ui/react'
import { BsFillSquareFill } from 'react-icons/bs';
import { RxSpeakerLoud } from 'react-icons/rx'
import { Howl } from 'howler';

function darkerColor(rgbColor, factor = 0.2) {
    // Parse the hex color string to RGB values
    let r = parseInt(rgbColor.slice(1, 3), 16);
    let g = parseInt(rgbColor.slice(3, 5), 16);
    let b = parseInt(rgbColor.slice(5, 7), 16);

    // Calculate the darker RGB values
    r = Math.round(r * (1 - factor));
    g = Math.round(g * (1 - factor));
    b = Math.round(b * (1 - factor));

    // Convert back to hex color string and return
    return '#' + r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0');
}

const varToString = varObj => Object.keys(varObj)[0]

export default function AudioButton(props) {
    const [loading, setLoading] = useState(true);
    const rect = <Icon as={BsFillSquareFill} w={6} h={6} />;
    const sound = new Howl({
        src: [props.audioSrc],
        autoplay: false,
        onend: () => {
            console.log('finished playing ' + props.title);
        },
        html5: true,
        onload: () => {
            setLoading(false);
        }
    });

    const blue = ['#5151D2', 'blue'];
    const red = ['#D8695B', 'red'];
    const yellow = ['#D8A85B', 'yellow'];

    const handleButtonClick = (buttonName) => {
        props.onButtonClick(buttonName);
        setSelected(buttonName);
        
    }

    const [selected, setSelected] = useState('');

    return (
        <>
            <Box>
                <Stack direction='column' spacing={0}>
                    <Button 
                    fontSize="lg" 
                    padding={8} 
                    rightIcon={<RxSpeakerLoud />} 
                    _hover={{ backgroundColor: "#5151D2" }} 
                    backgroundColor="#9797EF" 
                    color="#F5E3E3" 
                    variant='solid'
                    onClick={(e) => {
                        sound.play();
                    }}
                    isLoading={loading}
                    >
                        {props.title}
                    </Button>
                    <Stack justifyContent={'center'} direction="row" spacing={1}>
                        {[blue, red, yellow].map((el, i) => {
                            return (
                                <IconButton
                                    roundedTop={0}
                                    _hover={{ backgroundColor: darkerColor(el[0], 0.5) }}
                                    backgroundColor={selected == el[1] ? darkerColor(el[0], 0.5) : ''}
                                    borderTop={0}
                                    colorScheme={`${el[0]}`}
                                    color={el[0]}
                                    variant="outline"
                                    icon={rect}
                                    key={i}
                                    onClick={() => handleButtonClick(`${el[1]}`)}
                                    // isDisabled={loading}
                                />
                            )
                        })}
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}