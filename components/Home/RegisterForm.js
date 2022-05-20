import React, { useStateF } from 'react'
import firebase from '../../Auth/firebase';
import { useRouter } from 'next/router';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { CREATE_STUDENT } from '../../Schema/ApolloSchema';
import { useMutation } from '@apollo/client';
import { useToast } from "@chakra-ui/react"
import {
    Input,
    Center,
    Text,
    Box,
    FormControl,
    RadioGroup,
    Radio,
    HStack,
    SimpleGrid,
    Button,
    Image,
    Grid,
    GridItem,
    Flex,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'

export default function RegisterForm() {

    const toast = useToast()
    const router = useRouter()
    const [studentCreate] = useMutation(CREATE_STUDENT);
    const [gender, setGender] = useState();
    const [bloodType, setBloom] = useState();
    const [user, setUser] = useState({
        email: '',
        password: '',
        rePassword: '',
        khmerName: '',
        name: '',
        niceName: '',
        dateOfBirth: '',
        transferFrom: '',
        placeOfBirth: '',
        currentAddress: '',
        motherName: '',
        motherEdu: '',
        motherPhone: '',
        motherOccupation: '',
        fatherName: '',
        fatherEdu: '',
        fatherPhone: '',
        fatherOccupation: '',
    })

    const display_Image = { base: "none", sm: "none", md: "none", lg: "block", xl: "block", "2xl": "block" }
    const display_Grid = { base: "90%", sm: "90%", md: "90%", lg: "35% 65%", xl: "35% 65%", "2xl": "35% 65%" }
    const HStack_Spacing = { base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "30px", '2xl': "50px" };
    const titleSize = { base: "25px", sm: "30px", md: "30px", lg: "30px", xl: "32px", '2xl': "32px" };
    let container = { base: "90%", sm: "90%", md: "90%", lg: "70%", xl: "60%", '2xl': "60%" };
    const marginTop = { base: "50px", sm: "50px", md: "50px", lg: "70px", '2xl': "70px" }

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    const {
        email, password, rePassword, khmerName, name, niceName, transferFrom, placeOfBirth, currentAddress, dateOfBirth,
        motherName, motherEdu, motherPhone, motherOccupation, fatherName, fatherEdu, fatherPhone, fatherOccupation
    } = user;

    const complateRegistration = async () => {
        const DateOFBirth = dateOfBirth.format('ll');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                router.push('/quiz-programme')
                toast({
                    title: "Register Succesfull!!",
                    description: `Welcome ${name}!!`,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
                studentCreate({
                    variables: {
                        input: {
                            name,
                            email,
                            password,
                            khmerName,
                            niceName,
                            gender,
                            dateOfBirth: DateOFBirth,
                            transferFrom,
                            bloodType,
                            placeOfBirth,
                            currentAddress,
                            motherName,
                            motherEdu,
                            motherPhone,
                            motherOccupation,
                            fatherName,
                            fatherEdu,
                            uid: user.uid,
                            fatherOccupation,
                            fatherPhone
                        }
                    }
                })
            })
            .catch((error) => {
                var errorMessage = error.message;
                toast({
                    title: errorMessage,

                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            });

    }

    return (
        <Box>
            <Center >
                <Box
                    width={container}
                    mt={marginTop}
                    bg="white"
                >
                    <Grid
                        templateColumns={display_Grid}
                        gap={4}
                    >
                        <GridItem colSpan={1}>
                            <Center>
                                <Box mt="50px" display={display_Image} position="relative">
                                    <Image backgroundImage="red.100" h="750px" src="Register-pic.png" />
                                    <Box
                                        h="750px"
                                        w="100%"
                                        opacity=""
                                        position="absolute"
                                        bottom="0px"
                                        color="white"
                                        bgGradient="linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.8029586834733894) 0%, rgba(0,212,255,0) 100%)"
                                    >
                                        <Center>
                                            <Text textAlign="center" mt="650px" w="80%">
                                                We provide comprehensive general knowledge to our students
                                            </Text>
                                        </Center>
                                    </Box>
                                </Box>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Box w="100%" p={10} color="brand.100">
                                <Text
                                    mb={4}
                                    fontSize={titleSize}
                                    fontWeight="semibold"
                                    color="brand.100"
                                >
                                    Register Form
                                </Text>
                                <Box height="30px" w="47%">
                                    <Input
                                        value={email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        borderColor="brand.100"
                                        variant="flushed"
                                        placeholder="Email"
                                    />
                                </Box>
                                <SimpleGrid spacing={8} color="brand.100" columns={[2, 2, 2, 2, 2, 2]} mt='25px'>
                                    <Box height="20px">
                                        <InputGroup size="md">
                                            <Input
                                                value={password}
                                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                borderColor="brand.100"
                                                variant="flushed"
                                                pr="4.5rem"
                                                type={show ? "text" : "password"}
                                                placeholder="Enter password"
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                    {show ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                    <Box height="20px">
                                        <InputGroup size="md">
                                            <Input
                                                value={rePassword}
                                                disabled={password ? false : true}
                                                onChange={(e) => {

                                                    setUser({ ...user, rePassword: e.target.value })
                                                }}
                                                borderColor="brand.100"
                                                variant="flushed"
                                                pr="4.5rem"
                                                type={show ? "text" : "password"}
                                                placeholder="Re-type password"
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                    {show ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                    <Box height="20px">
                                        <Input
                                            value={khmerName}
                                            onChange={(e) => setUser({ ...user, khmerName: e.target.value })}
                                            borderColor="brand.100"
                                            variant="flushed"
                                            placeholder="Name in khmer"
                                            fontFamily="khmer os siemreap"
                                        />
                                    </Box>
                                    <Box height="20px">
                                        <Input
                                            value={name}
                                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                                            borderColor="brand.100"
                                            variant="flushed"
                                            placeholder="Name in latin"
                                        />
                                    </Box>
                                    <Box height="20px">
                                        <Input
                                            value={niceName}
                                            onChange={(e) => setUser({ ...user, niceName: e.target.value })}
                                            borderColor="brand.100"
                                            variant="flushed"
                                            placeholder="Nick name"
                                        />
                                    </Box>
                                    <Box height="20px" pt={4}>
                                        <FormControl as="fieldset">
                                            <RadioGroup
                                                defaultValue={gender}
                                                onChange={setGender}
                                            >
                                                <HStack spacing="30px">
                                                    <Radio value="Male">Male</Radio>
                                                    <Radio value="Female">Female</Radio>
                                                </HStack>
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                    <Box borderBottom="1px">
                                        <DatePicker
                                            className="selectdate"
                                            style={{ width: '100%' }}
                                            placeholder="Date of Birth"
                                            bordered={false}
                                            size="large"
                                            onChange={(e) => setUser({ ...user, dateOfBirth: e })}
                                        />
                                    </Box>
                                    <Box height="20px">
                                        <Input
                                            value={transferFrom}
                                            onChange={(e) => setUser({ ...user, transferFrom: e.target.value })}
                                            variant="flushed"
                                            borderColor="brand.100"
                                            placeholder="Tranfer from"
                                        />
                                    </Box>
                                </SimpleGrid>
                                <SimpleGrid color="brand.100" mt={10} mb={5}>
                                    <Box textAlign="center" fontSize="20px" color="brand.100" mb="10px">Blood type</Box>
                                    <FormControl as="fieldset">
                                        <RadioGroup
                                            defaultValue={bloodType}
                                            onChange={setBloom}
                                        >
                                            <Center>
                                                <HStack color="brand.100" spacing={HStack_Spacing}>
                                                    <Radio value="Group A">Group A</Radio>
                                                    <Radio value="Group B">Group B</Radio>
                                                    <Radio value="Group O">Group O</Radio>
                                                    <Radio value="Group AB">Group AB</Radio>
                                                </HStack>
                                            </Center>
                                        </RadioGroup>
                                    </FormControl>
                                </SimpleGrid>
                                <SimpleGrid color="brand.100" mt={6}>
                                    <Box height="50px">
                                        <Input
                                            value={placeOfBirth}
                                            onChange={(e) => setUser({ ...user, placeOfBirth: e.target.value })}
                                            variant="flushed"
                                            borderColor="brand.100"
                                            placeholder="Place of birth"
                                        />
                                    </Box>
                                    <Box height="50px">
                                        <Input
                                            value={currentAddress}
                                            onChange={(e) => setUser({ ...user, currentAddress: e.target.value })}
                                            variant="flushed"
                                            borderColor="brand.100"
                                            placeholder="Current address"
                                        />
                                    </Box>
                                </SimpleGrid>
                                <SimpleGrid borderColor="brand.100" color="brand.100" spacing={8} columns={[2, 2, 2, 2, 2, 2]}>
                                    <Box height="20px"><Input value={motherName} onChange={e => setUser({ ...user, motherName: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Mother name" /></Box>
                                    <Box height="20px"><Input value={motherEdu} onChange={e => setUser({ ...user, motherEdu: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Education" /></Box>
                                    <Box height="20px"><Input value={motherPhone} onChange={e => setUser({ ...user, motherPhone: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Phone number" /></Box>
                                    <Box height="20px"><Input value={motherOccupation} onChange={e => setUser({ ...user, motherOccupation: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Occupation" /></Box>
                                    <Box height="20px"><Input value={fatherName} onChange={e => setUser({ ...user, fatherName: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Father name" /></Box>
                                    <Box height="20px"><Input value={fatherEdu} onChange={e => setUser({ ...user, fatherEdu: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Education" /></Box>
                                    <Box height="20px"><Input value={fatherPhone} onChange={e => setUser({ ...user, fatherPhone: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Phone number" /></Box>
                                    <Box height="20px"><Input value={fatherOccupation} onChange={e => setUser({ ...user, fatherOccupation: e.target.value })} variant="flushed" borderColor="brand.100" placeholder="Occupation" /></Box>
                                </SimpleGrid>
                                <Center>
                                    <Flex mt={10}>
                                        <Box height="20px"> Already have an account? </Box>
                                        <Box height="20px" ml={2} fontWeight="bold" cursor="pointer"> Sign in </Box>
                                    </Flex>
                                </Center>
                                <Center mt="30px">
                                    <Button
                                        bg='brand.100'
                                        disabled={
                                            email && password && rePassword && khmerName && name ?
                                                false : true
                                        }
                                        onClick={() => {
                                            complateRegistration()
                                        }}
                                    >
                                        <Box
                                            variant="solid"
                                            color="#fff"
                                            fontFamily="Segoe UI"
                                        >
                                            Complete Register
                                        </Box>
                                    </Button>
                                </Center>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            </Center>
        </Box>
    )
}

