import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Button,
    IconButton,
    Icon
} from '@chakra-ui/react'
import {BsFillSquareFill} from 'react-icons/bs';
import {RxSpeakerLoud} from 'react-icons/rx'
import { Howl } from 'howler';


export default function AudioButton({idx, audioSrc}) {
    const rect = <Icon as={BsFillSquareFill} w={6} h={6} />;
    const sound1 = new Howl({
        src: [audioSrc]
      })

    return (
        <>
            <Box>
                <Stack direction='column' spacing={0}>
                    <Button fontSize="lg" padding={8} rightIcon={<RxSpeakerLoud />} _hover={{backgroundColor: "#5151D2"}} backgroundColor="#9797EF" color="#F5E3E3" variant='solid'>
                        Word {idx}
                    </Button>
                    <Stack justifyContent={'center'} direction="row" spacing={1}>
                        <IconButton roundedTop={0} borderTop={0} colorScheme={'blue'} variant="outline" icon={rect} />
                        <IconButton roundedTop={0} borderTop={0} colorScheme={'orange'} variant="outline" icon={rect} />
                        <IconButton roundedTop={0} borderTop={0} colorScheme={'yellow'} variant="outline" icon={rect} />
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}