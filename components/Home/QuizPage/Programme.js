import { useState, useContext, useMemo, useEffect } from "react";
import { Center, Image, SimpleGrid, Box, Grid, GridItem, Button, Avatar, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import firebase from '../../../Auth/firebase';
import { AuthContext } from '../../../Context/AuthContext';
import { useRouter } from 'next/router'
import EditBtn from "./EditBtn";
import AddProgrammeBtn from "./AddProgrammeBtn";
import { useQuery } from '@apollo/client'
import { GET_STUDENT, GET_RESULT } from '../../../Schema/ApolloSchema';
import PlacementCard from "./PlacementCard";
import ViewProfileBtn from "./ViewProfileBtn";


export default function Programme() {

    const [student, setStudent] = useState({
        id: '',
        email: '',
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

    const { state, dispatch } = useContext(AuthContext)

    const { data, loading } = useQuery(GET_STUDENT);
    const { data: placementData } = useQuery(GET_RESULT);

    let heightFoot = 0

    let router = useRouter();

    useEffect(() => {
        if (!state.user) {
            router.push('/')
        }
    }, [])
    useMemo(() => {

        if (data) {
            setStudent({
                id: data.getStudent._id,
                email: data.getStudent.email,
                khmerName: data.getStudent.khmerName,
                name: data.getStudent.name,
                niceName: data.getStudent.niceName,
                gender: data.getStudent.gender,
                dateOfBirth: data.getStudent.dateOfBirth,
                transferFrom: data.getStudent.transferFrom,
                bloodType: data.getStudent.bloodType,
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
        }
    }, [data])


    let w_Box1 = { md: '55%', lg: "90%", xl: "90%", '2xl': "90%" };

    const checkHeight = (e) => {
        if (e - 12 >= 0) {
            return 150
        }
        if (e - 9 >= 0) {
            return 100
        }

        return 50
    }
    const logout = () => {
        firebase.auth().signOut().then(() => {
            router.push('/')
            dispatch({
                type: 'LOGGED_IN_USER',
                payload: null
            })
        }).catch((error) => {
            console.log('logout error', error)
        });
    }
    if (loading) {
        return (
            <Box padding="6" boxShadow="md" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
        )
    }
    const w_grid = { lg: '95%', xl: '80%', '2xl': '80%' }
    return (
        <Box >
            <Box style={{ position: 'relative' }}>
                <Box h="72vh">
                    <Image
                        // position="relative"
                        mt={{ md: "90px", lg: '2px' }}
                        w="100%"
                        h="400px"
                        objectFit="cover"
                        src="./cover-image-proquiz.png"
                    />
                </Box>

                <Center>
                    <Box
                        w={w_grid}
                        position='absolute'
                        top='2.5%'
                        bottom={'50%'}
                    >
                        <Grid templateColumns={{ lg: '30% 70%', xl: '25% 75%' }} mt='200px' gap={5}>
                            <GridItem colSpan={1} >
                                <Center>
                                    <Box
                                        bg="white"
                                        h="fit-content"
                                        w={w_Box1}
                                        ml="20px"
                                        borderRadius="5px"
                                        boxShadow="md" p="6" rounded="lg"
                                        alignItems="center"
                                    >
                                        <Center mt="10px">
                                            <Avatar
                                                colorScheme="pink"
                                                size="xl"
                                                name={student.name}
                                                src="https://bit.ly/tioluwani-kolawole" />
                                        </Center>
                                        <Center
                                            mt="10px"
                                            color="brand.100"
                                            fontFamily="Segoe UI"
                                            fontSize="22px"
                                        >
                                            {student.name}
                                        </Center>
                                        <Center
                                            color="brand.100"
                                            fontFamily="Segoe UI"
                                            fontSize="16px"
                                        >
                                            {
                                                student.email
                                            }
                                        </Center>
                                        <Center mt="20px">
                                            <ViewProfileBtn data={data} student={student} />
                                        </Center>
                                        <Center >
                                            <EditBtn data={data} student={student} />
                                        </Center>

                                        <Center >
                                            <AddProgrammeBtn studentId={student.id} />
                                        </Center>
                                        <Center cursor="pointer" onClick={() => logout()}>
                                            <Button
                                                bg="blue.50"
                                                h="40px"
                                                // mt="10%"
                                                color="brand.100"
                                                align="center"
                                                fontFamily="Segoe UI"
                                                fontSize="17px"
                                                borderRadius="10px"
                                                mt="70px"
                                            >
                                                Sign out
                                            </Button>
                                        </Center>
                                    </Box>
                                </Center>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Box mt="3%">
                                    <SimpleGrid spacing={{ md: '20px', lg: '0px' }} columns={[1, 1, 2, 2, 3, 3]} >
                                        {
                                            placementData &&
                                            placementData.getStudentResult.map(placement => {

                                                heightFoot = heightFoot + 1

                                                return (
                                                    <PlacementCard
                                                        key={placement._id}
                                                        placementId={placement.placement}
                                                        programme={placement.programme.name}
                                                        placement={placement.placement.name}
                                                        scoreBySubjects={placement.scoreBySubjects}
                                                    />
                                                )
                                            }

                                            )
                                        }
                                    </SimpleGrid>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box h={{ sm: `${checkHeight(heightFoot) * 4}vh`, md: `${checkHeight(heightFoot) * 2}vh`, lg: `${checkHeight(heightFoot) * 2}vh`, xl: `${checkHeight(heightFoot)}vh` }}></Box>
                </Center>

            </Box>
        </Box>
    )
}
