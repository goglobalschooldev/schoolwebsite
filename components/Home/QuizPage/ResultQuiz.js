import React, { useEffect, useState } from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useRouter } from "next/router";
import Confetti from 'react-confetti';
import { Button } from 'antd';
// https://www.npmjs.com/package/react-confetti
import { GET_SCORE_SUBJECT } from '../../../Schema/ApolloSchema';
import { useQuery } from '@apollo/client'

export default function ResultQuiz() {
    const { query } = useRouter();
    const { subjectId } = query;
    const { data } = useQuery(GET_SCORE_SUBJECT, {
        variables: {
            subjectId
        }
    });

    const router = useRouter();
    const boxMt = {
        base: "100px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "20px",  //960px
        xl: "20px",  //1200px
        '2xl': "20px"  //1536px
    };
    const boxP = {
        base: "40px 10px", //0px
        sm: "40px 30px",  //320px
        md: "40px 60px",  //768px
        lg: "40px 60px",  //960px
        xl: "40px 60px",  //1200px
        '2xl': "40px 60px"  //1536px
    }
    const [width, setwidth] = useState(1000);
    const [height, setHeight] = useState(1000);
    const [currectScore, setcurrectScore] = useState(0)

    const [score, setScore] = useState(0)

    useEffect(() => {

        setcurrectScore(reactLocalStorage.get('CurrectQuestion', 0))
        setScore(reactLocalStorage.get('SubjectScore', 0))
        setHeight(window.innerHeight + 'px')
        setwidth(window.innerWidth + 'px')


    }, [])

  
    return (
        <Center>
            {
                data && data.getSubjectScore < 49 ? null : <Confetti
                    width={width}
                    height={height}
                    tweenDuration={300}
                />
            }

            <Box w='fit-content' p={boxP} color='#ED2777' bg='white' mt={boxMt} >
                <Center><Image src='' /></Center>
                <Center fontSize='46px' fontWeight='700' >Results</Center>
            
                <Center fontSize='30px'>Your final score is</Center>
                <Center position='relative' bg='white' w='270px' h='270px'>
                    <Box
                        padding='20px 35px'
                        bg='#ED2777'
                        color='white'
                        fontSize='80px'
                        fontWeight='700'
                        borderRadius='50%'
                        mt='20px'
                        mb='20px'
                    >
                        {
                            data && data.getSubjectScore
                        }
                    </Box>
                    <Image src='../score-style.png' w='120%' position='absolute' />
                </Center>
                <Box>
                    <Center>
                        <Button onClick={() => router.push('/quiz-programme')}>
                            Back
                        </Button>
                    </Center>
                </Box>
            </Box>

        </Center>

    )
}
