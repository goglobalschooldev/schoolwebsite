import React, { useState, useContext } from 'react';
import { Center, Box, Flex, Link, Input, Button, Text, Stack, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import firebase from '../../Auth/firebase';
import { AuthContext } from '../../Context/AuthContext';
import { useRouter } from 'next/router';
import { reactLocalStorage } from 'reactjs-localstorage';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Image
} from "@chakra-ui/react"
import { BiHide, BiShow } from "react-icons/bi";
import { useToast } from "@chakra-ui/react"

export default function SignInForm() {

    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef()
    const [checkEmail, setCheckEmail] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(AuthContext)
    const router = useRouter()

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const handleCheck = (e) => {

        setEmail(e.target.value)
    }

    const loign = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then(async res => {
                    const { user } = res;
                    reactLocalStorage.set("uuidKey", user.Aa)
                    const idTokenResult = await user.getIdTokenResult();
                    dispatch({
                        type: 'LOGGED_IN_USER',
                        payload: { email: user.email, token: idTokenResult.token }
                    });
                    toast({
                        description: "Login Success!",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })

                    router.push('/quiz-programme')
                })
        } catch (error) {
            toast({
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            console.log('Loing Error', error)
        }
    }

    return (
        <Box>
            <Flex mt="50px">
                {
                    state.user === null ?
                        <>
                            <Input
                                value={email}
                                onChange={(e) => handleCheck(e)}
                                variant="filled"
                                placeholder="Type Your Email"
                                fontFamily="Segoe UI"
                                w="300px"
                                mr="20px"
                                size="md"
                            />
                            <Button
                                w="fit-content"
                                ref={finalRef}
                                bg='brand.100'
                                variant="solid"
                                color="#fff"
                                fontFamily="Segoe UI"
                                onClick={onOpen}
                                isDisabled={checkEmail}
                            >
                                GET START
                            </Button>
                        </>
                        :
                        <Button
                            w="fit-content"
                            ref={finalRef}
                            bg='brand.100'
                            variant="solid"
                            color="#fff"
                            fontFamily="Segoe UI"
                            onClick={() => router.push('/quiz-programme')}
                            isDisabled={checkEmail}
                        >
                            GET START
                        </Button>
                }
                <Modal isOpen={isOpen} onClose={onClose} size="sm">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box mt="30px">
                                <Center>
                                    <Image w="50px" src="../icon_top.png" />
                                </Center>
                                <Text
                                    mb={4}
                                    align="center"
                                    fontSize="30px"
                                    letterSpacing="3px"
                                    fontFamily="Sushi Delivery Regular"
                                    fontWeight="semibold"
                                    color='brand.100' >
                                    Sign in form
                                </Text>
                                <Box color="brand.100" mb={6}>
                                    <Text>Email</Text>
                                    <Stack>
                                        <Input
                                            value={email}
                                            placeholder="Enter your email"
                                            onChange={(e) => handleCheck(e)}
                                            size="md"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    loign()
                                                } else if (e.key === 'Enter' && password === "") {
                                                    toast({
                                                        description: "Invalid Password!",
                                                        status: 'error',
                                                        duration: 9000,
                                                        isClosable: true,
                                                    })
                                                } else if (e.key === 'Enter' && email === "") {
                                                    toast({
                                                        description: "Email Password!",
                                                        status: 'error',
                                                        duration: 9000,
                                                        isClosable: true,
                                                    })
                                                } else {
                                                    // loign()
                                                }
                                            }}
                                        />
                                    </Stack>
                                    <Text mt={5}>Password</Text>
                                    <InputGroup>
                                        <Input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    loign()
                                                } else if (e.key === 'Enter' && password === "") {
                                                    toast({
                                                        description: "Invalid Password!",
                                                        status: 'error',
                                                        duration: 9000,
                                                        isClosable: true,
                                                    })
                                                } else if (e.key === 'Enter' && email === "") {
                                                    toast({
                                                        description: "Email Password!",
                                                        status: 'error',
                                                        duration: 9000,
                                                        isClosable: true,
                                                    })
                                                } else {
                                                    // loign()
                                                }
                                            }}
                                            type={show ? "text" : "password"}
                                            placeholder="Enter your password"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Box h="1.75rem" size="sm" onClick={handleClick}>
                                                {show ? <Icon fontSize="2xl" as={BiShow} /> : <Icon fontSize="2xl" as={BiHide} />}
                                            </Box>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Center>
                                    <Box>
                                        <Center>
                                            <Link
                                                onClick={() => loign()}

                                                color="white">
                                                <Button
                                                    bg='brand.100'
                                                    variant="solid"
                                                    bg='brand.100'
                                                    align="center"
                                                    fontSize="16px"
                                                    color='white'
                                                    mb={4}
                                                    disabled={password && email ? false : true}
                                                >
                                                    Sign in
                                                </Button>
                                            </Link>
                                        </Center>
                                        <Flex mb={6}>
                                            <Text>Don't have an account?</Text>
                                            <Link
                                                onClick={() => router.push('/register')}
                                                color='brand.100'
                                            >
                                                <Text
                                                    ml={2}
                                                    align="center"
                                                    fontSize="16px"
                                                    color='brand.100'
                                                >
                                                    Sign up
                                                </Text>
                                            </Link>
                                        </Flex>
                                    </Box>
                                </Center>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>
        </Box>
    )
}


