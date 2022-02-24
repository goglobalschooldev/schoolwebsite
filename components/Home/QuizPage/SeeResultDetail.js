import React, { useMemo, useState } from 'react'
import { Box, Image, Center, Flex, Spacer } from '@chakra-ui/react'
// import ExportResult from "./ExportResult"
import { useRouter } from 'next/router';
import { GET_CERTIFICATE } from '../../../Schema/ApolloSchema';
import { useQuery } from '@apollo/client'
export default function SeeResultDetail() {
    const ref = React.createRef();
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [21, 29.7]
    };
    const { query } = useRouter();
    const { placementId } = query
    const { data } = useQuery(GET_CERTIFICATE, {
        variables: {
            placementId
        }
    })
    const [placement, setPlacement] = useState({
        studentName: '',
        placement: '',
    })
    const [Subjects, setSubjects] = useState([])
    // const isLetter = (str) => {
    //     return str.length === 1 && str.match(/[a-z]/i);
    // }
    // useEffect(() => {
        // if () {
        //     console.log('tru')
        // }else{
        //     console.log('flae')
        // }
    // }, [])


    useMemo(() => {
        if (data) {
            setPlacement({
                studentName: data.getResultCertificate.student.name,
                placement: data.getResultCertificate.placement.name
            })
            setSubjects(data.getResultCertificate.scoreBySubjects)
        }
    }, [data])

    const Subtitle = { base: "19px", sm: "24px", md: "24px", lg: "24px", xl: "26px", '2xl': "26px" };
    const marginTop = { base: "60px", sm: "60px", md: "50px", lg: "70px", '2xl': "70px" }
    const w_ImageBackground = { base: "100%", sm: "100%", md: "100%", lg: "93%", xl: "80%", '2xl': "60%" }
    const w_ScoreTable = { base: "100%", sm: "100%", md: "100%", lg: "70%", xl: "60%", '2xl': "45%" }
    const display_Result = { base: "none", sm: "none", md: "none", lg: "flex", xl: "flex", '2xl': "flex" }

    return (
            <Center display={display_Result}>
                <Box
                    position="relative"
                    mt={marginTop}
                    h="80%"
                    w='90%'
                    mb="200px"
                >
                    <Box ref={ref}>
                        <Center position="absolute">
                            <Image
                                zIndex="-1"
                                bg="white"
                                w={w_ImageBackground}
                                src="../Placement Test Certificate.png"
                            />
                        </Center>
                        <Center>
                            <Image w="280px" src="officail_logo.png" />
                        </Center>
                        <Center
                            fontSize="40px"
                            color="#ED2777"
                            fontWeight="bold"
                        >
                            Placement Test Certificate
                        </Center>
                        <Center
                            mt="20px"
                            fontSize="22px"
                            color="brand.100"
                        >
                            This is to certify that
                        </Center>
                        <Center
                            fontSize={Subtitle}
                            color="brand.100"
                            fontSize="30px"
                            fontWeight="bold"
                            mt="20px"
                        >
                            {
                                placement.studentName
                            }
                        </Center>
                        <Center mt="20px" fontSize="22px" color="brand.100"
                        >has successfully pass the</Center>
                        <Center
                            fontSize="30px"
                            color="brand.100"
                            fontWeight="bold"
                            mt="20px"
                        >
                            {placement.placement} Online Placement Test
                        </Center>
                        <Center
                            fontSize="22px"
                            fontWeight="semibold"
                            mt="40px"
                            color="#ED2777"
                        >
                            Online Placement Test Result
                        </Center>
                        {
                            data && Subjects.map(sub =>
                                <Box mt="10px" fontSize="18px" color="brand.100">
                                    <Center>
                                        <Box w={w_ScoreTable} fontWeight="bold">{sub.subject}</Box>
                                    </Center>
                                    <Center>
                                        <Flex mt="10px" bg="blue.100" h="40px" w={w_ScoreTable}>
                                            <Box p="4px 0px 0px 30px" >Socre</Box>
                                            <Spacer/>
                                            <Box pt="4px">TimeTaken</Box>
                                            <Spacer/>
                                            <Box p="4px 30px 0px 0px">Level</Box>
                                        </Flex>
                                    </Center>
                                    <Center>
                                        <Flex h="40px" w={w_ScoreTable}>
                                            <Box p="4px 0px 0px 30px">{sub.score}</Box>
                                            <Spacer />
                                            <Box pt="4px">{sub.timeTaken}</Box>
                                            <Spacer />
                                            <Box m="4px 30px 0px 0px">{placement.placement}</Box>
                                        </Flex>
                                    </Center>
                                </Box>
                            )
                        }
                    </Box>
                </Box>
            </Center>
    )
}

// <Center mt="60px" display={display_Result}>
//                 <div className="App">
//                     <Pdf targetRef={ref} filename="div-blue.pdf" options={options}>
//                         {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
//                     </Pdf>
//                     <div >
//                         <h1>Hello CodeSandbox</h1>
//                         <h2>Start editing to see some magic happen!</h2>
//                     </div>
//                 </div>
//             </Center>