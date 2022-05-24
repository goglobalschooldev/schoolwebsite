import { createClient } from 'contentful'
import { Box, Center } from '@chakra-ui/react'
import { Image, } from "@chakra-ui/react";
import React from 'react'
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router'
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "news"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'news',
        'fields.slug': params.slug
    })

    return {
        props: { news: items[0] }
    }
}

export default function newsdetails({ news }) {
    let router = useRouter()
    console.log(router.pathname)
    // let url = router 
    const { body, secondlybody, thumbnail, thirdbody, Fourthbody, title, src, date, thumbnail2, thumbnail3, thumbnail4 } = news.fields;
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let titleSize = { sm: "100%", md: "26px", lg: "28px", xl: "30px", "2xl": "38px" };
    let body_Text = { sm: "100%", md: "16px", lg: "18px", xl: "20px", "2xl": "20px" };
    const marginTop = {
        base: '90px',   //0px
        sm: '100px',     //320px
        md: '100px',     //768px
        lg: '100px',     //960px
        xl: '70px',     //1200px
        '2xl': '70px'   //1536px
    }
    // console.log("news::->", news)

    return (
        <Center>
            <NextSeo
                title={title}
                openGraph={{
                    url: "www.go-globalschool.com/news" + router.pathname,
                    site_name: "Go Global School",
                    title: title,
                    description: body,
                    images: [
                        {
                            // url: 'https:' + src.fields.file.url,
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
                p="20px"
                mt={marginTop}
                color='brand.100'
            >
                <Box fontSize={body_Text} >News</Box>
                <Box w="60%" fontSize={titleSize} fontFamily="Sushi Delivery Regular"
                    letterSpacing="2px">
                    {title}
                </Box>
                <Box >
                    {date}
                </Box>
                <Box mt="20px" fontSize={body_Text}>
                    {body}
                </Box>
                <Image mt="30px" src={'https:' + src.fields.file.url} />
                <Box
                    fontSize={body_Text}
                    mt="30px"
                >
                    {secondlybody}
                </Box>
                <Box>
                    <>
                        {
                            body ?
                                <Box
                                    fontSize={body_Text}
                                    mt="30px"
                                >
                                    {body}
                                </Box>
                                :
                                ""
                        }
                    </>
                    <>
                        {
                            thumbnail ?
                                <Image
                                    mt="30px"
                                    src={'https:' + thumbnail.fields.file.url}
                                />
                                :
                                ""
                        }
                    </>
                    <>
                        {
                            secondlybody ?
                                <Box
                                    fontSize={body_Text}
                                    mt="30px"
                                >
                                    {secondlybody}
                                </Box>
                                :
                                ""
                        }
                    </>
                    <>
                        {
                            thumbnail2 ?
                                <Image
                                    mt="30px"
                                    src={'https:' + thumbnail2.fields.file.url}
                                />
                                :
                                ""
                        }
                    </>
                    <>
                        {
                            thirdbody ?
                                <Box
                                    fontSize={body_Text}
                                    mt="30px"
                                >
                                    {thirdbody}
                                </Box>
                                :
                                ""
                        }
                    </>
                    <>
                        {
                            thumbnail3 ?
                                <Image
                                    mt="30px"
                                    src={'https:' + thumbnail3.fields.file.url}
                                />
                                :
                                ""
                        }
                    </>
                    <>
                        {
                            Fourthbody ?
                                <Box
                                    fontSize={body_Text}
                                    mt="30px"
                                >
                                    {Fourthbody}
                                </Box>
                                :
                                ""
                        }
                    </>
                    <>
                        {
                            thumbnail4 ?
                                <Image
                                    mt="30px"
                                    src={'https:' + thumbnail4.fields.file.url}
                                />
                                :
                                ""
                        }
                    </>

                </Box>
            </Box>
        </Center >
    )
}
