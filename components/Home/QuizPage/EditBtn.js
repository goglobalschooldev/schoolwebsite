import React, { useState,  useMemo } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import {
    Box,
    Button,
    Center,
    Flex,
    Icon,
    Text,
    Grid,
    GridItem,
    Input,
    SimpleGrid,
    RadioGroup,
    Stack,
    Radio,
    InputGroup, InputRightElement
} from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa";
import { BiHide, BiShow } from "react-icons/bi";

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
} from "@chakra-ui/react"
import { useMutation } from '@apollo/client'

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { UPDATE_STUDENT } from '../../../Schema/ApolloSchema';

export default function EditBtn({ data }) {

    const toast = useToast()
    const display_Grid = { base: "90%", sm: "90%", md: "90%", lg: "100%", xl: "100%", "2xl": "100%" }
    const HStack_Spacing = { base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "30px", '2xl': "50px" };
    const titleSize = { base: "25px", sm: "24px", md: "24px", lg: "24px", xl: "24px", '2xl': "24px" };

    const [show, setShow] = useState(false)
    const handleClick1 = () => setShow(!show)

    const [size, setSize] = useState("lg")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const [studentUpdate] = useMutation(UPDATE_STUDENT,{
        onCompleted:({studentUpdate})=>{
            // console.log(studentUpdate,"Complete")
            onClose();
            toast({
                title: "Update Succesfull!!",
                description: "",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        },
        onError:(error)=>{
            toast({
                title:"Error",
                description:error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    });

    const [gender, setGender] = useState();
    const [bloodType, setBloodType] = useState();
    const [student, setStudent] = useState({
        id: '',
        email: '',
        password: '',
        khmerName: '',
        name: '',
        gender: '',
        niceName: '',
        dateOfBirth: '',
        transferFrom: '',
        bloodType: '',
        placeOfBirth: '',
        currentAddress: '',
        motherName: '',
        motherEdu: '',
        motherPhone: '',
        motherOccupation: '',
        fatherName: '',
        fatherEdu: '',
        fatherPhone: '',
        fatherOccupation: ''
    })

    useMemo(() => {
        if (data) {
            setStudent({
                id: data.getStudent._id,
                email: data.getStudent.email,
                password: data.getStudent.password,
                khmerName: data.getStudent.khmerName,
                name: data.getStudent.name,
                niceName: data.getStudent.niceName,
                dateOfBirth: moment(data.getStudent.dateOfBirth),
                transferFrom: data.getStudent.transferFrom,
                placeOfBirth: data.getStudent.placeOfBirth,
                currentAddress: data.getStudent.currentAddress,
                motherName: data.getStudent.motherName,
                motherEdu: data.getStudent.motherEdu,
                motherPhone: data.getStudent.motherPhone,
                motherOccupation: data.getStudent.motherOccupation,
                fatherName: data.getStudent.fatherName,
                fatherEdu: data.getStudent.fatherEdu,
                fatherPhone: data.getStudent.fatherPhone,
                fatherOccupation: data.getStudent.fatherOccupation
            })
            setGender(data.getStudent.gender)
            setBloodType(data.getStudent.bloodType)
        }
    }, [data])

    const handleUpdate = () => {

        const DateOFBirth = student.dateOfBirth.format('ll');
        console.log(student)
        studentUpdate({
            variables: {
                input: {
                    _id: student.id,
                    email: student.email,
                    password: student.password,
                    khmerName: student.khmerName,
                    name: student.name,
                    niceName: student.niceName,
                    gender: gender,
                    dateOfBirth: DateOFBirth,
                    transferFrom: student.transferFrom,
                    bloodType: bloodType,
                    placeOfBirth: student.placeOfBirth,
                    currentAddress: student.currentAddress,
                    motherName: student.motherName,
                    motherEdu: student.motherEdu,
                    motherPhone: student.motherPhone,
                    motherOccupation: student.motherOccupation,
                    fatherName: student.fatherName,
                    fatherEdu: student.fatherEdu,
                    fatherPhone: student.fatherPhone,
                    fatherOccupation: student.fatherOccupation
                },
            }
        });
        
    }

    return (
        <>
            <Button
                bg="brand.100"
                w="fit-content"
                h="40px"
                mt='10px'
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
                        <Icon as={FaEdit} m="0px 5px 0px 0px" fontSize='22px' />
                        <Text> Edit Your Profile </Text>
                    </Flex>
                </Center>
            </Button>
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <Grid
                            templateColumns={display_Grid}
                            gap={4}
                        >
                            <GridItem colSpan={1}>
                                <Box w="100%" p={10} color="brand.100">
                                    <Text
                                        fontSize={titleSize}
                                        fontWeight="semibold"
                                        color="brand.100"
                                        mb='40px'
                                    >
                                        Edit Your Information
                                    </Text>
                                    <SimpleGrid spacing={8} color="brand.100" columns={[2, 2, 2, 2, 2, 2]}>
                                        {/* <Box height="20px">
                                            <Input

                                                value={student.email}
                                                onChange={(e) => setStudent({ ...student, email: e.target.value })}
                                                borderColor="brand.100"
                                                variant="flushed"
                                                placeholder="Name in khmer"
                                                fontFamily="khmer os siemreap"
                                            />
                                        </Box> */}
                                        {/* <Box height="20px">
                                            <InputGroup size="md">
                                                <Input
                                                    value={student.password}
                                                    onChange={(e) => setStudent({ ...student, password: e.target.value })}
                                                    borderColor="brand.100"
                                                    variant="flushed"
                                                    pr="4.5rem"
                                                    type={show ? "text" : "password"}
                                                    placeholder="your password"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleClick1}>
                                                        {show ? <Icon fontSize="2xl" as={BiShow} /> : <Icon fontSize="2xl" as={BiHide} />}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        </Box> */}
                                        <Box height="20px">
                                            <Input
                                                value={student.khmerName}
                                                onChange={(e) => setStudent({ ...student, khmerName: e.target.value })}
                                                borderColor="brand.100"
                                                variant="flushed"
                                                placeholder="Name in khmer"
                                                fontFamily="khmer os siemreap"
                                            />
                                        </Box>
                                        <Box height="20px">
                                            <Input
                                                value={student.name}
                                                onChange={(e) => setStudent({ ...student, name: e.target.value })}
                                                borderColor="brand.100"
                                                variant="flushed"
                                                placeholder="Name in latin"
                                            />
                                        </Box>
                                        <Box height="20px">
                                            <Input
                                                value={student.niceName}
                                                onChange={(e) => setStudent({ ...student, niceName: e.target.value })}
                                                borderColor="brand.100"
                                                variant="flushed"
                                                placeholder="Nick name"
                                            />
                                        </Box>
                                        <Box height="20px" pt={4}>
                                            <RadioGroup onChange={(e)=> setGender(e)} value={gender}>
                                                <Stack direction="row" spacing={HStack_Spacing}>
                                                    <Radio value="Male">Male</Radio>
                                                    <Radio value="Female">Female</Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </Box>
                                        <Box
                                            borderBottom="1px"
                                        >
                                            <DatePicker
                                                className="selectdate"
                                                style={{ width: '100%' }}
                                                placeholder="Date of Birth"
                                                bordered={false}
                                                size="large"
                                                value={student.dateOfBirth}
                                                onChange={(e) => setStudent({ ...student, dateOfBirth: e })}
                                            />
                                        </Box>
                                        <Box height="20px">
                                            <Input
                                                value={student.transferFrom}
                                                onChange={(e) => setStudent({ ...student, transferFrom: e.target.value })}
                                                variant="flushed"
                                                borderColor="brand.100"
                                                placeholder="Tranfer from"
                                            />
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid color="brand.100" mt={10} mb={5}>
                                        <Box textAlign="center" fontSize="20px" color="brand.100" mb="10px">Blood type</Box>
                                        <Center>
                                            <RadioGroup onChange={(e)=>setBloodType(e)} value={bloodType}>
                                                <Stack direction="row" spacing={HStack_Spacing}>
                                                    <Radio value="Group A">Group A</Radio>
                                                    <Radio value="Group B">Group B</Radio>
                                                    <Radio value="Group O">Group O</Radio>
                                                    <Radio value="Group AB">Group AB</Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </Center>
                                    </SimpleGrid>
                                    <SimpleGrid color="brand.100" mt={6}>
                                        <Box height="50px"> <Input variant="flushed" borderColor="brand.100" placeholder="Place of birth" value={student.placeOfBirth} onChange={(e) => setStudent({ ...student, placeOfBirth: e.target.value })} /> </Box>
                                        <Box height="50px"> <Input variant="flushed" borderColor="brand.100" placeholder="Current address" value={student.currentAddress} onChange={(e) => setStudent({ ...student, currentAddress: e.target.value })} /> </Box>
                                    </SimpleGrid>
                                    <SimpleGrid borderColor="brand.100" color="brand.100" spacing={8} columns={[2, 2, 2, 2, 2, 2]}>
                                        {/* <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Grade" value='11' /></Box> */}
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Mother name" value={student.motherName} onChange={(e) => setStudent({ ...student, motherName: e.target.value })} /></Box>
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Education" value={student.motherEdu} onChange={(e) => setStudent({ ...student, motherEdu: e.target.value })} /></Box>
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Phone number" value={student.motherPhone} onChange={(e) => setStudent({ ...student, motherPhone: e.target.value })} /></Box>
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Occupation" value={student.motherOccupation} onChange={(e) => setStudent({ ...student, motherOccupation: e.target.value })} /></Box>
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Father name" value={student.fatherName} onChange={(e) => setStudent({ ...student, fatherName: e.target.value })} /></Box>
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Education" value={student.fatherEdu} onChange={(e) => setStudent({ ...student, fatherEdu: e.target.value })} /></Box>
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Phone number" value={student.fatherPhone} onChange={(e) => setStudent({ ...student, fatherPhone: e.target.value })} /></Box>
                                        <Box height="20px"><Input variant="flushed" borderColor="brand.100" placeholder="Occupation" value={student.fatherOccupation} onChange={(e) => setStudent({ ...student, fatherOccupation: e.target.value })} /></Box>
                                    </SimpleGrid>
                                    <Center mt="30px">
                                        <Button bg='gray.400' mt='25px'>
                                            <Box
                                                variant="solid"
                                                color="#fff"
                                                fontFamily="Segoe UI"
                                                onClick={() => onClose() && refresh()}
                                            >
                                                Close
                                            </Box>
                                        </Button>
                                        <Button bg='brand.100' mt='25px' ml='20px'>
                                            <Box
                                                variant="solid"
                                                color="#fff"
                                                fontFamily="Segoe UI"
                                                onClick={() => handleUpdate()}
                                            >
                                                Save
                                            </Box>
                                        </Button>
                                    </Center>
                                </Box>
                            </GridItem>
                        </Grid>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </>
    )
}
