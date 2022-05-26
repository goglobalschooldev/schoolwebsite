import React, { useMemo, useState, useEffect } from 'react'
import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import { GET_EXERCISE, GET_ALL_QUESTIONS, ADD_SCORE_SUBJECT, GET_SUBJECT, GETPROGRAMMEBYSUBJECT, GET_STUDENT } from '../../../Schema/ApolloSchema';
import { SkeletonText, SkeletonCircle } from "@chakra-ui/react"
import { useMutation, useQuery } from '@apollo/client';
import ExerciseData from './ExerciseData'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useRouter } from 'next/router';
// https://github.com/amrlabib/react-timer-hook
import CountdownTimer from "react-component-countdown-timer";
// https://github.com/savalanpour/react-component-countdown-timer

import { useStopwatch } from 'react-timer-hook';
import QuzeTimer from './QuzeTimer';

export default function StartQuiz({ subjectId }) {
    const [addScoreSubject] = useMutation(ADD_SCORE_SUBJECT);
    const [time, setTime] = useState(0)
    const router = useRouter();
    const [score, setScore] = useState(0);
    const [khmer, setkhmer] = useState(false)
    const CurrentTimer = new Date();
    const [total, setTotal] = useState(0);
    CurrentTimer.setSeconds(CurrentTimer.getSeconds() + time);

    const { data: stu } = useQuery(GET_STUDENT);
    const {
        seconds,
        minutes,
        hours,
        start,
    } = useStopwatch({ autoStart: true });


    const { data: subject } = useQuery(GET_SUBJECT, {
        variables: {
            subjectId
        }
    });

    const { data: questions, loading } = useQuery(GET_ALL_QUESTIONS);
    const { data: exercises } = useQuery(GET_EXERCISE, {
        variables: {
            subjectId
        }
    });
    const boxP = {
        base: "50px 3px",
        sm: "50px 10px",
        md: "50px 60px",
        lg: "50px 60px",
        xl: "50px 60px",
        '2xl': "50px 60px"
    }
    const top = { base: "90px", sm: "100px", md: "100px", lg: "30px", xl: "30px", '2xl': "30px" }
    const { data: programme } = useQuery(GETPROGRAMMEBYSUBJECT, {
        variables: {
            subjectId
        }
    });

    useMemo(() => {
        if (subject) {
            setTime(subject.getSubject.timer)
        }

    }, [subject])

    useEffect(() => {
        if (score > 0) {
            router.push('./quiz-programme')
        }
        start()
        if (programme && programme.getProgrammebySubject === 'Khmer Programme') {
            setkhmer(true)
        }

    }, [])

    const settings = {
        count: time,
        border: true,
        showTitle: true,
        labelSize: 20,
        noPoints: true,
        hideDay: true,
        hideHours: true,
        onEnd: () => handleSubmit()
    };

    const handleSubmit = () => {

        let allScore = [0];
        let QuestionIndex = []

        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        if (questions) {
            questions.getQuestions.forEach(element => {

                var getScore = parseInt(reactLocalStorage.get(element._id, 0))

                if (reactLocalStorage.get(element._id, 0) != '0') {
                    QuestionIndex.push(reactLocalStorage.get(element._id, 0))
                }

                allScore.push(getScore)
            });

        }

        let subjectScore = allScore.reduce(reducer);
        let allQuestins = [0];
        if (exercises) {
            exercises.getExerciseBySubject.forEach(element => {
                allQuestins.push(element.questions)

            });
        }
        let totlel = allQuestins.reduce(reducer)
        setTotal(allQuestins.reduce(reducer))
        if (hours.toString() === '0') {
            addScoreSubject({
                variables: {
                    input: {
                        timeTaken: `${minutes}:${seconds}`,
                        score: subjectScore,
                        id: subjectId,
                        _id: stu?.getStudent._id
                    }
                }
            })

        } else {
            addScoreSubject({
                variables: {
                    input: {
                        timeTaken: `${hours}:${minutes}:${seconds}`,
                        score: subjectScore,
                        id: subjectId,
                        _id: stu?.getStudent._id
                    }
                }
            })
        }

        setTimeout(() => {
            router.push(`/quiz-programme`)
        }, 900);
    }

    if (loading) {
        return (
            <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
        )
    }

    return (
        <div >

            <Center>
                <Box
                    w={{ base: "90%", sm: "90%", md: "80%", lg: "80%", xl: "75%", '2xl': "70%" }}
                    color='brand.100'
                    mt={top}
                    bg='white'
                    h="fit-content"
                    p={boxP}
                >
                    <Center>
                        <Flex w="60%">
                            <Box bg="brand.100" w="32%" h="4px" />
                            <Spacer />
                            <Box bg="#ED2777" w="32%" h="4px" />
                            <Spacer />
                            <Box bg="#A64B9A" w="32%" h="4px" />
                        </Flex>
                    </Center>
                    {
                        exercises &&
                        exercises.getExerciseBySubject.map(exercise =>
                            <ExerciseData
                                lng={khmer}
                                key={exercise._id}
                                exerciseId={exercise._id}
                                subject={exercise.subject}
                                numbering={exercise.numbering}
                                title={exercise.title}
                                paragraph={exercise.paragraph}
                                score={exercise.score}
                                images={exercise.images}
                            />
                        )
                    }
                    <Center>
                        <Box
                            fontWeight="semibold"
                            bg="white"
                            w="300px"
                            h="100px"
                            p="5px 20px"
                            color="#ED2777"
                            borderRadius="10px 10px 0px 0px"
                            // borderColor="#ED2777"
                            borderWidth="2px"
                            textAlign="center"
                            position="fixed"
                            bottom="0"
                            zIndex="2"
                        >
                            <Box display="none">
                                <CountdownTimer {...settings} />
                            </Box>
                            <Box fontWeight="bold" color="#A64B9A" mt="20px">
                                <QuzeTimer expiryTimestamp={CurrentTimer} />
                            </Box>
                        </Box>
                    </Center>
                    <Center>
                        <Box mt='30px'>
                            <Center>
                                <Box
                                    backgroundColor='brand.100'
                                    color='white'
                                    w='fit-content'
                                    p='10px 25px'
                                    borderRadius='10px'
                                    fontWeight='600'
                                    fontSize='17px'
                                    cursor='pointer'
                                    onClick={
                                        () => handleSubmit()
                                    }
                                >
                                    Submit
                                </Box>
                            </Center>
                        </Box>
                    </Center>
                </Box>
            </Center>
        </div>
    )
}


