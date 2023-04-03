import { useRef, useEffect } from 'react';
import {
    Box,
    Stack,
    Button
} from '@chakra-ui/react'
import { RxSpeakerLoud } from 'react-icons/rx'
import { Howl } from 'howler';

export default function AudioButton() {
    const soundRef = useRef(null);
    // useEffect(() => {
    //     soundRef.current = new Howl({
    //         src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3']
    //     });
    // }, []);

    const blueColor = '#5151D2';
    const redColor = '#D8695B';
    const yellowColor = '#D8A85B';
    return (
        <Box maxWidth='max-content'>
            <Button
                variant='solid'
                rightIcon={<RxSpeakerLoud />}
                _hover={{ backgroundColor: "#5151D2" }}
                sx={{
                    height: 30,
                    width: '180px',
                    fontSize: 'lg',
                    padding: 8,
                    backgroundColor: '#9797EF',
                    color: '#F5E3E3'
                }}
            >
                Word 1
            </Button>
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{
                    width: '100%',
                    px: 2
                }}
            >
                {[blueColor, redColor, yellowColor].map(color => (
                    <Button
                        key={color}
                        variant="outline"
                        colorScheme={color}
                        className='myBox'
                        sx={{
                            top: -1,
                            borderTop: 0,
                            borderTopRadius: 0,
                            px: 1,
                            paddingBottom: 1,
                            zIndex: -1,
                            height: '40px',
                            flexBasis: '100%',
                            roundedBottom: '16px'
                        }}
                    >
                        <Box sx={{
                            backgroundColor: color,
                            height: '100%',
                            width: '90%',
                            roundedBottom: '12px',
                            ':hover': {
                                backgroundColor: 'red'
                            }

                        }} />
                    </Button>
                ))}
            </Stack>
        </Box>
    )
}