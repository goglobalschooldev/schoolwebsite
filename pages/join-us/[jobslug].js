import { createClient } from 'contentful'
import React from 'react'
import { Box, Center, List, ListItem, ListIcon } from '@chakra-ui/react'
import { Image, } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { NextSeo } from "next-seo";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "joinUs"
    })

    const paths = res.items.map(item => {
        return {
            params: { jobslug: item.fields.jobslug }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async ({ params }) => {
    
    const { items } = await client.getEntries({
        content_type: 'joinUs',
        'fields.jobslug': params.jobslug
    })

    return {
        props: { jobdetail: items[0] }
    }
}


export default function joinusdetials({ jobdetail }) {
    console.log(jobdetail)
    const { jobTitle, jobType, deadline, schedule, duties, jobDescription, jobRequirement, salaryRange, image } = jobdetail.fields;

    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let titleSize = { base: "20px",sm: "20px", md: "26px", lg: "28px", xl: "30px", "2xl": "30px" };
    let body_Text = { sm: "100%", md: "16px", lg: "18px", xl: "20px", "2xl": "20px" };
    let subTitle = { sm: "100%", md: "14px", lg: "16px", xl: "18px", "2xl": "26px" }

    const marginTop = {
        base: '80px',   //0px
        sm: '80px',     //320px
        md: '90px',     //768px
        lg: '90px',     //960px
        xl: '90px',     //1200px
        '2xl': '90px'   //1536px
    }
  
    return (
        <Center>
            <NextSeo
                title="Join Us Slug | Go Slobal School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "Join Us Slug",
                    description:
                    "Go Global School has been founded by a group of educational specialists, who collectively hold over 10 years of experience in the field. The curriculum has been developed in accordance with the academic programme set by the Ministry of Education, Youth, and Sport of The Kingdom of Cambodia and the British National Curriculum.",
                    images: [
                    {
                        // url: 'https:' + image.fields.file.url,
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
            <Box
                width={container}
                p="10px"
                mt={marginTop}
                color='brand.100'
            >
                <Box
                    w="60%"
                    fontSize={titleSize}
                    fontFamily="Sushi Delivery Regular"
                    letterSpacing="3px"
                    mb="10px"
                >
                    {jobTitle}
                </Box>
                <Box fontSize={body_Text}>
                    <Box >Job type : {jobType}</Box>
                    <Box >Deadline : {deadline}</Box>
                    <Box >Schedule : {schedule}</Box>
                    <Box >Salary : {salaryRange}</Box>
                </Box>
                <Image mt="30px" src={'https:' + image.fields.file.url} />
                <Box mt="20px" fontSize={body_Text}>
                    {jobDescription}
                </Box>

                <Box w="60%" fontSize={subTitle} mt="30px" fontWeight="600">Duties :</Box>
                <Box
                    fontSize={body_Text}
                    mt="20px"
                    mb="30px"
                >
                    <List spacing={2}>
                        {
                            duties.map(duty =>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    {duty}
                                </ListItem>
                            )
                        }
                    </List>
                </Box>
                <Box w="60%" fontSize={subTitle} fontWeight="600">Requirement :</Box>
                <Box
                    fontSize={body_Text}
                    mt="20px"
                    mb="40px"
                >
                    <List spacing={2}>
                        {
                            jobRequirement.map((job, index) =>
                                <ListItem>
                                    <ListIcon key={index} as={MdCheckCircle} color="green.500" />
                                    {job}
                                </ListItem>
                            )
                        }
                    </List>
                </Box>
            </Box>
        </Center>
    )
}