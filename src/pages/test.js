import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Container,
    Button
} from '@chakra-ui/react';
import { app, database } from '@/components/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';


export default function Test() {
    const dbInstance = collection(database, 'notes');
    const router = useRouter();

    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) {
                alert("HELLO")
                return false;
            }
            return true;
        });
        
        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);
    return (
        <>
            <Button onClick={(e) => {
                addDoc(dbInstance, {
                    noteTitle: "HELLO"
                }).then((val) => console.log(val));
            }}>Click</Button>

        </>
    )
}