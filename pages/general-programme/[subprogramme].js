import React from 'react';
import { NextSeo } from "next-seo";
import AllProgrammeDetails from '../../components/Academic/AllProgrammeDetails'

const description = "Go Global School has been founded by a group of educational specialists, who collectively hold over 10 years of experience in the field. The curriculum has been developed in accordance with the academic programme set by the Ministry of Education, Youth, and Sport of The Kingdom of Cambodia and the British National Curriculum.";
const currentURL = "https://www.go-globalschool.com/";
const previewImage = '../link_image.jpg'
const siteName = "Go Global School"
export default function subprogramme() {
    return (
        <div>
           <NextSeo
                title="General Sub-Programme | Go Slobal School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "General Sub-Programme",
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
            <AllProgrammeDetails />
        </div>
    )
}