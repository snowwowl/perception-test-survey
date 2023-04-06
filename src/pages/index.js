import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';
import { Select } from 'antd';
import { Elsie } from 'next/font/google';
import { useRouter } from 'next/router';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const {push} = useRouter();

  function handleSelect(e){
    console.log(e);
    push(`/${e}/hello`);

  }
  return (
    <>
      <Box width='100%' minH='100%' margin='auto'>
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
              color='white'
              textAlign='center'
              fontSize='20em'
              fontFamily={'elsie'}
            >
              Welcome

            </Heading>
            <Box justifyItems={'center'} maxW={'60%'}>
              <Select
              dropdownStyle={{ backgroundColor: '#EBEBFF', color: '#5151D2' }}
              placeholder="Select Language"
              style={{
                width: 200,
                color: 'red',
              }}
              options={[
                {
                  value: "en",
                  label: "English"
                },
                {
                  value: 'bn',
                  label: 'Bengali'
                }
              ]}
              onSelect={(e) => {handleSelect(e)}}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
