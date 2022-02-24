import React, { useEffect, useMemo, useState } from 'react'
import { GET_OPTION_BY_QUESTION, GET_ALL_QUESTIONS, GET_OPTION_SCORE } from '../../../Schema/ApolloSchema';
import { useQuery, useLazyQuery } from '@apollo/client';
import { Box, Divider, Flex, Image } from '@chakra-ui/react'
import { reactLocalStorage } from 'reactjs-localstorage';
import DOMPurify from 'dompurify';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
export default function Question({ questionId, question, score, number, lng, images }) {

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }

    const { data: questions } = useQuery(GET_ALL_QUESTIONS);
    const { data: options } = useQuery(GET_OPTION_BY_QUESTION, {
        variables: {
            questionId
        }
    });
    const [getScore, { loading, error, data }] = useLazyQuery(GET_OPTION_SCORE, {
        onCompleted: someData => {
            if (someData.getOptionScore != 0) {
                reactLocalStorage.set(questionId, score)
            } else {
                reactLocalStorage.remove(questionId);
            }
        }
    });

    const [Imagename, setImagename] = useState("")

    useEffect(() => {
        if (questions) {

            questions.getQuestions.forEach(element => {
                reactLocalStorage.remove(element._id);
            });
        }

    }, [])

    useMemo(() => {
        if (images) {
            images.forEach(e => setImagename(e.url))
        }
    }, images)

    return (
        <Box p="20px 60px 0px 60px" mt="20px">

            <Divider />
            <Box fontSize="20px"
                mt="20px"
                fontFamily={lng ? "" : 'Khmer OS Siemreap'}
            >
                <Flex color="#484747" mr="10px" lineHeight="10">
                    {number + ". "}  <Box w='5px'></Box> <div dangerouslySetInnerHTML={createMarkup(question)}></div>
                </Flex>

            </Box>
            <Box>
                <Image src={Imagename} />
            </Box>
            <Box mt="10px">
                <Radio.Group
                    buttonStyle="solid"
                    size='large'
                    onChange={e => {
                        getScore({
                            variables: { getOptionScoreId: e.target.value }
                        })
                    }}
                >
                    {
                        options &&
                        options.getOptionsByQuestion.map(opt =>
                            <Box key={opt._id} mt="15px" >
                                <Box>
                                    < Radio.Button
                                        value={opt._id}

                                        style={{ fontWeight: "bold", width: "900px", borderRadius: '10px', fontSize: "11pt", marginTop: "10px" }}
                                    >
                                        {`${opt.numbering}. ${opt.option}`}
                                    </Radio.Button>
                                </Box>
                                {
                                    opt.images.map(src => <Image src={src.url} />)
                                }
                            </Box>
                        )
                    }
                </Radio.Group>
            </Box >
        </Box >
    )
}
