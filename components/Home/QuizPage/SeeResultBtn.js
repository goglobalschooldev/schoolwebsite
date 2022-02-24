import React, {useState} from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { BsFillEyeFill } from "react-icons/bs";
import {
    Box, Button, Center, Flex, Icon, Text,
    Drawer, DrawerBody, DrawerOverlay, DrawerContent,
    LinkBox, LinkOverlay, Heading,
    SimpleGrid,
    Divider
} from "@chakra-ui/react"

export default function SeeResultBtn() {
    const [size, setSize] = useState("lg")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    return (
        <>
            <Button
                bg="brand.100"
                w="fit-content"
                h="40px"
                mt="10px"
                color="white"
                align="center"
                fontFamily="Segoe UI"
                fontSize="17px"
                fontWeight="bold"
                borderRadius="20px"
                onClick={() => handleClick(size)}
            >
                <Center>
                    <Flex>
                        <Icon as={BsFillEyeFill} m="0px 5px 0px 0px" fontSize='22px'/>
                        <Text> See Your Result </Text>
                    </Flex>
                </Center>
            </Button>
                    <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerBody color='brand.100'>
                                <Box
                                    fontSize='24px'
                                    fontWeight='600'
                                    pt='20px'
                                    pb='20px'
                                > 
                                    See Your Result
                                </Box>
                                <Divider/>
                               
                                    <SimpleGrid spacing={2} columns={[1, 1, 2, 2, 2, 2]} mt="30px">
                                
                                        <LinkBox
                                            width="300px"
                                            bg="white"
                                            as="article"
                                            maxW="sm"
                                            p="5"
                                            m="5px"
                                            borderWidth="1px"
                                            rounded="md"
                                        >
                                            <Box
                                                as="time"
                                                color="brand.100"
                                                dateTime="2021-01-15 15:30:00 +0000 UTC"
                                            >
                                                Khmer Programme
                                            </Box>
                                            <Heading size="md" my="2" color="brand.102">
                                                <LinkOverlay href="#">
                                                    Mathematic
                                                </LinkOverlay>
                                            </Heading>
                                            <Text mb="3" color="brand.101">
                                                 98/100 pt
                                            </Text>
                                            <Box as="a" color="brand.100" href="#" >
                                                See Result
                                            </Box>
                                        </LinkBox>
                                        <LinkBox
                                            width="300px"
                                            bg="white"
                                            as="article"
                                            maxW="sm"
                                            p="5"
                                            m="5px"
                                            borderWidth="1px"
                                            rounded="md"
                                        >
                                            <Box
                                                as="time"
                                                color="brand.100"
                                                dateTime="2021-01-15 15:30:00 +0000 UTC"
                                            >
                                                 Khmer Programme
                                            </Box>
                                            <Heading size="md" my="2" color="brand.102">
                                                <LinkOverlay href="#">
                                                    Mathematic
                                                </LinkOverlay>
                                            </Heading>
                                            <Text mb="3" color="brand.101">
                                                98/100 pt
                                            </Text>
                                            <Box as="a" color="brand.100" href="#" >
                                                See Result
                                            </Box>
                                        </LinkBox>
                                        <LinkBox
                                            width="300px"
                                            bg="white"
                                            as="article"
                                            maxW="sm"
                                            p="5"
                                            m="5px"
                                            borderWidth="1px"
                                            rounded="md"
                                        >
                                            <Box
                                                as="time"
                                                color="brand.100"
                                                dateTime="2021-01-15 15:30:00 +0000 UTC"
                                            >
                                    Khmer Programme
                                            </Box>
                                            <Heading size="md" my="2" color="brand.102">
                                                <LinkOverlay href="#">
                                                    Mathematic
                                                </LinkOverlay>
                                            </Heading>
                                            <Text mb="3" color="brand.101">
                                                98/100 pt
                                            </Text>
                                            <Box as="a" color="brand.100" href="#" >
                                                See Result
                                            </Box>
                                        </LinkBox>
                                    
                                    </SimpleGrid>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
        </>
    )
}
