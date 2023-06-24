import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Flex,
    Select,
    Textarea,
    Button,
    IconButton,
    OrderedList,
    ListItem
} from '@chakra-ui/react';
import data from '@/data/intro.json'
import { Elsie, Poppins } from 'next/font/google';
import { RxSpeakerLoud } from 'react-icons/rx';
import { useRouter } from 'next/router';
import { useForm, useFieldArray } from 'react-hook-form';
import localforage from 'localforage';
import { Howl } from 'howler';

const elsie = Elsie({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

// <Button _hover={{color: 'black'}} size='lg' rounded={32} variant='solid' color='#F5E3E3' backgroundColor='#5151D2'>{pageData.button1}</Button>

export default function IntroForm({ pageData }) {
    const { push, query } = useRouter();
    const currLang = query.lang;

    const [loading, setLoading] = useState(true);
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, submitCount, isValid },
        getValues,
        control
    } = useForm();

    const sound = new Howl({
        src: ['https://s3.tebi.io/surveydata/Trial_Slide4_Audioclip.wav'],
        autoplay: false,
        onend: () => {
            console.log('finished playing intro');
        },
        html5: true,
        onload: () => setLoading(false)
    });

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "introform", // unique name for your Field Array
    });

    useEffect(() => {
        console.log(pageData.forms[0])
    }, [])

    function handleClick() {
        const values = getValues().introform;
        console.log(values)
        localforage.setItem("introform", values).then(() => {
            console.log('done upload')
            push(`/${currLang}/add-form`);
        });

    }

    function AudioComp() {
        if (currLang === 'en') {
            return (
                <>
                    <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} py={1} color='#5151D2'>Click on
                        <IconButton
                            size='sm'
                            mx={2}
                            colorScheme='facebook'
                            onClick={(e) => { sound.play() }}
                            variant='solid'
                            icon={<RxSpeakerLoud />}
                            isLoading={loading}
                        />

                        and listen to the audio clip</Text>
                </>
            )
        }
        else {
            return (
                <>
                    <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} py={1} color='#5151D2'>এই
                        <IconButton
                            mx={2}
                            colorScheme='facebook'
                            onClick={(e) => { sound.play() }}
                            variant='solid'
                            size='sm'
                            icon={<RxSpeakerLoud />}
                            isLoading={loading}
                        />
                        চিহ্নে চাপ দিয়ে একজন বক্তার বলে যাওয়া কয়েকটি বাক্য শুনুন</Text>
                </>
            )
        }
    }

    return (
        <>
            <Box height={'100vh'} mx={32} py={8}>
                <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} py={1} color='#5151D2'>
                    {pageData.paras[0]}
                </Text>
                {<AudioComp />}
                <Text fontFamily={poppins.style.fontFamily} fontSize={'xl'} py={1} color='#5151D2'>
                    {pageData.paras[1]}
                </Text>

                <Box mr='5%' pt={16}>
                    {pageData.forms.map((el, idx) => {
                        return (
                            <Flex key={idx} py={1} justifyContent='space-between'>
                                <Text
                                    fontFamily={poppins.style.fontFamily}
                                    fontSize={'lg'}
                                    py={1}
                                    color='#5151D2'
                                >
                                    {el.question}
                                </Text>
                                <Box >
                                    <Select  {...register(`introform.${idx}.value`)}
                                        variant='filled' width='250px' placeholder="Select option">
                                        {el.options.map((opt, idx) => {
                                            return (
                                                <option key={idx} value={opt}>{opt}</option>
                                            )
                                        })}
                                    </Select>
                                </Box>
                            </Flex>
                        )
                    })}

                    <Flex py={1} justifyContent='space-between'>
                        <Text
                            fontFamily={poppins.style.fontFamily}
                            fontSize={'lg'}
                            py={1}
                            color='#5151D2'
                        >
                            {pageData.form2[0]}
                        </Text>
                        <Textarea {...register(`introform.${4}.value`)} variant={'filled'} width='300px' placeholder={pageData.form2[1]} />
                    </Flex>

                    <Flex py={16} justifyContent='right'>
                        <Button onClick={(e) => { handleClick() }} px={12} _hover={{ color: 'black' }} size='lg' rounded={32} variant='solid' color='#F5E3E3' backgroundColor='#5151D2'>{pageData.form3[1]}</Button>
                        {/* <Button onClick={(e) => {
                            localforage.getItem("introform", (err, value) => console.log(value));
                        }}>debug</Button> */}
                    </Flex>

                    <Flex py={16} justifyContent='left'>
                        <OrderedList color="#5151D2" fontSize='sm'>
                            {pageData.footer.map((el, idx) => <ListItem key={idx}>{el}</ListItem>)}
                        </OrderedList>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { lang: 'en' } },
            { params: { lang: 'bn' } }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const lang = context.params.lang;

    return {
        props: {
            pageData: {
                ...data[lang],
            }
        }
    }
}