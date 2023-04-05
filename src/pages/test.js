import React, {useState, useEffect} from 'react';
import {
    Box,
    Stack,
    Container,
    Button
} from '@chakra-ui/react';
import {app, database} from '@/components/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


export default function Test(){
    const dbInstance = collection(database, 'notes');
    return(
        <>
            <Button onClick={(e) => {
                addDoc(dbInstance, {
                    noteTitle: "HELLO"
                });
            }}>Click</Button>
        
        </>
    )
}