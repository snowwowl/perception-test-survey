import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';
import {Button} from 'antd'
import { Elsie } from 'next/font/google';


const elsie = Elsie({ weight: '400', subsets: ['latin'] });

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
              fontFamily={'elsie'}
            >
              Bye!

            </Heading>
            <Box py={4} justifyItems={'center'} maxW={'60%'}>
              <Button style={{backgroundColor: '#F5E3E3', fontWeight: 500,  color: '#5151D2'}} size='large' shape='round'>Exit the test.</Button>
            </Box>
            
          </Stack>

        </Box>


      </Box>
    </>
  )
}
