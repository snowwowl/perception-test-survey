import React, { useState, useEffect } from 'react';
import {
    Box,
    Heading,
    Text,
    Container
} from '@chakra-ui/react';
import {useRouter} from 'next/router';


export default function IDD() {
    const {query, isReady} = useRouter();
    
    return ( 
        <>
            <Box>
                
                <Text fontSize={'4xl'} color='black'> 
                    LANGUAGE: {query.lang}
                </Text>
            </Box>
        
        </>
     );
}