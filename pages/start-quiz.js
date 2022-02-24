import React, { useEffect } from 'react'
import { NextSeo } from "next-seo";
import StartQuiz from '../components/Home/QuizPage/StartQuiz';
import { useRouter } from "next/router";
import { reactLocalStorage } from 'reactjs-localstorage';
import { useQuery } from '@apollo/client';
import { GET_EXERCISE } from '../Schema/ApolloSchema'

export default function Startquiz() {
    const { query } = useRouter();
    const { id } = query;
    const { data: subject } = useQuery(GET_EXERCISE, {
        variables: {
            subjectId: id
        }
    })
   
    useEffect(() => {
        let allQuestion = []
        if (subject) {
            subject.getExerciseBySubject.forEach(element => {
               
                allQuestion.push(reactLocalStorage.get(element._id, 0))
            });

            reactLocalStorage.set('allQuestion', allQuestion.length)

        }

       
    }, [])
    return (
        <div>
            <NextSeo
                title="Start Quiz | Go Global School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "Choose Subject",
                    description:
                        "Go Global School has been founded by a group of educational specialists, who collectively hold over 10 years of experience in the field. The curriculum has been developed in accordance with the academic programme set by the Ministry of Education, Youth, and Sport of The Kingdom of Cambodia and the British National Curriculum.",
                    images: [
                        {
                            url: "/link_image.jpg",
                            width: 700,
                            height: 500,
                            alt: "Logo",
                            type: "image/jpg",
                        },
                    ],
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <StartQuiz subjectId={query.id} />
        </div>
    )
}
