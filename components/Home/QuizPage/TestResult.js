import React, { useState, useEffect, useRef } from 'react'
import {

    useDisclosure,
    Button,
    Box,
    Center,

} from "@chakra-ui/react";
import moment from 'moment'
import ReactToPrint from "react-to-print";
import { GET_OVERAL, GET_SUBJECT_RESULT } from '../../../Schema/ApolloSchema';
import { useQuery } from '@apollo/client';


export default function TestResult({
    stuName,
    dateOfBirth,
    curreneEDU,
    from,
    testDate,
    resultDate,
    subject,
    sub1,
    sub2,
    programme,
    placementId
}) {
    // console.log(placementId)
    const { loading, error, data } = useQuery(GET_OVERAL, {
        variables: { placementId: placementId },
    });
    const { data: testResult } = useQuery(GET_SUBJECT_RESULT, {
        variables: { placementId: placementId },
    });
    // console.log(testResult?.getSubjectResult)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const componentRef = useRef();
    const [passScore, setPassScore] = useState(0);
    const [considerScore, setConsiderScore] = useState(0);
    const [getTestFor, setGetTestFor] = useState('');

    function opentModel() {
        if (programme === "Foreign Languages Programme") {
            setConsiderScore(45);
            setPassScore(50);
            onOpen();
        } else {
            setConsiderScore(25);
            setPassScore(30);
            onOpen();
        }

    }

    useEffect(() => {
        opentModel()
        if (curreneEDU) {
            switch (curreneEDU) {
                case 'Kindergarten':
                    setGetTestFor("Reception")
                    break;
                case 'Reception':
                    setGetTestFor("Year 1")
                    break;
                case 'Year 1':
                    setGetTestFor("Year 2")
                    break;
                case 'Year 2':
                    setGetTestFor("Year 3")
                    break;
                case 'Year 3':
                    setGetTestFor("Year 4")
                    break;
                case 'Year 4':
                    setGetTestFor("Year 5")
                    break;
                case 'Year 5':
                    setGetTestFor("Year 6")
                    break;
                case 'Year 6':
                    setGetTestFor("Year 7")
                    break;
                case 'Year 7':
                    setGetTestFor("Year 8")
                    break;
                case 'Year 8':
                    setGetTestFor("Year 9")
                    break;
                case 'Grade 2':
                    setGetTestFor("Grade 3")
                    break;
                case 'Grade 3':
                    setGetTestFor("Grade 4")
                    break;
                case 'Grade 4':
                    setGetTestFor("Grade 5")
                    break;
                case 'Grade 5':
                    setGetTestFor("Grade 6")
                    break;
                case 'Grade 6':
                    setGetTestFor("Grade 7")
                    break;
                case 'Grade 7':
                    setGetTestFor("Grade 8")
                    break;
                case 'Grade 8':
                    setGetTestFor("Grade 9")
                    break;
                case 'Grade 9':
                    setGetTestFor("Grade 10")
                    break;
                case 'Grade 10':
                    setGetTestFor("Grade 11")
                    break;
                case 'Grade 11':
                    setGetTestFor("Grade 12")
                    break;
                default:
                    setGetTestFor('')
                    break;
            }
        }
    }, [curreneEDU])

    return (
        <Box mt="20px">
            <Center>
                <ReactToPrint
                    trigger={() => <Button
                        bg="brand.100"
                        borderColor='brand.100'
                        color="white"
                        letterSpacing='0.5px'
                    >
                        Get Result
                    </Button>}
                    content={() => componentRef.current}
                    documentTitle={`${curreneEDU} Placement Test Result-${stuName}.pdf`}
                // onBeforeGetContent={() => opentModel()}
                />

            </Center>
            <Box display="none">
                <Box h="1000px" ref={componentRef} style={{ position: 'relative' }}>
                    <Center >
                        <img src="../Placement Test Latter-01.png" />
                    </Center>
                    <Box
                        // style={{ position: 'absolute' }}
                        mt="-850px"
                        style={{ zIndex: 1 }}
                    >
                        <Box
                            fontSize="20px"
                            w="100%"
                            mt="30px"
                            mb="20px"
                            textAlign="center"
                            fontWeight="bold"
                        >
                            Placement Test Result
                        </Box>

                        <table className="test-info" style={{ marginTop: "150px" }}>
                            <tbody>
                                <tr>
                                    <td className="title-header" style={{ width: '35%' }}>Student Name </td>
                                    <td>:&emsp;{stuName}</td>
                                </tr>
                                <tr>
                                    <td className="title-header">Date of Birth</td>
                                    <td>:&emsp; {dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td className="title-header">Current Education</td>
                                    <td>:&emsp; {curreneEDU}</td>
                                </tr>
                                <tr>
                                    <td className="title-header">From Institution</td>
                                    <td>:&emsp;{from}</td>
                                </tr>
                                <tr>
                                    <td className="title-header">Tested for</td>
                                    <td>:&emsp; {getTestFor}</td>
                                </tr>
                                <tr>
                                    <td className="title-header">Test Date</td>
                                    <td>:&emsp; {moment(testDate).format("DD/MM/YYYY")}</td>
                                </tr>
                                <tr>
                                    <td className="title-header">Result Date</td>
                                    <td>:&emsp; {moment(resultDate).format("DD/MM/YYYY")}</td>
                                </tr>
                            </tbody>
                        </table>


                        <table className="table-test-result">
                            <tbody>
                                <tr>
                                    <td> </td>
                                    <td>Score</td>
                                    <td>Result</td>
                                </tr>
                                {
                                    testResult?.getSubjectResult?.map(sub =>
                                        <tr>
                                            <td>{sub?.subject}</td>
                                            <td>{sub?.score}</td>
                                            <td>{sub?.status}</td>
                                        </tr>
                                    )
                                }

                                <tr className="result-footer">
                                    <td>Overall</td>
                                    <td>
                                        {
                                            programme === "Khmer Programme" ? (sub1 + sub2) / 2 : ""
                                        }
                                    </td>
                                    <td>
                                        {
                                            data?.getOverall
                                        }

                                    </td>
                                </tr>


                            </tbody>
                        </table>

                        <div className="note-detail">
                            <Box
                                mt="50px"
                                fontWeight="bold"
                            >
                                Note:
                            </Box>
                            <Box style={{ fontSize: 12 }}>
                                {
                                    `- The score is grading with a ${programme === "Foreign Languages Programme" ? "100" : "50"}-point scale for each subject under the time given.`
                                }

                            </Box>
                            <Box style={{ fontSize: 12 }}>
                                {
                                    `- Student have to pass ${programme === "Foreign Languages Programme" ? "(50/100)" : "(25/50)"} for both subjects to consider in passing to the intended level.`
                                }

                            </Box>
                        </div>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}
