import React, { useEffect } from 'react'
import { Box, Center, Image, Flex, Divider } from '@chakra-ui/react'
// import DOMPurify from 'dompurify';
import { GET_QUESTION_BY_EXERCISE } from '../../../Schema/ApolloSchema';
import { useQuery } from '@apollo/client';
import Question from './Question';
import { reactLocalStorage } from 'reactjs-localstorage';
import DOMPurify from 'dompurify';

export default function ExerciseData(
    {
        numbering, title, paragraph, images, exerciseId, lng
    }
) {
    const { data: questions } = useQuery(GET_QUESTION_BY_EXERCISE, {
        variables: {
            exerciseId
        }
    })
    useEffect(() => {
        if (questions) {
            reactLocalStorage.set(exerciseId, questions.getQuestionByExercise.length)
        }

    }, [questions])
    let number = 1;

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }

    return (
        <div >
            <Box mt="70px">
                <Divider />
                <Box p="30px">
                    <Flex color="#484747" fontSize="20px" fontWeight={"bold"} >
                        <Box textDecoration={"underline"} >Exercise: {numbering}</Box>
                    </Flex>
                    <Box mt="30px" fontSize='20px' fontFamily={lng ? "" : 'Khmer OS Siemreap'} >
                        {title}
                    </Box>
                    <Box
                        lineHeight="10"
                        fontSize="20px"
                        fontFamily={lng ? "" : 'Khmer OS Siemreap'}
                    >

                        <div dangerouslySetInnerHTML={createMarkup(paragraph)}></div>
                    </Box>
                </Box>
                <Center>
                    {
                        images && images.map((img, index) =>
                            <Image key={index} src={img.url} />
                        )
                    }
                </Center>
                {
                    questions && questions.getQuestionByExercise.map(question =>
                        <Question
                            lng={lng}
                            key={question._id}
                            questionId={question._id}
                            number={number++}
                            question={question.question}
                            score={question.score}
                            images={question.images}
                        />

                    )}
            </Box>
        </div>
    )
}
