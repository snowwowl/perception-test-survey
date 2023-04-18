import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';
import { Button } from 'antd'
import { Elsie_Swash_Caps, Poppins } from 'next/font/google';


const elsie = Elsie_Swash_Caps({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Box width='100%' minH='100%' margin='auto' backgroundColor={'#5151D2'}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='100vh'
        >
          <Stack
            direction="column"
            justifyItems={'center'}
            alignItems='center'
          >
            <Heading
              color='#F5E3E3'
              textAlign='center'
              fontSize='20em'
              fontFamily={elsie.style.fontFamily}

            >
              Bye!

            </Heading>
            <Text fontFamily={poppins.style.fontFamily} fontSize={'2xl'} color='#F5E3E3'>Thanks a ton for taking the time to do this test!! Your contribution is very valuable for my work.</Text>
            <Stack spacing={4} direction='column' pt={40} justifyItems={'center'} maxW={'60%'}>
              <Box textAlign='center'>
                <Text fontFamily={poppins.style.fontFamily} fontSize={'md'} color='#F5E3E3'>** If your overall score is 100% correct, you will be contacted on the email ID you provided at the beginning of the test. You will be asked for a mailing address to which the gift can be couriered.</Text>
              </Box>
              <Box
                textAlign='center'
                maxW='100%'>
                <Button style={{ backgroundColor: '#F5E3E3', fontWeight: 500, color: '#5151D2' }} size='large' shape='round'>Exit the test.</Button>
              </Box>
            </Stack>

          </Stack>

        </Box>


      </Box>
    </>
  )
}
