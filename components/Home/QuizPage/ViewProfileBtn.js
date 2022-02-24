import React, { useState } from 'react'
import { Box, Tbody, Tr, Icon, Td, Grid, GridItem, Flex, Button, Divider, Center, Text, WrapItem, Avatar } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/hooks'
import { BsEye } from "react-icons/bs";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
} from "@chakra-ui/react"

export default function ViewProfileBtn({ student }) {

    const [size, setSize] = useState("lg")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    return (
        <div>

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
                cursor="pointer"
                onClick={() => handleClick(size)}
            >
                <Center>
                    <Flex>
                        <Icon as={BsEye} m="0px 5px 0px 0px" fontSize='22px' />
                        <Text> View Profile </Text>
                    </Flex>
                </Center>
            </Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <Flex>
                            <WrapItem>
                                <Avatar
                                    size="xl"
                                    name={student.name}
                                />
                            </WrapItem>

                        </Flex>
                        <Box
                            mt="20px"
                            fontFamily="Segoe ui"
                            color="brand.200"
                            fontSize="20px"
                            fontWeight="semibold"
                            mb="15px"
                        >
                            your Information
                        </Box>
                        <Tbody size={"md"} color="#1D4E89">
                            <Tr >
                                <Td pb='8px'>Email</Td>
                                <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                <Td pb='8px'>{student.email}</Td>
                            </Tr>
                            <Tr >
                                <Td pb='8px'>Fullname(KH)</Td>
                                <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                <Td fontFamily="Siemreap" pb='8px'>{student.khmerName}</Td>
                            </Tr>
                            <Tr>
                                <Td pb='8px'>Fullname(Latin)</Td>
                                <Td pb='8px' paddingLeft='15px' paddingRight='2vw'>:</Td>
                                <Td pb='8px'>{student.name}</Td>
                            </Tr>
                            <Tr>
                                <Td pb='8px'>Gender</Td>
                                <Td pb='8px' paddingLeft='15px' paddingRight='2vw'>:</Td>
                                <Td pb='8px'>{student.gender}</Td>
                            </Tr>
                            <Tr>
                                <Td pb='8px'>Birth of Date</Td>
                                <Td pb='8px' paddingLeft='15px' paddingRight='2vw'>:</Td>
                                <Td pb='8px'>{student.dateOfBirth}</Td>
                            </Tr>
                            <Tr>
                                <Td pb='8px'>Transfer From</Td>
                                <Td pb='8px' paddingLeft='15px' paddingRight='2vw'>:</Td>
                                <Td pb='8px'>{student.transferFrom}</Td>
                            </Tr>
                            <Tr>
                                <Td pb='8px'>Blood Type</Td>
                                <Td pb='8px' paddingLeft='15px' paddingRight='2vw'>:</Td>
                                <Td pb='8px'>{student.bloodType}</Td>
                            </Tr>
                            <Tr>
                                <Td pb='8px'>Place of Birth</Td>
                                <Td pb='8px' paddingLeft='15px' paddingRight='2vw'>:</Td>
                                <Td pb='8px'>{student.placeOfBirth}</Td>
                            </Tr>
                            <Tr>
                                <Td pb='8px'>Current Address</Td>
                                <Td pb='8px' paddingLeft='15px' paddingRight='2vw'>:</Td>
                                <Td pb='8px'>{student.currentAddress}</Td>
                            </Tr>
                        </Tbody>

                        <Box
                            fontFamily="Segoe ui"
                            color="#1D4E89"
                            fontSize="20px"
                            fontWeight="semibold"
                            m="15px 0px 15px 0px"
                        >
                            Your Parents Information
                        </Box>
                        <Grid templateColumns={'50% 50%'}>
                            <GridItem>
                                <Tbody color="#1D4E89">
                                    <Tr>
                                        <Td pb='8px'>Father Name</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.fatherName}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td pb='8px'>Phone Number</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.fatherPhone}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td pb='8px'>Education</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.fatherEdu}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td pb='8px'>Occupation</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.fatherOccupation}</Td>
                                    </Tr>
                                </Tbody>
                            </GridItem>
                            <GridItem>
                                <Tbody color="#1D4E89">
                                    <Tr>
                                        <Td pb='8px'>Mother Name</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.motherName}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td pb='8px'>Phone Number</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.motherPhone}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td pb='8px'>Education</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.motherEdu}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td pb='8px'>Occupation</Td>
                                        <Td paddingLeft='15px' paddingRight='2vw' pb='8px'>:</Td>
                                        <Td pb='8px'>{student.motherOccupation}</Td>
                                    </Tr>
                                </Tbody>
                            </GridItem>
                        </Grid>
                        <Divider borderWidth="1px" mt="20px" />
                        <Box mt="30px">


                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </div>
    )
}
